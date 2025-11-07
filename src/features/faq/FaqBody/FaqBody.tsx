'use client'

import { type ComponentProps, useEffect, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { classes } from '@/utils/css'

import styles from './FaqBody.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.FaqPageQuery | null | undefined
}

export const FaqBody = ({ data, ...props }: Props) => {
  const categories = (data?.allFaqCategories || []).map(
    cat => cat?.category || ''
  )

  const [selectItemIndex, setSelectItemIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0] || ''
  )
  const [filteredArticles, setFilteredArticles] = useState<Array<any>>(
    []
  )

  useEffect(() => {
    if (!data) return

    const allArticles = [
      ...(data.allFaqGenerals || []),
      ...(data.allFaqStudentLives || []),
      ...(data.allFaqPartnerships || []),
      ...(data.allFaqGovernanceFinancings || []),
      ...(data.allFaqCommunities || []),
    ]

    allArticles.sort((a, b) => {
      const dateA = new Date(a?.publishedAt || '').getTime()
      const dateB = new Date(b?.publishedAt || '').getTime()
      return dateB - dateA
    })

    setFilteredArticles(
      allArticles.filter(article => {
        return article?.category?.category === selectedCategory
      })
    )
  }, [data, selectedCategory])

  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    setSelectItemIndex(0)
  }

  return (
    <div
      className={styles.body}
      {...props}
    >
      <div className={styles.categorySelector}>
        {(categories || []).map((category, index) => {
          return (
            <div
              key={index}
              className={classes(
                styles.categoryItem,
                selectedCategory === category ? styles.active : ''
              )}
              onClick={() => selectCategory(category)}
            >
              {category}
            </div>
          )
        })}
      </div>
      {(filteredArticles || []).map((item, index) => {
        return (
          <div
            className={styles.itemWrapper}
            key={index}
            onClick={() => setSelectItemIndex(index)}
          >
            <div className={styles.questionWrapper}>
              <h3 className={styles.question}>{item?.question}</h3>
              <div
                className={classes(
                  styles.button,
                  selectItemIndex === index ? styles.active : ''
                )}
              >
                <div className={styles.horizontalLine}></div>
                <div className={styles.verticalLine}></div>
              </div>
            </div>
            <div
              className={classes(
                styles.answerWrapper,
                selectItemIndex === index ? styles.active : ''
              )}
            >
              <DatoStructuredText data={item?.answer} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

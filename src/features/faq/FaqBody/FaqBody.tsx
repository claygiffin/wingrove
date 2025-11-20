'use client'

import {
  type ComponentProps,
  useEffect,
  useMemo,
  useState,
} from 'react'

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

  const [selectedItemIndexes, setSelectedItemIndexes] = useState<
    number[]
  >([])
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0] || ''
  )

  const allArticles = useMemo(() => {
    if (!data) return []
    return [
      ...(data.allFaqGenerals || []),
      ...(data.allFaqStudentLives || []),
      ...(data.allFaqPartnerships || []),
      ...(data.allFaqGovernanceFinancings || []),
      ...(data.allFaqCommunities || []),
    ].sort((a, b) => {
      const dateA = new Date(a?.publishedAt || '').getTime()
      const dateB = new Date(b?.publishedAt || '').getTime()
      return dateB - dateA
    })
  }, [data])

  const filteredArticles = useMemo(
    () =>
      allArticles.filter(
        article => article?.category?.category === selectedCategory
      ),
    [allArticles, selectedCategory]
  )

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(prev => {
      if (prev === category) {
        return prev
      }
      setSelectedItemIndexes([])
      return category
    })
  }
  const handleSelectItem = (index: number) => {
    setSelectedItemIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index)
      }
      return [...prev, index]
    })
  }
  return (
    <div
      className={styles.body}
      {...props}
    >
      <div className={styles.categorySelector}>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={classes(
                styles.categoryItem,
                selectedCategory === category ? styles.active : ''
              )}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
      {filteredArticles.map((item, index) => {
        return (
          <div
            className={styles.itemWrapper}
            key={index}
          >
            <button
              className={styles.questionWrapper}
              onClick={() => handleSelectItem(index)}
            >
              <h3 className={styles.question}>{item?.question}</h3>
              <div
                className={classes(
                  styles.button,
                  selectedItemIndexes?.includes(index)
                    ? styles.active
                    : ''
                )}
              >
                <div className={styles.horizontalLine}></div>
                <div className={styles.verticalLine}></div>
              </div>
            </button>
            <div
              className={classes(
                styles.answerWrapper,
                selectedItemIndexes?.includes(index)
                  ? styles.active
                  : ''
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

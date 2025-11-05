'use client'

import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { type ComponentProps, useEffect, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'

import { DatoImageFocused } from '@/features/dato-image'

import styles from './ArticlesBody.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.ArticlesPageQuery
}

export const ArticlesBody = ({ data, ...props }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState('All Articles')
  const [filteredArticles, setFilteredArticles] = useState<Array<any>>(
    []
  )
  const categories = [
    'All Articles',
    ...(data.allArticleCategories || []).map(
      cat => cat?.category || ''
    ),
  ]
  const router = useRouter()

  useEffect(() => {
    if (!data) return

    const allArticles = [
      ...(data.allArticles || []),
      ...(data.allPdfArticles || []),
      ...(data.allExternalArticles || []),
    ]

    allArticles.sort((a, b) => {
      const dateA = new Date(a?.publishedAt || '').getTime()
      const dateB = new Date(b?.publishedAt || '').getTime()
      return dateB - dateA
    })

    if (selectedCategory === 'All Articles') {
      setFilteredArticles(allArticles)
    } else {
      setFilteredArticles(
        allArticles.filter(article => {
          return article?.category?.category === selectedCategory
        })
      )
    }
  }, [data, selectedCategory])

  const clickArticle = (article: any) => {
    switch (article?.__typename) {
      case 'ArticleRecord':
        router.push(`/articles/${article?.slug}`)
        break
      case 'PdfArticleRecord':
        window.open(
          article?.documentFile?.pdf?.url || '',
          '_blank',
          'noopener,noreferrer'
        )
        break
      case 'ExternalArticleRecord':
        window.open(
          article?.externalUrl?.url || '',
          '_blank',
          'noopener,noreferrer'
        )
        break
      default:
        break
    }
  }

  return (
    <div
      className={styles.body}
      {...props}
    >
      <div className={styles.selectbox}>
        <div>
          <span className={styles.category}>
            {selectedCategory}
            <BiCaretDown />
          </span>
          <select
            id="category-selector"
            onChange={e => setSelectedCategory(e.target.value)}
            defaultValue={selectedCategory}
          >
            {categories.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.articlesWrapper}>
        {filteredArticles?.map((article, index) => {
          return (
            <div
              className={styles.articleCard}
              key={index}
              onClick={() => clickArticle(article)}
            >
              <DatoImageFocused
                className={styles.thumbnail}
                data={article?.thumbnail?.responsiveImage}
                focalPoint={article?.thumbnail?.focalPoint}
              />
              <div className={styles.articleBody}>
                <div className={styles.info}>
                  <h4 className={styles.category}>
                    {article?.category?.category}
                  </h4>
                  <h4 className={styles.publishDate}>
                    {format(
                      new Date(article?.publishedAt || ''),
                      'MMMM d, yyyy'
                    )}
                  </h4>
                </div>
                <h2 className={styles.title}>{article?.title}</h2>
                {article?.publisherName && (
                  <h4 className={styles.publisher}>
                    {article?.publisherName}
                  </h4>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

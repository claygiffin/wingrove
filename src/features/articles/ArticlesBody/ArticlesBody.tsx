'use client'

import { format } from 'date-fns'
import Link from 'next/link'
import { type ComponentProps, useMemo, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'

import { DatoImageFocused } from '@/features/dato-image'

import styles from './ArticlesBody.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.ArticlesPageQuery
}

export const ArticlesBody = ({ data, ...props }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState('All Articles')

  const categories = [
    'All Articles',
    ...(data.allArticleCategories || []).map(
      cat => cat?.category || ''
    ),
  ]

  const allArticles = useMemo(() => {
    return [
      ...(data.allArticles || []),
      ...(data.allPdfArticles || []),
      ...(data.allExternalArticles || []),
    ].sort((a, b) => {
      const dateA = new Date(a?.publishedAt || '').getTime()
      const dateB = new Date(b?.publishedAt || '').getTime()
      return dateB - dateA
    })
  }, [data])

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All Articles') {
      return allArticles
    }
    return allArticles.filter(article => {
      return article?.category?.category === selectedCategory
    })
  }, [allArticles, selectedCategory])

  type Article =
    | Queries.ArticleFragment
    | Queries.PdfArticleFragment
    | Queries.ExternalArticleFragment

  const getArticleLink = (article: Article) => {
    switch (article.__typename) {
      case 'ArticleRecord': {
        return `/articles/${article.slug}`
      }
      case 'ExternalArticleRecord': {
        return article.externalUrl.url
      }
      case 'PdfArticleRecord': {
        return article.documentFile.pdf.url
      }
      default: {
        return ''
      }
    }
  }

  const getArticleProps = (article: Article) => {
    switch (article.__typename) {
      case 'ArticleRecord': {
        return { scroll: false }
      }
      case 'ExternalArticleRecord':
      case 'PdfArticleRecord': {
        return { target: '_blank' }
      }
    }
  }

  const getPublisher = (article: Article) => {
    switch (article.__typename) {
      case 'PdfArticleRecord':
      case 'ArticleRecord': {
        return
      }
      case 'ExternalArticleRecord': {
        return (
          <h4 className={styles.publisher}>{article.publisherName}</h4>
        )
      }
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
            <Link
              className={styles.articleCard}
              key={index}
              href={getArticleLink(article)}
              {...getArticleProps(article)}
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
                {getPublisher(article)}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

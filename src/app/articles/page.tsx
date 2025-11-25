import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import {
  ArticleCategoryFragment,
  ArticleFragment,
  ArticlesBody,
  ArticlesBodyFragment,
  ExternalArticleFragment,
  PdfArticleFragment,
} from '@/features/articles'
import { LogoWelcome } from '@/features/logo'
import { PageHero } from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './articles.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query ArticlesPage {
    articlesPage {
      title
      ...ArticlesBody
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allArticles {
      ...Article
    }
    allPdfArticles {
      ...PdfArticle
    }
    allExternalArticles {
      ...ExternalArticle
    }
    allArticleCategories {
      ...ArticleCategory
    }
  }
  ${ArticlesBodyFragment}
  ${ArticleFragment}
  ${PdfArticleFragment}
  ${ExternalArticleFragment}
  ${ArticleCategoryFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { articlesPage },
  } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(articlesPage?._seoMetaTags || [], {
    canonicalSlug: articlesPage?.slug,
  })
}

const ArticlesPage: NextPage = async () => {
  const { data } = await datoRequest<Queries.ArticlesPageQuery>({
    query,
  })
  if (!data.articlesPage) notFound()
  return (
    <main className={styles.main}>
      <PageHero
        title={data.articlesPage?.title}
        color="aqua"
      />
      <ArticlesBody data={data} />
    </main>
  )
}

export default ArticlesPage

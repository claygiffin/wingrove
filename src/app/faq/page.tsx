import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { FaqBody, FaqBodyFragment } from '@/features/faq'
import { LogoWelcome } from '@/features/logo'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './faq.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query FaqPage {
    faqPage {
      title
      ...FaqBody
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${FaqBodyFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { faqPage },
  } = await datoRequest<Queries.FaqPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(faqPage?._seoMetaTags || [], {
    canonicalSlug: faqPage?.slug,
  })
}

const FaqPage: NextPage = async () => {
  const {
    data: { faqPage },
  } = await datoRequest<Queries.FaqPageQuery>({
    query,
  })
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{faqPage?.title}</h2>
        <div className={styles.backgroundLogo}>
          <div className={styles.logoWrapper}>
            <LogoWelcome />
          </div>
        </div>
      </div>
      <FaqBody data={faqPage} />
    </main>
  )
}

export default FaqPage

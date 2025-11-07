import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  FaqBody,
  FaqCategoryFragment,
  FaqCommunityFragment,
  FaqGeneralFragment,
  FaqGovernanceFinancingFragment,
  FaqPartnershipFragment,
  FaqStudentLifeFragment,
} from '@/features/faq'
import { LogoWelcome } from '@/features/logo'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './faq.module.scss'

export const dynamic = 'force-static'

const query = gql`
  query FaqPage {
    faqPage {
      title
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allFaqCategories {
      ...FaqCategory
    }
    allFaqGenerals {
      ...FaqGeneral
    }
    allFaqStudentLives {
      ...FaqStudentLife
    }
    allFaqPartnerships {
      ...FaqPartnership
    }
    allFaqGovernanceFinancings {
      ...FaqGovernanceFinancing
    }
    allFaqCommunities {
      ...FaqCommunity
    }
  }
  ${FaqCategoryFragment}
  ${FaqGeneralFragment}
  ${FaqStudentLifeFragment}
  ${FaqPartnershipFragment}
  ${FaqGovernanceFinancingFragment}
  ${FaqCommunityFragment}
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
  const { data } = await datoRequest<Queries.FaqPageQuery>({
    query,
  })
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{data?.faqPage?.title}</h2>
        <div className={styles.backgroundLogo}>
          <div className={styles.logoWrapper}>
            <LogoWelcome />
          </div>
        </div>
      </div>
      <FaqBody data={data} />
    </main>
  )
}

export default FaqPage

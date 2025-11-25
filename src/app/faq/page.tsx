import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

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
import { PageHero } from '@/features/page-sections'
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
    canonicalSlug: 'faq',
  })
}

const FaqPage: NextPage = async () => {
  const { data } = await datoRequest<Queries.FaqPageQuery>({
    query,
  })
  if (!data.faqPage) notFound()
  return (
    <main className={styles.main}>
      <PageHero
        title={data.faqPage?.title}
        color="sand"
      />
      <FaqBody data={data} />
    </main>
  )
}

export default FaqPage

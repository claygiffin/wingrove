import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import {
  CampusIntro,
  CampusIntroFragment,
  CampusMap,
  CampusMapFragment,
  CampusSpaces,
  CampusSpacesFragment,
  PageHero,
} from '@/features/page-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query CampusPage {
    campusPage {
      pageTitle
      ...CampusIntro
      ...CampusSpaces
      ...CampusMap
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${CampusIntroFragment}
  ${CampusSpacesFragment}
  ${CampusMapFragment}
`

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { campusPage },
  } = await datoRequest<Queries.CampusPageQuery>({
    query,
  })
  return generateDatoCmsMetadata(campusPage?._seoMetaTags || [], {
    canonicalSlug: 'campus',
  })
}

const CampusPage: NextPage = async () => {
  const {
    data: { campusPage },
  } = await datoRequest<Queries.CampusPageQuery>({
    query,
  })
  if (!campusPage) notFound()
  return (
    <main>
      <PageHero
        title={campusPage.pageTitle}
        color="orange"
        style={{ color: '#fff' }}
      />
      <CampusIntro data={campusPage} />
      <CampusSpaces data={campusPage} />
      <CampusMap data={campusPage} />
    </main>
  )
}

export default CampusPage

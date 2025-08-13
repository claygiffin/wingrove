import gql from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import {
  HomeCampus,
  HomeCampusFragment,
  HomeHero,
  HomeHeroFragment,
  HomeSchool,
  HomeSchoolFragment,
  HomeVisionaries,
  HomeVisionariesFragment,
  HomeWelcome,
  HomeWelcomeFragment,
} from '@/features/home'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

export const dynamic = 'force-static'

const query = gql`
  query HomePage {
    homePage {
      ...HomeHero
      ...HomeWelcome
      ...HomeSchool
      ...HomeCampus
      ...HomeVisionaries
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${HomeHeroFragment}
  ${HomeWelcomeFragment}
  ${HomeSchoolFragment}
  ${HomeCampusFragment}
  ${HomeVisionariesFragment}
`
export const generateMetadata = async (): Promise<Metadata> => {
  const {
    data: { homePage },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })
  return generateDatoCmsMetadata(homePage?._seoMetaTags || [], {
    canonicalSlug: '',
  })
}

const HomePage: NextPage = async () => {
  const {
    data: { homePage },
  } = await datoRequest<Queries.HomePageQuery>({
    query,
  })

  return (
    <main data-home>
      <HomeHero data={homePage} />
      <HomeWelcome data={homePage} />
      <HomeSchool data={homePage} />
      <HomeCampus data={homePage} />
      <HomeVisionaries data={homePage} />
    </main>
  )
}

export default HomePage

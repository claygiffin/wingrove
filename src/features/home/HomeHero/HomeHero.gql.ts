import gql from 'graphql-tag'

import { HomeHeroImagesFragment } from './HomeHeroImages/HomeHeroImages.gql'

export const HomeHeroFragment = gql`
  fragment HomeHero on HomePageRecord {
    heroHeading
    heroImages {
      ...HomeHeroImages
    }
  }
  ${HomeHeroImagesFragment}
`

import gql from 'graphql-tag'

import { AnchorLinkFragment } from '@/features/links'

import { HomeSchoolImagesFragment } from './HomeSchoolImages/HomeSchoolImages.gql'

export const HomeSchoolFragment = gql`
  fragment HomeSchool on HomePageRecord {
    schoolTitle
    schoolHeading
    schoolBody {
      value
    }
    schoolLink {
      ... on AnchorLinkRecord {
        ...AnchorLink
      }
    }
    schoolImages {
      ...HomeSchoolImages
    }
  }
  ${HomeSchoolImagesFragment}
  ${AnchorLinkFragment}
`

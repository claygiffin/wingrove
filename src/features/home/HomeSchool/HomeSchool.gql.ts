import gql from 'graphql-tag'

import {
  ExternalLinkFragment,
  PageLinkFragment,
} from '@/features/links'

import { HomeSchoolImagesFragment } from './HomeSchoolImages/HomeSchoolImages.gql'

export const HomeSchoolFragment = gql`
  fragment HomeSchool on HomePageRecord {
    schoolTitle
    schoolHeading
    schoolBody {
      value
    }
    schoolLink {
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
    }
    schoolImages {
      ...HomeSchoolImages
    }
  }
  ${HomeSchoolImagesFragment}
  ${ExternalLinkFragment}
  ${PageLinkFragment}
`

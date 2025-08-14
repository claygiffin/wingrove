import gql from 'graphql-tag'

import {
  ExternalLinkFragment,
  PageLinkFragment,
  PdfFragment,
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
      ... on PdfRecord {
        ...Pdf
      }
    }
    schoolImages {
      ...HomeSchoolImages
    }
  }
  ${HomeSchoolImagesFragment}
  ${ExternalLinkFragment}
  ${PageLinkFragment}
  ${PdfFragment}
`

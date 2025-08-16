import gql from 'graphql-tag'

import {
  ExternalLinkFragment,
  LightboxFragment,
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
      ... on LightboxRecord {
        ...Lightbox
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
  ${LightboxFragment}
`

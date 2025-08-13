import { gql } from 'graphql-tag'

import {
  AnchorLinkFragment,
  EmailLinkFragment,
  KeepMePostedLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const FooterFragment = gql`
  fragment Footer on FooterRecord {
    __typename
    id
    footerAddress
    footerEmailLabel
    footerEmail {
      ... on EmailLinkRecord {
        ...EmailLink
      }
    }
    footerLinks {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on AnchorLinkRecord {
        ...AnchorLink
      }
    }
    footerSignupLabel
    footerSignupLink {
      ... on KeepMePostedLinkRecord {
        ...KeepMePostedLink
      }
    }
  }
  ${AnchorLinkFragment}
  ${EmailLinkFragment}
  ${PageLinkFragment}
  ${KeepMePostedLinkFragment}
`

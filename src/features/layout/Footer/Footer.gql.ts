import { gql } from 'graphql-tag'

import {
  AnchorLinkFragment,
  EmailLinkFragment,
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
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }
  ${AnchorLinkFragment}
  ${EmailLinkFragment}
  ${PageLinkFragment}
`

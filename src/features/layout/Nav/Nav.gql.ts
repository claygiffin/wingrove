import { gql } from 'graphql-tag'

import {
  AnchorLinkFragment,
  KeepMePostedLinkFragment,
  PageLinkFragment,
} from '@/features/links'

export const NavFragment = gql`
  fragment Nav on NavRecord {
    __typename
    id
    links {
      ... on AnchorLinkRecord {
        ...AnchorLink
      }
      ... on KeepMePostedLinkRecord {
        ...KeepMePostedLink
      }
      ... on PageLinkRecord {
        ...PageLink
      }
    }
  }
  ${AnchorLinkFragment}
  ${KeepMePostedLinkFragment}
  ${PageLinkFragment}
`

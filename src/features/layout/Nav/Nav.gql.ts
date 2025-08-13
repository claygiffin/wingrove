import { gql } from 'graphql-tag'

import {
  AnchorLinkFragment,
  KeepMePostedLinkFragment,
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
    }
  }
  ${AnchorLinkFragment}
  ${KeepMePostedLinkFragment}
`

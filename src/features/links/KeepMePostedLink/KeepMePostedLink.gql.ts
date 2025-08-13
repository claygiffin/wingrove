import gql from 'graphql-tag'

export const KeepMePostedLinkFragment = gql`
  fragment KeepMePostedLink on KeepMePostedLinkRecord {
    __typename
    id
    linkText
  }
`

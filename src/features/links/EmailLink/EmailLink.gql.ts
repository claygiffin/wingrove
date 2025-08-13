import gql from 'graphql-tag'

export const EmailLinkFragment = gql`
  fragment EmailLink on EmailLinkRecord {
    __typename
    id
    email
  }
`

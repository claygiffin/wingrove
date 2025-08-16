import { gql } from 'graphql-tag'

export const LightboxFragment = gql`
  fragment Lightbox on LightboxRecord {
    __typename
    id
    text {
      value
    }
    linkText
  }
`

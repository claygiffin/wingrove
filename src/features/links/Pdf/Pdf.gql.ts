import { gql } from 'graphql-tag'

export const PdfFragment = gql`
  fragment Pdf on PdfRecord {
    __typename
    id
    pdf {
      url
    }
    linkText
  }
`

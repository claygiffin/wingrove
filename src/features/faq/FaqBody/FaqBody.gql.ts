import gql from 'graphql-tag'

export const FaqBodyFragment = gql`
  fragment FaqBody on FaqPageRecord {
    items {
      question
      answer {
        value
      }
    }
  }
`

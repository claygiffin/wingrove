import { gql } from 'graphql-tag'

export const LegendGroupFragment = gql`
  fragment LegendGroup on LegendGroupRecord {
    __typename
    id
    listType
    legendItems
  }
`

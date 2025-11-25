import { gql } from 'graphql-tag'

export const CampusAspectFragment = gql`
  fragment CampusAspect on CampusAspectRecord {
    __typename
    id
    title
    description {
      value
    }
    icon {
      format
      url
      height
      width
    }
  }
`

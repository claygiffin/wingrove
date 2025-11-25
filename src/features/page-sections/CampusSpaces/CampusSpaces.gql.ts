import { gql } from 'graphql-tag'

import { CampusSpaceFragment } from './CampusSpace/CampusSpace.gql'

export const CampusSpacesFragment = gql`
  fragment CampusSpaces on CampusPageRecord {
    __typename
    id
    spacesHeading
    spacesBody {
      value
    }
    spaces {
      ...CampusSpace
    }
  }
  ${CampusSpaceFragment}
`

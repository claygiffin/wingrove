import { gql } from 'graphql-tag'

import { CampusAspectFragment } from './CampusAspect/CampusAspect.gql'

export const CampusIntroFragment = gql`
  fragment CampusIntro on CampusPageRecord {
    __typename
    id
    introHeading
    introBody {
      value
    }
    campusAspects {
      ...CampusAspect
    }
  }
  ${CampusAspectFragment}
`

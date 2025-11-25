import { gql } from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const CampusSpaceFragment = gql`
  fragment CampusSpace on CampusSpaceRecord {
    __typename
    id
    image {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
    title
    description {
      value
    }
  }
  ${ResponsiveImageFragment}
`

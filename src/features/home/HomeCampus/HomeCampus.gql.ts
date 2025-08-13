import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const HomeCampusFragment = gql`
  fragment HomeCampus on HomePageRecord {
    campusTitle
    campusHeading
    campusBody {
      value
    }
    campusImage {
      responsiveImage {
        ...ResponsiveImage
      }
      focalPoint {
        x
        y
      }
    }
  }
  ${ResponsiveImageFragment}
`

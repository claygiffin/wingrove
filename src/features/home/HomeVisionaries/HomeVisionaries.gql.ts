import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const HomeVisionariesFragment = gql`
  fragment HomeVisionaries on HomePageRecord {
    visionariesTitle
    visionariesHeading
    visionariesBody {
      value
    }
    visionariesImage {
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

import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const HomeWelcomeFragment = gql`
  fragment HomeWelcome on HomePageRecord {
    welcomeHeading
    welcomeBody {
      value
    }
    welcomeImage {
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

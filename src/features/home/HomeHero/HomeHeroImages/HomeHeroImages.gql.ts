import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const HomeHeroImagesFragment = gql`
  fragment HomeHeroImages on FileField {
    horizontal: responsiveImage(
      imgixParams: {
        q: 75
        ar: "16:10"
        fit: crop
        auto: [format, compress]
      }
    ) {
      ...ResponsiveImage
    }
    vertical: responsiveImage(
      imgixParams: {
        q: 75
        ar: "2:3"
        fit: crop
        auto: [format, compress]
      }
    ) {
      ...ResponsiveImage
    }
    focalPoint {
      x
      y
    }
  }
  ${ResponsiveImageFragment}
`

import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'

export const HomeSchoolImagesFragment = gql`
  fragment HomeSchoolImages on FileField {
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
        ar: "1:1"
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

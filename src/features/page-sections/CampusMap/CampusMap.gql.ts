import { gql } from 'graphql-tag'

import { LegendGroupFragment } from './Legend/Legend.gql'

export const CampusMapFragment = gql`
  fragment CampusMap on CampusPageRecord {
    __typename
    id
    mapHeading
    map {
      responsiveImage {
        ...ResponsiveImage
      }
      format
      url
      width
      height
      alt
    }
    legend {
      ...LegendGroup
    }
  }
  ${LegendGroupFragment}
`

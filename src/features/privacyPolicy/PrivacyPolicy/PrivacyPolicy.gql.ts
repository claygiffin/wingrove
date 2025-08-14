import { gql } from 'graphql-tag'

export const PrivacyPolicyFragment = gql`
  fragment PrivacyPolicy on PrivacyPolicyRecord {
    __typename
    id
    privacyPolicyHeading
    privacyPolicyText {
      value
    }
  }
`

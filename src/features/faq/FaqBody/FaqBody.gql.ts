import gql from 'graphql-tag'

export const FaqCategoryFragment = gql`
  fragment FaqCategory on FaqCategoryRecord {
    id
    __typename
    category
  }
`

export const FaqGeneralFragment = gql`
  fragment FaqGeneral on FaqGeneralRecord {
    question
    answer {
      value
    }
    category {
      ... on FaqCategoryRecord {
        ...FaqCategory
      }
    }
    publishedAt: _firstPublishedAt
  }
  ${FaqCategoryFragment}
`

export const FaqStudentLifeFragment = gql`
  fragment FaqStudentLife on FaqStudentLifeRecord {
    question
    answer {
      value
    }
    category {
      ... on FaqCategoryRecord {
        ...FaqCategory
      }
    }
    publishedAt: _firstPublishedAt
  }
  ${FaqCategoryFragment}
`

export const FaqPartnershipFragment = gql`
  fragment FaqPartnership on FaqPartnershipRecord {
    question
    answer {
      value
    }
    category {
      ... on FaqCategoryRecord {
        ...FaqCategory
      }
    }
    publishedAt: _firstPublishedAt
  }
  ${FaqCategoryFragment}
`

export const FaqGovernanceFinancingFragment = gql`
  fragment FaqGovernanceFinancing on FaqGovernanceFinancingRecord {
    question
    answer {
      value
    }
    category {
      ... on FaqCategoryRecord {
        ...FaqCategory
      }
    }
    publishedAt: _firstPublishedAt
  }
  ${FaqCategoryFragment}
`

export const FaqCommunityFragment = gql`
  fragment FaqCommunity on FaqCommunityRecord {
    question
    answer {
      value
    }
    category {
      ... on FaqCategoryRecord {
        ...FaqCategory
      }
    }
    publishedAt: _firstPublishedAt
  }
  ${FaqCategoryFragment}
`

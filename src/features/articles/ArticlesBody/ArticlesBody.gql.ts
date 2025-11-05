import gql from 'graphql-tag'

import { ResponsiveImageFragment } from '@/features/dato-image'
import {
  ExternalLinkFragment,
  PageLinkFragment,
  PdfFragment,
} from '@/features/links'
import {
  ExternalVideoFileFragment,
  InternalVideoFileFragment,
} from '@/features/video-player'

export const ExternalVideoFragment = gql`
  fragment ExternalVideo on ExternalVideoRecord {
    id
    __typename
    video {
      ...ExternalVideoFile
    }
    publishedAt: _firstPublishedAt
  }
  ${ExternalVideoFileFragment}
`

export const InternalVideoFragment = gql`
  fragment InternalVideo on InternalVideoRecord {
    id
    __typename
    video {
      ...InternalVideoFile
    }
    publishedAt: _firstPublishedAt
  }
  ${InternalVideoFileFragment}
`

export const HubspotFormFragment = gql`
  fragment HubspotForm on HubspotFormRecord {
    id
    __typename
    portalId
    formId
    region
    publishedAt: _firstPublishedAt
  }
`

export const ArticleCarouselFragment = gql`
  fragment ArticleCarousel on ArticleCarouselRecord {
    id
    __typename
    images {
      ... on ImageBlockRecord {
        id
        __typename
        image {
          responsiveImage(
            imgixParams: { q: 60, auto: [format, compress] }
          ) {
            ...ResponsiveImage
          }
          alt
          title
        }
      }
    }
    description
  }
  ${ResponsiveImageFragment}
`

export const ArticleAccordionFragment = gql`
  fragment ArticleAccordion on ArticleAccordionRecord {
    id
    __typename
    title
    text {
      value
    }
  }
`

export const ArticleButtonFieldFragment = gql`
  fragment ArticleButtonField on ArticleButtonFieldRecord {
    id
    __typename
    buttons {
      ... on PageLinkRecord {
        ...PageLink
      }
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
  }
  ${PageLinkFragment}
  ${ExternalLinkFragment}
`

export const ArticlePullQuoteFragment = gql`
  fragment ArticlePullQuote on ArticlePullQuoteRecord {
    id
    __typename
    quote {
      value
    }
  }
`

export const ArticleTestimonialFragment = gql`
  fragment ArticleTestimonial on ArticleTestimonialRecord {
    id
    __typename
    testimonialBody {
      value
    }
    customerName
    customerPhoto {
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

export const ArticleCategoryFragment = gql`
  fragment ArticleCategory on ArticleCategoryRecord {
    id
    __typename
    category
  }
`

export const ArticleFragment = gql`
  fragment Article on ArticleRecord {
    id
    __typename
    title
    category {
      ... on ArticleCategoryRecord {
        ...ArticleCategory
      }
    }
    body {
      value
      blocks {
        ... on ImageBlockRecord {
          id
          __typename
          image {
            responsiveImage(
              imgixParams: { q: 60, auto: [format, compress] }
            ) {
              ...ResponsiveImage
            }
            alt
            title
          }
        }
        ... on ExternalVideoRecord {
          ...ExternalVideo
        }
        ... on InternalVideoRecord {
          ...InternalVideo
        }
        ... on HubspotFormRecord {
          ...HubspotForm
        }
        ... on ArticleCarouselRecord {
          ...ArticleCarousel
        }
        ... on ArticleAccordionRecord {
          ...ArticleAccordion
        }
        ... on ArticleButtonFieldRecord {
          ...ArticleButtonField
        }
        ... on ArticlePullQuoteRecord {
          ...ArticlePullQuote
        }
        ... on ArticleTestimonialRecord {
          ...ArticleTestimonial
        }
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
          crop: focalpoint
          fit: crop
          q: 50
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
    publishedAt: _firstPublishedAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ArticleCategoryFragment}
  ${ResponsiveImageFragment}
  ${ExternalVideoFragment}
  ${InternalVideoFragment}
  ${HubspotFormFragment}
  ${ArticleCarouselFragment}
  ${ArticleAccordionFragment}
  ${ArticleButtonFieldFragment}
  ${ArticlePullQuoteFragment}
  ${ArticleTestimonialFragment}
`

export const PdfArticleFragment = gql`
  fragment PdfArticle on PdfArticleRecord {
    id
    __typename
    title
    category {
      ... on ArticleCategoryRecord {
        ...ArticleCategory
      }
    }
    documentFile {
      ... on PdfRecord {
        ...Pdf
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
          crop: focalpoint
          fit: crop
          q: 50
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
    publishedAt: _firstPublishedAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ArticleCategoryFragment}
  ${PdfFragment}
`
export const ExternalArticleFragment = gql`
  fragment ExternalArticle on ExternalArticleRecord {
    id
    __typename
    title
    category {
      ... on ArticleCategoryRecord {
        ...ArticleCategory
      }
    }
    externalUrl {
      ... on ExternalLinkRecord {
        ...ExternalLink
      }
    }
    thumbnail {
      alt
      title
      responsiveImage(
        imgixParams: {
          ar: "16:9"
          crop: focalpoint
          fit: crop
          q: 50
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
    publisherName
    publishedAt: _firstPublishedAt
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ArticleCategoryFragment}
  ${ExternalLinkFragment}
`

export const ArticlesBodyFragment = gql`
  fragment ArticlesBody on ArticlesPageRecord {
    slug
    _seoMetaTags {
      tag
    }
  }
  ${ArticleFragment}
  ${PdfArticleFragment}
  ${ExternalArticleFragment}
`

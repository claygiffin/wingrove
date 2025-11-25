type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
declare namespace Queries {
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
};

/** Block of type Anchor Link (anchor_link) */
type AnchorLinkRecord = RecordInterface & {
  __typename?: 'AnchorLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  href: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
};


/** Block of type Anchor Link (anchor_link) */
type AnchorLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleAccordionModelTextField = {
  __typename?: 'ArticleAccordionModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Article Accordion (article_accordion) */
type ArticleAccordionRecord = RecordInterface & {
  __typename?: 'ArticleAccordionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text: ArticleAccordionModelTextField;
  title: Scalars['String']['output'];
};


/** Block of type Article Accordion (article_accordion) */
type ArticleAccordionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleButtonFieldModelButtonsField = ExternalLinkRecord | PageLinkRecord;

/** Block of type Article Button (article_button_field) */
type ArticleButtonFieldRecord = RecordInterface & {
  __typename?: 'ArticleButtonFieldRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttons: Array<ArticleButtonFieldModelButtonsField>;
  id: Scalars['ItemId']['output'];
};


/** Block of type Article Button (article_button_field) */
type ArticleButtonFieldRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image Carousel (article_carousel) */
type ArticleCarouselRecord = RecordInterface & {
  __typename?: 'ArticleCarouselRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<ImageBlockRecord>;
};


/** Block of type Image Carousel (article_carousel) */
type ArticleCarouselRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
};

enum ArticleCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC'
}

/** Record of type Article Category (article_category) */
type ArticleCategoryRecord = RecordInterface & {
  __typename?: 'ArticleCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Article Category (article_category) */
type ArticleCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleModelBodyBlocksField = ArticleAccordionRecord | ArticleButtonFieldRecord | ArticleCarouselRecord | ArticlePullQuoteRecord | ArticleTestimonialRecord | ExternalVideoRecord | HubspotFormRecord | ImageBlockRecord | InternalVideoRecord;

type ArticleModelBodyField = {
  __typename?: 'ArticleModelBodyField';
  blocks: Array<ArticleModelBodyBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

type ArticlePullQuoteModelQuoteField = {
  __typename?: 'ArticlePullQuoteModelQuoteField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Pull Quote (article_pull_quote) */
type ArticlePullQuoteRecord = RecordInterface & {
  __typename?: 'ArticlePullQuoteRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  quote: ArticlePullQuoteModelQuoteField;
};


/** Block of type Pull Quote (article_pull_quote) */
type ArticlePullQuoteRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Article (article) */
type ArticleRecord = RecordInterface & {
  __typename?: 'ArticleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: ArticleModelBodyField;
  category: ArticleCategoryRecord;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  thumbnail: ImageFileField;
  title: Scalars['String']['output'];
};


/** Record of type Article (article) */
type ArticleRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleTestimonialModelTestimonialBodyField = {
  __typename?: 'ArticleTestimonialModelTestimonialBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Testimonial Box (article_testimonial) */
type ArticleTestimonialRecord = RecordInterface & {
  __typename?: 'ArticleTestimonialRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  customerName: Scalars['String']['output'];
  customerPhoto?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  testimonialBody: ArticleTestimonialModelTestimonialBodyField;
};


/** Block of type Testimonial Box (article_testimonial) */
type ArticleTestimonialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Articles Page (articles_page) */
type ArticlesPageRecord = RecordInterface & {
  __typename?: 'ArticlesPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Articles Page (articles_page) */
type ArticlesPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

type CampusAspectModelDescriptionField = {
  __typename?: 'CampusAspectModelDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Campus Aspect (campus_aspect) */
type CampusAspectRecord = RecordInterface & {
  __typename?: 'CampusAspectRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<CampusAspectModelDescriptionField>;
  icon: FileField;
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
};


/** Block of type Campus Aspect (campus_aspect) */
type CampusAspectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CampusPageModelIntroBodyField = {
  __typename?: 'CampusPageModelIntroBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type CampusPageModelSpacesBodyField = {
  __typename?: 'CampusPageModelSpacesBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Campus Page (campus_page) */
type CampusPageRecord = RecordInterface & {
  __typename?: 'CampusPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  campusAspects: Array<CampusAspectRecord>;
  id: Scalars['ItemId']['output'];
  introBody: CampusPageModelIntroBodyField;
  introHeading: Scalars['String']['output'];
  legend: Array<LegendGroupRecord>;
  map: FileField;
  mapHeading: Scalars['String']['output'];
  pageTitle: Scalars['String']['output'];
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  spaces: Array<CampusSpaceRecord>;
  spacesBody?: Maybe<CampusPageModelSpacesBodyField>;
  spacesHeading: Scalars['String']['output'];
};


/** Record of type Campus Page (campus_page) */
type CampusPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CampusSpaceModelDescriptionField = {
  __typename?: 'CampusSpaceModelDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Campus Space (campus_space) */
type CampusSpaceRecord = RecordInterface & {
  __typename?: 'CampusSpaceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<CampusSpaceModelDescriptionField>;
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
  title: Scalars['String']['output'];
};


/** Block of type Campus Space (campus_space) */
type CampusSpaceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Email Link (email_link) */
type EmailLinkRecord = RecordInterface & {
  __typename?: 'EmailLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type Email Link (email_link) */
type EmailLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ExternalArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExternalArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExternalArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  publisherName?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
};

enum ExternalArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publisherName_ASC = 'publisherName_ASC',
  publisherName_DESC = 'publisherName_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type External Article (external_article) */
type ExternalArticleRecord = RecordInterface & {
  __typename?: 'ExternalArticleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: ArticleCategoryRecord;
  externalUrl: ExternalLinkRecord;
  id: Scalars['ItemId']['output'];
  publisherName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  thumbnail: ImageFileField;
  title: Scalars['String']['output'];
};


/** Record of type External Article (external_article) */
type ExternalArticleRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type External Link (external_link) */
type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  url: Scalars['String']['output'];
};


/** Block of type External Link (external_link) */
type ExternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Video - External (external_video) */
type ExternalVideoRecord = RecordInterface & {
  __typename?: 'ExternalVideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  video: VideoField;
};


/** Block of type Video - External (external_video) */
type ExternalVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
};

enum FaqCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC'
}

/** Record of type FAQ Category (faq_category) */
type FaqCategoryRecord = RecordInterface & {
  __typename?: 'FaqCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type FAQ Category (faq_category) */
type FaqCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqCommunityModelAnswerField = {
  __typename?: 'FaqCommunityModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqCommunityModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqCommunityModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqCommunityModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
};

enum FaqCommunityModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type Community (faq_community) */
type FaqCommunityRecord = RecordInterface & {
  __typename?: 'FaqCommunityRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqCommunityModelAnswerField;
  category: FaqCategoryRecord;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Record of type Community (faq_community) */
type FaqCommunityRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqGeneralModelAnswerField = {
  __typename?: 'FaqGeneralModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqGeneralModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqGeneralModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqGeneralModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
};

enum FaqGeneralModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type General (faq_general) */
type FaqGeneralRecord = RecordInterface & {
  __typename?: 'FaqGeneralRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqGeneralModelAnswerField;
  category: FaqCategoryRecord;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Record of type General (faq_general) */
type FaqGeneralRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqGovernanceFinancingModelAnswerField = {
  __typename?: 'FaqGovernanceFinancingModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqGovernanceFinancingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqGovernanceFinancingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqGovernanceFinancingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
};

enum FaqGovernanceFinancingModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type Governance & Financing (faq_governance_financing) */
type FaqGovernanceFinancingRecord = RecordInterface & {
  __typename?: 'FaqGovernanceFinancingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqGovernanceFinancingModelAnswerField;
  category: FaqCategoryRecord;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Record of type Governance & Financing (faq_governance_financing) */
type FaqGovernanceFinancingRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type FAQ Page (faq_page) */
type FaqPageRecord = RecordInterface & {
  __typename?: 'FaqPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type FAQ Page (faq_page) */
type FaqPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqPartnershipModelAnswerField = {
  __typename?: 'FaqPartnershipModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqPartnershipModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqPartnershipModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqPartnershipModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
};

enum FaqPartnershipModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type Partnerships (faq_partnership) */
type FaqPartnershipRecord = RecordInterface & {
  __typename?: 'FaqPartnershipRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqPartnershipModelAnswerField;
  category: FaqCategoryRecord;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Record of type Partnerships (faq_partnership) */
type FaqPartnershipRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FaqStudentLifeModelAnswerField = {
  __typename?: 'FaqStudentLifeModelAnswerField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type FaqStudentLifeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqStudentLifeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqStudentLifeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<StructuredTextFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  question?: InputMaybe<StringFilter>;
};

enum FaqStudentLifeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC'
}

/** Record of type Student Life (faq_student_life) */
type FaqStudentLifeRecord = RecordInterface & {
  __typename?: 'FaqStudentLifeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: FaqStudentLifeModelAnswerField;
  category: FaqCategoryRecord;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Record of type Student Life (faq_student_life) */
type FaqStudentLifeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

type FooterModelFooterLinksField = AnchorLinkRecord | KeepMePostedLinkRecord | PageLinkRecord;

/** Record of type Footer (footer) */
type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  footerAddress: Scalars['String']['output'];
  footerEmail: EmailLinkRecord;
  footerEmailLabel: Scalars['String']['output'];
  footerLinks: Array<FooterModelFooterLinksField>;
  footerSignupLabel: Scalars['String']['output'];
  footerSignupLink: KeepMePostedLinkRecord;
  id: Scalars['ItemId']['output'];
};


/** Record of type Footer (footer) */
type FooterRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

type HomePageModelCampusBodyField = {
  __typename?: 'HomePageModelCampusBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelSchoolBodyField = {
  __typename?: 'HomePageModelSchoolBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelSchoolLinkField = ExternalLinkRecord | LightboxRecord | PageLinkRecord | PdfRecord;

type HomePageModelVisionariesBodyField = {
  __typename?: 'HomePageModelVisionariesBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelWelcomeBodyField = {
  __typename?: 'HomePageModelWelcomeBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Home Page (home_page) */
type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  campusBody?: Maybe<HomePageModelCampusBodyField>;
  campusHeading: Scalars['String']['output'];
  campusImage?: Maybe<FileField>;
  campusTitle: Scalars['String']['output'];
  heroHeading: Scalars['String']['output'];
  heroImages: Array<FileField>;
  id: Scalars['ItemId']['output'];
  schoolBody: HomePageModelSchoolBodyField;
  schoolHeading: Scalars['String']['output'];
  schoolImages: Array<FileField>;
  schoolLink?: Maybe<HomePageModelSchoolLinkField>;
  schoolTitle: Scalars['String']['output'];
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  visionariesBody?: Maybe<HomePageModelVisionariesBodyField>;
  visionariesHeading: Scalars['String']['output'];
  visionariesImage?: Maybe<FileField>;
  visionariesTitle: Scalars['String']['output'];
  welcomeBody?: Maybe<HomePageModelWelcomeBodyField>;
  welcomeHeading: Scalars['String']['output'];
  welcomeImage?: Maybe<FileField>;
};


/** Record of type Home Page (home_page) */
type HomePageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hubspot Form (hubspot_form) */
type HubspotFormRecord = RecordInterface & {
  __typename?: 'HubspotFormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  formId: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  portalId: Scalars['String']['output'];
  region: Scalars['String']['output'];
};


/** Block of type Hubspot Form (hubspot_form) */
type HubspotFormRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image Block (image_block) */
type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
};


/** Block of type Image Block (image_block) */
type ImageBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: focalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


type ImageFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type ImageFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type ImageFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  alpha = 'alpha',
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Video - Internal (internal_video) */
type InternalVideoRecord = RecordInterface & {
  __typename?: 'InternalVideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  video: VideoFileField;
};


/** Block of type Video - Internal (internal_video) */
type InternalVideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Block of type Keep Me Posted Link (keep_me_posted_link) */
type KeepMePostedLinkRecord = RecordInterface & {
  __typename?: 'KeepMePostedLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
};


/** Block of type Keep Me Posted Link (keep_me_posted_link) */
type KeepMePostedLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Legend Group (legend_group) */
type LegendGroupRecord = RecordInterface & {
  __typename?: 'LegendGroupRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  legendItems?: Maybe<Scalars['JsonField']['output']>;
  listType?: Maybe<Scalars['String']['output']>;
};


/** Block of type Legend Group (legend_group) */
type LegendGroupRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Legend Item (legend_item) */
type LegendItemRecord = RecordInterface & {
  __typename?: 'LegendItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type Legend Item (legend_item) */
type LegendItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type LightboxModelTextField = {
  __typename?: 'LightboxModelTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Lightbox (lightbox) */
type LightboxRecord = RecordInterface & {
  __typename?: 'LightboxRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  text: LightboxModelTextField;
  title: Scalars['String']['output'];
};


/** Block of type Lightbox (lightbox) */
type LightboxRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NavModelLinksField = AnchorLinkRecord | KeepMePostedLinkRecord | PageLinkRecord;

/** Record of type Nav (nav) */
type NavRecord = RecordInterface & {
  __typename?: 'NavRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<NavModelLinksField>;
};


/** Record of type Nav (nav) */
type NavRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

type PageLinkModelPageField = ArticlesPageRecord | FaqPageRecord | HomePageRecord;

/** Block of type Page Link (page_link) */
type PageLinkRecord = RecordInterface & {
  __typename?: 'PageLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  page: PageLinkModelPageField;
};


/** Block of type Page Link (page_link) */
type PageLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type PdfArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PdfArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PdfArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
};

enum PdfArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC'
}

/** Record of type PDF Article (pdf_article) */
type PdfArticleRecord = RecordInterface & {
  __typename?: 'PdfArticleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: ArticleCategoryRecord;
  documentFile: PdfRecord;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  thumbnail: ImageFileField;
  title: Scalars['String']['output'];
};


/** Record of type PDF Article (pdf_article) */
type PdfArticleRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type PDF (pdf) */
type PdfRecord = RecordInterface & {
  __typename?: 'PdfRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  pdf: FileField;
  pdfLink?: Maybe<Scalars['String']['output']>;
};


/** Block of type PDF (pdf) */
type PdfRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type PrivacyPolicyModelPrivacyPolicyTextField = {
  __typename?: 'PrivacyPolicyModelPrivacyPolicyTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Privacy Policy (privacy_policy) */
type PrivacyPolicyRecord = RecordInterface & {
  __typename?: 'PrivacyPolicyRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  privacyPolicyHeading: Scalars['String']['output'];
  privacyPolicyText: PrivacyPolicyModelPrivacyPolicyTextField;
};


/** Record of type Privacy Policy (privacy_policy) */
type PrivacyPolicyRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArticleCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allExternalArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqCommunitiesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqGeneralsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqGovernanceFinancingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqPartnershipsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqStudentLivesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPdfArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allArticleCategories: Array<ArticleCategoryRecord>;
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>;
  /** Returns a collection of records */
  allExternalArticles: Array<ExternalArticleRecord>;
  /** Returns a collection of records */
  allFaqCategories: Array<FaqCategoryRecord>;
  /** Returns a collection of records */
  allFaqCommunities: Array<FaqCommunityRecord>;
  /** Returns a collection of records */
  allFaqGenerals: Array<FaqGeneralRecord>;
  /** Returns a collection of records */
  allFaqGovernanceFinancings: Array<FaqGovernanceFinancingRecord>;
  /** Returns a collection of records */
  allFaqPartnerships: Array<FaqPartnershipRecord>;
  /** Returns a collection of records */
  allFaqStudentLives: Array<FaqStudentLifeRecord>;
  /** Returns a collection of records */
  allPdfArticles: Array<PdfArticleRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  article?: Maybe<ArticleRecord>;
  /** Returns a specific record */
  articleCategory?: Maybe<ArticleCategoryRecord>;
  /** Returns the single instance record */
  articlesPage?: Maybe<ArticlesPageRecord>;
  /** Returns the single instance record */
  campusPage?: Maybe<CampusPageRecord>;
  /** Returns a specific record */
  externalArticle?: Maybe<ExternalArticleRecord>;
  /** Returns a specific record */
  faqCategory?: Maybe<FaqCategoryRecord>;
  /** Returns a specific record */
  faqCommunity?: Maybe<FaqCommunityRecord>;
  /** Returns a specific record */
  faqGeneral?: Maybe<FaqGeneralRecord>;
  /** Returns a specific record */
  faqGovernanceFinancing?: Maybe<FaqGovernanceFinancingRecord>;
  /** Returns the single instance record */
  faqPage?: Maybe<FaqPageRecord>;
  /** Returns a specific record */
  faqPartnership?: Maybe<FaqPartnershipRecord>;
  /** Returns a specific record */
  faqStudentLife?: Maybe<FaqStudentLifeRecord>;
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>;
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>;
  /** Returns the single instance record */
  nav?: Maybe<NavRecord>;
  /** Returns a specific record */
  pdfArticle?: Maybe<PdfArticleRecord>;
  /** Returns the single instance record */
  privacyPolicy?: Maybe<PrivacyPolicyRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
type Query_allArticleCategoriesMetaArgs = {
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allArticlesMetaArgs = {
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allExternalArticlesMetaArgs = {
  filter?: InputMaybe<ExternalArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqCategoriesMetaArgs = {
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqCommunitiesMetaArgs = {
  filter?: InputMaybe<FaqCommunityModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqGeneralsMetaArgs = {
  filter?: InputMaybe<FaqGeneralModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqGovernanceFinancingsMetaArgs = {
  filter?: InputMaybe<FaqGovernanceFinancingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqPartnershipsMetaArgs = {
  filter?: InputMaybe<FaqPartnershipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFaqStudentLivesMetaArgs = {
  filter?: InputMaybe<FaqStudentLifeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allPdfArticlesMetaArgs = {
  filter?: InputMaybe<PdfArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryallArticleCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallExternalArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqCommunitiesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCommunityModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCommunityModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqGeneralsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqGeneralModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqGeneralModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqGovernanceFinancingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqGovernanceFinancingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqGovernanceFinancingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqPartnershipsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqPartnershipModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqPartnershipModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFaqStudentLivesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqStudentLifeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqStudentLifeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallPdfArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PdfArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PdfArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryarticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};


/** The query root for this schema */
type QueryarticleCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryarticlesPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycampusPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryexternalArticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalArticleModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqCommunityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqCommunityModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqCommunityModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqGeneralArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqGeneralModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqGeneralModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqGovernanceFinancingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqGovernanceFinancingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqGovernanceFinancingModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryfaqPartnershipArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqPartnershipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqPartnershipModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfaqStudentLifeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqStudentLifeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqStudentLifeModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryhomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerynavArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerypdfArticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PdfArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PdfArticleModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprivacyPolicyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  path?: InputMaybe<UploadPathFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by path */
type UploadPathFilter = {
  /** Search the asset with the specified path */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified paths */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified path */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified paths */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type VideoFileField = FileFieldInterface & {
  __typename?: 'VideoFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video: UploadVideoField;
  width: Scalars['IntType']['output'];
};


type VideoFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type VideoFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type VideoFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type VideoFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageRecord', heroHeading: string, welcomeHeading: string, schoolTitle: string, schoolHeading: string, campusTitle: string, campusHeading: string, visionariesTitle: string, visionariesHeading: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, heroImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }>, welcomeBody?: { __typename?: 'HomePageModelWelcomeBodyField', value: unknown } | null, welcomeImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null, schoolBody: { __typename?: 'HomePageModelSchoolBodyField', value: unknown }, schoolLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'LightboxRecord', id: string, title: string, linkText: string, text: { __typename?: 'LightboxModelTextField', value: unknown } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } } | { __typename: 'PdfRecord', id: string, pdfLink?: string | null, pdf: { __typename?: 'FileField', title?: string | null, url: string } } | null, schoolImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }>, campusBody?: { __typename?: 'HomePageModelCampusBodyField', value: unknown } | null, campusImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null, visionariesBody?: { __typename?: 'HomePageModelVisionariesBodyField', value: unknown } | null, visionariesImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null } | null };

type AllArticleModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllArticleModalQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug: string }> };

type ArticleModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type ArticleModalQuery = { __typename?: 'Query', article?: { __typename: 'ArticleRecord', id: string, title: string, slug: string, publishedAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ArticleAccordionRecord', id: string, title: string, text: { __typename?: 'ArticleAccordionModelTextField', value: unknown } } | { __typename: 'ArticleButtonFieldRecord', id: string, buttons: Array<{ __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> } | { __typename: 'ArticleCarouselRecord', id: string, description: string, images: Array<{ __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> } | { __typename: 'ArticlePullQuoteRecord', id: string, quote: { __typename?: 'ArticlePullQuoteModelQuoteField', value: unknown } } | { __typename: 'ArticleTestimonialRecord', id: string, customerName: string, testimonialBody: { __typename?: 'ArticleTestimonialModelTestimonialBodyField', value: unknown }, customerPhoto?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null } | { __typename: 'ExternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number } } | { __typename: 'HubspotFormRecord', id: string, portalId: string, formId: string, region: string, publishedAt: string } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'InternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } } }> }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } } | null };

type AllArticlePageQueryVariables = Exact<{ [key: string]: never; }>;


type AllArticlePageQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug: string }> };

type ArticlePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type ArticlePageQuery = { __typename?: 'Query', article?: { __typename: 'ArticleRecord', id: string, title: string, slug: string, publishedAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ArticleAccordionRecord', id: string, title: string, text: { __typename?: 'ArticleAccordionModelTextField', value: unknown } } | { __typename: 'ArticleButtonFieldRecord', id: string, buttons: Array<{ __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> } | { __typename: 'ArticleCarouselRecord', id: string, description: string, images: Array<{ __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> } | { __typename: 'ArticlePullQuoteRecord', id: string, quote: { __typename?: 'ArticlePullQuoteModelQuoteField', value: unknown } } | { __typename: 'ArticleTestimonialRecord', id: string, customerName: string, testimonialBody: { __typename?: 'ArticleTestimonialModelTestimonialBodyField', value: unknown }, customerPhoto?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null } | { __typename: 'ExternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number } } | { __typename: 'HubspotFormRecord', id: string, portalId: string, formId: string, region: string, publishedAt: string } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'InternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } } }> }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } } | null };

type ArticlesPageQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesPageQuery = { __typename?: 'Query', articlesPage?: { __typename?: 'ArticlesPageRecord', title: string, slug: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null, allArticles: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ArticleAccordionRecord', id: string, title: string, text: { __typename?: 'ArticleAccordionModelTextField', value: unknown } } | { __typename: 'ArticleButtonFieldRecord', id: string, buttons: Array<{ __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> } | { __typename: 'ArticleCarouselRecord', id: string, description: string, images: Array<{ __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> } | { __typename: 'ArticlePullQuoteRecord', id: string, quote: { __typename?: 'ArticlePullQuoteModelQuoteField', value: unknown } } | { __typename: 'ArticleTestimonialRecord', id: string, customerName: string, testimonialBody: { __typename?: 'ArticleTestimonialModelTestimonialBodyField', value: unknown }, customerPhoto?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null } | { __typename: 'ExternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number } } | { __typename: 'HubspotFormRecord', id: string, portalId: string, formId: string, region: string, publishedAt: string } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'InternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } } }> }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allPdfArticles: Array<{ __typename: 'PdfArticleRecord', id: string, title: string, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, documentFile: { __typename: 'PdfRecord', id: string, pdfLink?: string | null, pdf: { __typename?: 'FileField', title?: string | null, url: string } }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allExternalArticles: Array<{ __typename: 'ExternalArticleRecord', id: string, title: string, publisherName?: string | null, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, externalUrl: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allArticleCategories: Array<{ __typename: 'ArticleCategoryRecord', id: string, category: string }> };

type CampusPageQueryVariables = Exact<{ [key: string]: never; }>;


type CampusPageQuery = { __typename?: 'Query', campusPage?: { __typename: 'CampusPageRecord', pageTitle: string, id: string, introHeading: string, spacesHeading: string, mapHeading: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, introBody: { __typename?: 'CampusPageModelIntroBodyField', value: unknown }, campusAspects: Array<{ __typename: 'CampusAspectRecord', id: string, title: string, description?: { __typename?: 'CampusAspectModelDescriptionField', value: unknown } | null, icon: { __typename?: 'FileField', format: string, url: string, height?: number | null, width?: number | null } }>, spacesBody?: { __typename?: 'CampusPageModelSpacesBodyField', value: unknown } | null, spaces: Array<{ __typename: 'CampusSpaceRecord', id: string, title: string, image: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, description?: { __typename?: 'CampusSpaceModelDescriptionField', value: unknown } | null }>, map: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, legend: Array<{ __typename: 'LegendGroupRecord', id: string, listType?: string | null, legendItems?: unknown | null }> } | null };

type FaqPageQueryVariables = Exact<{ [key: string]: never; }>;


type FaqPageQuery = { __typename?: 'Query', faqPage?: { __typename?: 'FaqPageRecord', title: string, slug: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null, allFaqCategories: Array<{ __typename: 'FaqCategoryRecord', id: string, category: string }>, allFaqGenerals: Array<{ __typename?: 'FaqGeneralRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqGeneralModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } }>, allFaqStudentLives: Array<{ __typename?: 'FaqStudentLifeRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqStudentLifeModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } }>, allFaqPartnerships: Array<{ __typename?: 'FaqPartnershipRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqPartnershipModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } }>, allFaqGovernanceFinancings: Array<{ __typename?: 'FaqGovernanceFinancingRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqGovernanceFinancingModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } }>, allFaqCommunities: Array<{ __typename?: 'FaqCommunityRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqCommunityModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } }> };

type RootLayoutQueryVariables = Exact<{ [key: string]: never; }>;


type RootLayoutQuery = { __typename?: 'Query', nav?: { __typename: 'NavRecord', id: string, links: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string } | { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> } | null, footer?: { __typename: 'FooterRecord', id: string, footerAddress: string, footerEmailLabel: string, footerSignupLabel: string, footerEmail: { __typename: 'EmailLinkRecord', id: string, email: string }, footerLinks: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string } | { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }>, footerSignupLink: { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } } | null, privacyPolicy?: { __typename: 'PrivacyPolicyRecord', id: string, privacyPolicyHeading: string, privacyPolicyText: { __typename?: 'PrivacyPolicyModelPrivacyPolicyTextField', value: unknown } } | null };

type ExternalVideoFragment = { __typename: 'ExternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number } };

type InternalVideoFragment = { __typename: 'InternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } } };

type HubspotFormFragment = { __typename: 'HubspotFormRecord', id: string, portalId: string, formId: string, region: string, publishedAt: string };

type ArticleCarouselFragment = { __typename: 'ArticleCarouselRecord', id: string, description: string, images: Array<{ __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> };

type ArticleAccordionFragment = { __typename: 'ArticleAccordionRecord', id: string, title: string, text: { __typename?: 'ArticleAccordionModelTextField', value: unknown } };

type ArticleButtonFieldFragment = { __typename: 'ArticleButtonFieldRecord', id: string, buttons: Array<{ __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> };

type ArticlePullQuoteFragment = { __typename: 'ArticlePullQuoteRecord', id: string, quote: { __typename?: 'ArticlePullQuoteModelQuoteField', value: unknown } };

type ArticleTestimonialFragment = { __typename: 'ArticleTestimonialRecord', id: string, customerName: string, testimonialBody: { __typename?: 'ArticleTestimonialModelTestimonialBodyField', value: unknown }, customerPhoto?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null };

type ArticleCategoryFragment = { __typename: 'ArticleCategoryRecord', id: string, category: string };

type ArticleFragment = { __typename: 'ArticleRecord', id: string, title: string, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ArticleAccordionRecord', id: string, title: string, text: { __typename?: 'ArticleAccordionModelTextField', value: unknown } } | { __typename: 'ArticleButtonFieldRecord', id: string, buttons: Array<{ __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> } | { __typename: 'ArticleCarouselRecord', id: string, description: string, images: Array<{ __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> } | { __typename: 'ArticlePullQuoteRecord', id: string, quote: { __typename?: 'ArticlePullQuoteModelQuoteField', value: unknown } } | { __typename: 'ArticleTestimonialRecord', id: string, customerName: string, testimonialBody: { __typename?: 'ArticleTestimonialModelTestimonialBodyField', value: unknown }, customerPhoto?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null } | { __typename: 'ExternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number } } | { __typename: 'HubspotFormRecord', id: string, portalId: string, formId: string, region: string, publishedAt: string } | { __typename: 'ImageBlockRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } } | { __typename: 'InternalVideoRecord', id: string, publishedAt: string, video: { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } } }> }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type PdfArticleFragment = { __typename: 'PdfArticleRecord', id: string, title: string, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, documentFile: { __typename: 'PdfRecord', id: string, pdfLink?: string | null, pdf: { __typename?: 'FileField', title?: string | null, url: string } }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type ExternalArticleFragment = { __typename: 'ExternalArticleRecord', id: string, title: string, publisherName?: string | null, slug: string, publishedAt: string, category: { __typename: 'ArticleCategoryRecord', id: string, category: string }, externalUrl: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string }, thumbnail: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type ArticlesBodyFragment = { __typename?: 'ArticlesPageRecord', slug: string, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type ResponsiveImageFragment = { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null };

type FaqCategoryFragment = { __typename: 'FaqCategoryRecord', id: string, category: string };

type FaqGeneralFragment = { __typename?: 'FaqGeneralRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqGeneralModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } };

type FaqStudentLifeFragment = { __typename?: 'FaqStudentLifeRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqStudentLifeModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } };

type FaqPartnershipFragment = { __typename?: 'FaqPartnershipRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqPartnershipModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } };

type FaqGovernanceFinancingFragment = { __typename?: 'FaqGovernanceFinancingRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqGovernanceFinancingModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } };

type FaqCommunityFragment = { __typename?: 'FaqCommunityRecord', question: string, publishedAt: string, answer: { __typename?: 'FaqCommunityModelAnswerField', value: unknown }, category: { __typename: 'FaqCategoryRecord', id: string, category: string } };

type HomeCampusFragment = { __typename?: 'HomePageRecord', campusTitle: string, campusHeading: string, campusBody?: { __typename?: 'HomePageModelCampusBodyField', value: unknown } | null, campusImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null };

type HomeHeroFragment = { __typename?: 'HomePageRecord', heroHeading: string, heroImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }> };

type HomeHeroImagesFragment = { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null };

type HomeSchoolFragment = { __typename?: 'HomePageRecord', schoolTitle: string, schoolHeading: string, schoolBody: { __typename?: 'HomePageModelSchoolBodyField', value: unknown }, schoolLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'LightboxRecord', id: string, title: string, linkText: string, text: { __typename?: 'LightboxModelTextField', value: unknown } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } } | { __typename: 'PdfRecord', id: string, pdfLink?: string | null, pdf: { __typename?: 'FileField', title?: string | null, url: string } } | null, schoolImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }> };

type HomeSchoolImagesFragment = { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null };

type HomeVisionariesFragment = { __typename?: 'HomePageRecord', visionariesTitle: string, visionariesHeading: string, visionariesBody?: { __typename?: 'HomePageModelVisionariesBodyField', value: unknown } | null, visionariesImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null };

type HomeWelcomeFragment = { __typename?: 'HomePageRecord', welcomeHeading: string, welcomeBody?: { __typename?: 'HomePageModelWelcomeBodyField', value: unknown } | null, welcomeImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null };

type FooterFragment = { __typename: 'FooterRecord', id: string, footerAddress: string, footerEmailLabel: string, footerSignupLabel: string, footerEmail: { __typename: 'EmailLinkRecord', id: string, email: string }, footerLinks: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string } | { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }>, footerSignupLink: { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } };

type NavFragment = { __typename: 'NavRecord', id: string, links: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string } | { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } }> };

type AnchorLinkFragment = { __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string };

type EmailLinkFragment = { __typename: 'EmailLinkRecord', id: string, email: string };

type ExternalLinkFragment = { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string };

type KeepMePostedLinkFragment = { __typename: 'KeepMePostedLinkRecord', id: string, linkText: string };

type LightboxFragment = { __typename: 'LightboxRecord', id: string, title: string, linkText: string, text: { __typename?: 'LightboxModelTextField', value: unknown } };

type PageLinkFragment = { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'FaqPageRecord', slug: string } | { __typename: 'HomePageRecord' } };

type PdfFragment = { __typename: 'PdfRecord', id: string, pdfLink?: string | null, pdf: { __typename?: 'FileField', title?: string | null, url: string } };

type CampusAspectFragment = { __typename: 'CampusAspectRecord', id: string, title: string, description?: { __typename?: 'CampusAspectModelDescriptionField', value: unknown } | null, icon: { __typename?: 'FileField', format: string, url: string, height?: number | null, width?: number | null } };

type CampusIntroFragment = { __typename: 'CampusPageRecord', id: string, introHeading: string, introBody: { __typename?: 'CampusPageModelIntroBodyField', value: unknown }, campusAspects: Array<{ __typename: 'CampusAspectRecord', id: string, title: string, description?: { __typename?: 'CampusAspectModelDescriptionField', value: unknown } | null, icon: { __typename?: 'FileField', format: string, url: string, height?: number | null, width?: number | null } }> };

type CampusMapFragment = { __typename: 'CampusPageRecord', id: string, mapHeading: string, map: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, legend: Array<{ __typename: 'LegendGroupRecord', id: string, listType?: string | null, legendItems?: unknown | null }> };

type LegendGroupFragment = { __typename: 'LegendGroupRecord', id: string, listType?: string | null, legendItems?: unknown | null };

type CampusSpaceFragment = { __typename: 'CampusSpaceRecord', id: string, title: string, image: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, description?: { __typename?: 'CampusSpaceModelDescriptionField', value: unknown } | null };

type CampusSpacesFragment = { __typename: 'CampusPageRecord', id: string, spacesHeading: string, spacesBody?: { __typename?: 'CampusPageModelSpacesBodyField', value: unknown } | null, spaces: Array<{ __typename: 'CampusSpaceRecord', id: string, title: string, image: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }, description?: { __typename?: 'CampusSpaceModelDescriptionField', value: unknown } | null }> };

type PrivacyPolicyFragment = { __typename: 'PrivacyPolicyRecord', id: string, privacyPolicyHeading: string, privacyPolicyText: { __typename?: 'PrivacyPolicyModelPrivacyPolicyTextField', value: unknown } };

type ExternalVideoFileFragment = { __typename: 'VideoField', url: string, thumbnailUrl: string, title: string, width: number, height: number };

type InternalVideoFileFragment = { __typename: 'VideoFileField', id: string, video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, thumbnailUrl: string } };

}
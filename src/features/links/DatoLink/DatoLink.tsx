import { type ComponentProps } from 'react'

import { classes } from '@/utils/css'

import { AnchorLink } from '../AnchorLink/AnchorLink'
import { EmailLink } from '../EmailLink/EmailLink'
import { KeepMePostedLink } from '../KeepMePostedLink/KeepMePostedLink'
import { type IconType } from '../LinkIcon/LinkIcon'
import { PageLink } from '../PageLink/PageLink'
import styles from './DatoLink.module.scss'

type Props = ComponentProps<'a' | 'button'> & {
  iconType?: IconType
  isButton?: boolean
  borderVariant?: 'SQUARE' | 'ROUNDED'
  searchParam?: {
    field: string
    value: string
  }
  data:
    | Queries.AnchorLinkFragment
    | Queries.KeepMePostedLinkFragment
    | Queries.PageLinkFragment
    | Queries.EmailLinkFragment
    | null
    | undefined
}

export const DatoLink = ({
  data,
  iconType,
  isButton,
  searchParam,
  borderVariant,
  className,
  ...props
}: Props) => {
  const linkProps = {
    iconType,
    'data-border-style': borderVariant,
    'data-direction':
      iconType === 'ARROW_LEFT' ? 'LEFT' : iconType && 'RIGHT',
    className: classes(
      isButton && styles.button,
      styles.link,
      className
    ),
    ...props,
  }
  switch (data?.__typename) {
    case 'AnchorLinkRecord': {
      return (
        <AnchorLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'KeepMePostedLinkRecord': {
      return (
        <KeepMePostedLink
          data={data}
          {...(linkProps as ComponentProps<'button'>)}
        />
      )
    }
    case 'PageLinkRecord': {
      return (
        <PageLink
          data={data}
          searchParam={searchParam}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'EmailLinkRecord': {
      return (
        <EmailLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    default: {
      return (
        <AnchorLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
  }
}

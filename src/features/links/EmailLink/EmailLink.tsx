'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon from '../LinkIcon/LinkIcon'

import type { IconType } from '../LinkIcon/LinkIcon'

export type EmailLinkProps = ComponentProps<'a'> & {
  data: Queries.EmailLinkFragment | null | undefined
  iconType?: IconType | null | undefined
}

export const EmailLink = ({
  data,
  iconType,
  ...props
}: EmailLinkProps) => {
  return (
    <Link
      href={`mailto:${data?.email}`}
      {...props}
    >
      {iconType === 'ARROW_LEFT' && (
        <DatoLinkIcon iconType="ARROW_LEFT" />
      )}
      <span>{data?.email}</span>
      {iconType && iconType !== 'ARROW_LEFT' && (
        <DatoLinkIcon iconType={iconType} />
      )}
    </Link>
  )
}

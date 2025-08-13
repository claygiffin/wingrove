'use client'

import type { ComponentProps } from 'react'

import { useCoachMenuContext } from '@/contexts/coachMenuContext'

import DatoLinkIcon from '../LinkIcon/LinkIcon'

import type { IconType } from '../LinkIcon/LinkIcon'

export type KeepMePostedLinkProps = ComponentProps<'button'> & {
  data: Queries.KeepMePostedLinkFragment | null | undefined
  iconType?: IconType
}

export const KeepMePostedLink = ({
  data,
  iconType,
  onClick,
  ...props
}: KeepMePostedLinkProps) => {
  const { setCoachMenuIsOpen } = useCoachMenuContext()
  return (
    <button
      onClick={e => {
        setCoachMenuIsOpen(true)
        if (onClick) {
          onClick(e)
        }
      }}
      {...props}
    >
      {iconType === 'ARROW_LEFT' && (
        <DatoLinkIcon iconType="ARROW_LEFT" />
      )}
      <span>{data?.linkText}</span>
      {iconType && iconType !== 'ARROW_LEFT' && (
        <DatoLinkIcon iconType={iconType} />
      )}
    </button>
  )
}

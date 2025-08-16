'use client'

import { type ComponentProps, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { Modal } from '@/features/modal'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'

import DatoLinkIcon from '../LinkIcon/LinkIcon'
import styles from './Lightbox.module.scss'

import type { IconType } from '../LinkIcon/LinkIcon'

export type LightboxProps = ComponentProps<'button'> & {
  data: Queries.LightboxFragment | null | undefined
  iconType?: IconType
}

export const Lightbox = ({
  data,
  iconType,
  onClick,
  ...props
}: LightboxProps) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  useEscKeyFunction(() => {
    setShowModal(false)
  })

  return (
    <div>
      <button
        onClick={e => {
          openModal()
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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className={styles.lightboxModalWrapper}>
            <DatoStructuredText data={data?.text} />
          </div>
        </Modal>
      )}
    </div>
  )
}

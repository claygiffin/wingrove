'use client'

import { type ComponentProps, useRef } from 'react'

import { DatoImage } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { useElementHeight } from '@/hooks/useElementRect'

import styles from './CampusSpace.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.CampusSpaceFragment
}

export const CampusSpace = ({ data, ...props }: Props) => {
  const descriptionRef = useRef<HTMLDivElement>(null)
  const descriptionHeight = useElementHeight(descriptionRef)
  return (
    <div
      className={styles.space}
      style={{ '--description-height': descriptionHeight + 'px' }}
      {...props}
    >
      <div className={styles.imageWrapper}>
        <DatoImage
          className={styles.image}
          data={data.image.responsiveImage}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.descriptionWrapper}>
          <div
            ref={descriptionRef}
            className={styles.description}
          >
            <DatoStructuredText data={data.description} />
          </div>
        </div>
      </div>
    </div>
  )
}

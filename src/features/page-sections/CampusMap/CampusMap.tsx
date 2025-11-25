import Image from 'next/image'
import { type ComponentProps } from 'react'

import { DatoImage } from '@/features/dato-image'
import { MarkdownHeading } from '@/features/ui'

import styles from './CampusMap.module.scss'
import { Legend } from './Legend/Legend'

type Props = ComponentProps<'section'> & {
  data: Queries.CampusMapFragment
}

export const CampusMap = ({ data, ...props }: Props) => {
  const getMap = () => {
    switch (data.map.format) {
      case 'svg': {
        return (
          <Image
            className={styles.map}
            src={data.map.url}
            height={data.map.height || undefined}
            width={data.map.width || undefined}
            alt={data.map.alt || ''}
          />
        )
      }
      default: {
        return (
          <DatoImage
            className={styles.map}
            data={data.map.responsiveImage}
          />
        )
      }
    }
  }
  return (
    <section
      className={styles.section}
      {...props}
    >
      <MarkdownHeading
        as="h2"
        className={styles.heading}
      >
        {data.mapHeading}
      </MarkdownHeading>
      <figure className={styles.figure}>
        {getMap()}
        <Legend data={data.legend} />
      </figure>
    </section>
  )
}

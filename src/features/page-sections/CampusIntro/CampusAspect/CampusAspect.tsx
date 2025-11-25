import Image from 'next/image'
import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './CampusAspect.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.CampusAspectFragment
}

export const CampusAspect = ({ data, ...props }: Props) => {
  return (
    <div
      className={styles.group}
      {...props}
    >
      <Image
        className={styles.icon}
        src={data.icon.url}
        alt={data.title}
        width={data.icon.width || undefined}
        height={data.icon.height || undefined}
      />
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.description}>
        <DatoStructuredText data={data.description} />
      </div>
    </div>
  )
}

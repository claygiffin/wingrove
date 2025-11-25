import { type ComponentProps } from 'react'

import { DatoTypedList } from '@/features/common'

import styles from './Legend.module.scss'

type Props = ComponentProps<'figcaption'> & {
  data: Queries.LegendGroupFragment[]
}

export const Legend = ({ data, ...props }: Props) => {
  return (
    <figcaption
      className={styles.container}
      {...props}
    >
      <h3 className={styles.title}>Legend</h3>
      {data.map(legendGroup => (
        <DatoTypedList
          className={styles.list}
          data={legendGroup.legendItems}
          as="ol"
          style={{ listStyleType: legendGroup.listType || undefined }}
          key={legendGroup.id}
        />
      ))}
    </figcaption>
  )
}

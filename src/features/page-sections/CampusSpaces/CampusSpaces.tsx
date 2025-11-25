import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'

import { CampusSpace } from './CampusSpace/CampusSpace'
import styles from './CampusSpaces.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.CampusSpacesFragment
}

export const CampusSpaces = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <MarkdownHeading
        className={styles.heading}
        as="h2"
      >
        {data.spacesHeading}
      </MarkdownHeading>
      <div className={styles.body}>
        <DatoStructuredText data={data.spacesBody} />
      </div>
      <div className={styles.spaces}>
        {data.spaces.map(space => (
          <CampusSpace
            data={space}
            key={space.id}
          />
        ))}
      </div>
    </section>
  )
}

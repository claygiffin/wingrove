import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { MarkdownHeading } from '@/features/ui'

import { CampusAspect } from './CampusAspect/CampusAspect'
import styles from './CampusIntro.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.CampusIntroFragment
}

export const CampusIntro = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <MarkdownHeading
        className={styles.heading}
        as={'h2'}
      >
        {data.introHeading}
      </MarkdownHeading>
      <div className={styles.body}>
        <DatoStructuredText data={data.introBody} />
      </div>
      <div className={styles.aspects}>
        {data.campusAspects.map(aspect => (
          <CampusAspect
            key={aspect.id}
            data={aspect}
          />
        ))}
      </div>
    </section>
  )
}

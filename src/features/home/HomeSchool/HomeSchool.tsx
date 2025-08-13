'use client'

import { type ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'

import styles from './HomeSchool.module.scss'
import { HomeSchoolImages } from './HomeSchoolImages/HomeSchoolImages'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeSchoolFragment | null | undefined
}

export const HomeSchool = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })

  return (
    <section
      id="school"
      className={styles.section}
      data-in-view={inView}
      {...props}
    >
      <div className={styles.background}>
        <HomeSchoolImages data={data?.schoolImages} />
      </div>
      <div
        className={styles.body}
        ref={inViewRef}
      >
        <div className={styles.borderLeft}>
          {Array.from({ length: 15 }, (_, index) => (
            <div
              key={index}
              className={styles.borderCell}
            ></div>
          ))}
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h2 className={styles.title}>{data?.schoolTitle}</h2>
            <h2 className={styles.heading}>{data?.schoolHeading}</h2>
            <div className={styles.line}></div>
            <DatoStructuredText
              data={data?.schoolBody}
            ></DatoStructuredText>
            {!!data?.schoolLink && (
              <DatoLink
                key={data?.schoolLink?.id}
                data={data?.schoolLink}
                onClick={() => {}}
                className={styles.link}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

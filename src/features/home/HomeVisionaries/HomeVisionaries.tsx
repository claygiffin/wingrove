'use client'

import { type ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './HomeVisionaries.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeVisionariesFragment | null | undefined
}

export const HomeVisionaries = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })

  return (
    <section
      id="visionaries"
      className={styles.section}
      data-in-view={inView}
      {...props}
    >
      <div className={styles.background}>
        <DatoImageFocused
          className={styles.image}
          data={data?.visionariesImage?.responsiveImage}
          focalPoint={data?.visionariesImage?.focalPoint}
        />
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
            <h2 className={styles.title}>{data?.visionariesTitle}</h2>
            <h2 className={styles.heading}>
              {data?.visionariesHeading}
            </h2>
            <div className={styles.line}></div>
            <div className={styles.textWrapper}>
              <DatoStructuredText
                data={data?.visionariesBody}
              ></DatoStructuredText>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

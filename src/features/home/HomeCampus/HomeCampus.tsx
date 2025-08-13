'use client'

import { type ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './HomeCampus.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeCampusFragment | null | undefined
}

export const HomeCampus = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })

  return (
    <section
      id="campus"
      className={styles.section}
      data-in-view={inView}
      ref={inViewRef}
      {...props}
    >
      <div className={styles.background}>
        <DatoImageFocused
          className={styles.image}
          data={data?.campusImage?.responsiveImage}
          focalPoint={data?.campusImage?.focalPoint}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.borderLeft}>
          {Array.from({ length: 15 }, (_, index) => (
            <div
              key={index}
              className={styles.borderCell}
            ></div>
          ))}
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyLeft}>
            <div className={styles.bodyLeftContainer}>
              <h2 className={styles.title}>{data?.campusTitle}</h2>
              <h2 className={styles.heading}>{data?.campusHeading}</h2>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bodyRight}>
            <DatoStructuredText
              data={data?.campusBody}
            ></DatoStructuredText>
          </div>
        </div>
      </div>
    </section>
  )
}

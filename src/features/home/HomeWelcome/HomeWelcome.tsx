'use client'

import { type ComponentProps } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { LogoWelcome } from '@/features/logo'
import { MarkdownHeading } from '@/features/ui'

import styles from './HomeWelcome.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeWelcomeFragment | null | undefined
}

export const HomeWelcome = ({ data, ...props }: Props) => {
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })

  return (
    <section
      id="welcome"
      className={styles.section}
      data-in-view={inView}
      {...props}
    >
      <div className={styles.background}>
        <DatoImageFocused
          className={styles.image}
          data={data?.welcomeImage?.responsiveImage}
          focalPoint={data?.welcomeImage?.focalPoint}
        />
      </div>
      <div className={styles.body}>
        <div
          className={styles.logoContainer}
          ref={inViewRef}
        >
          <LogoWelcome />
        </div>
        <div
          className={styles.descriptionContainer}
          ref={inViewRef}
        >
          <div className={styles.description}>
            <MarkdownHeading
              className={styles.heading}
              as="h2"
            >
              {data?.welcomeHeading || ''}
            </MarkdownHeading>
            <div className={styles.line}></div>
            <DatoStructuredText data={data?.welcomeBody} />
          </div>
        </div>
      </div>
    </section>
  )
}

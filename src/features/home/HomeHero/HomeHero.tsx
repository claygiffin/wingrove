'use client'

import { type ComponentProps } from 'react'

import { LogoStacked } from '@/features/logo'
import { AnimateIn } from '@/features/ui'

import styles from './HomeHero.module.scss'
import { HomeHeroImages } from './HomeHeroImages/HomeHeroImages'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeHeroFragment | null | undefined
}

export const HomeHero = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.background}>
        <HomeHeroImages data={data?.heroImages} />
      </div>
      <div className={styles.logoWrapper}>
        <AnimateIn
          className={styles.logoWrap}
          innerClassName={styles.logoWrapInner}
        >
          <LogoStacked />
        </AnimateIn>
        <AnimateIn
          as="div"
          innerAs="span"
          className={styles.heading}
        >
          <span>{data?.heroHeading}</span>
        </AnimateIn>
      </div>
    </section>
  )
}

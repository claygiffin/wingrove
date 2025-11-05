'use client'

import { useState } from 'react'

import { DatoImage } from '@/features/dato-image'

import styles from './ArticleCarousel.module.scss'

export const ArticleCarousel = ({
  items,
  description,
}: {
  items: any
  description: string
}) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % items?.length)
  }

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + items?.length) % items?.length)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselBody}>
        <div className={styles.slide}>
          <DatoImage
            className={styles.image}
            data={items[current]?.image?.responsiveImage}
          />
        </div>

        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prevSlide}
        >
          <ArrowLeftIcon className={styles.icon} />
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextSlide}
        >
          <ArrowRightIcon className={styles.icon} />
        </button>
      </div>
      <div className={styles.topBorder}></div>
      <div className={styles.bottomBorder}></div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

/* --- Inline SVG arrow icons --- */
export function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="36"
      height="36"
      {...props}
    >
      <polyline
        points="13 8 9 12 13 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(2) translate(-6, -6)"
      />
    </svg>
  )
}

export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="36"
      height="36"
      {...props}
    >
      <polyline
        points="11 8 15 12 11 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(2) translate(-6, -6)"
      />
    </svg>
  )
}

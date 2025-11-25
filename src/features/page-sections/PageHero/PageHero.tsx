import { type ComponentProps } from 'react'

import { LogoWelcome } from '@/features/logo'

import styles from './PageHero.module.scss'

type Props = ComponentProps<'section'> & {
  title: string
  color?: string
}

export const PageHero = ({ title, color, style, ...props }: Props) => {
  return (
    <section
      className={styles.hero}
      style={{
        '--background-color': `var(--color-${color})`,
        ...style,
      }}
      {...props}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.backgroundLogo}>
        <div className={styles.logoWrapper}>
          <LogoWelcome />
        </div>
      </div>
    </section>
  )
}

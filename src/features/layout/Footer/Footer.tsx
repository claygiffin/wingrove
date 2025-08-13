'use client'

import { type ComponentProps } from 'react'

import { DatoLink } from '@/features/links'
import {
  LogoHorizontal,
  LogoStacked,
  LogoWelcome,
} from '@/features/logo'

import styles from './Footer.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.FooterFragment | null | undefined
}

export const Footer = ({ data, ...props }: Props) => {
  return (
    <footer
      className={styles.footer}
      {...props}
    >
      <div className={styles.footerSignUpWrapper}>
        <h2 className={styles.signupLabel}>
          {data?.footerSignupLabel}
        </h2>
        <div className={styles.signupLinkWrapper}>
          <DatoLink
            key={data?.footerSignupLink?.id}
            data={data?.footerSignupLink}
            className={styles.signupLink}
          />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.backgroundLogo}>
          <div className={styles.logoWrapper}>
            <LogoWelcome />
          </div>
        </div>
        <div className={styles.footerLeft}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoAqua}>
              <LogoHorizontal />
            </div>
            <h2 className={styles.address}>{data?.footerAddress}</h2>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <h2 className={styles.label}>{data?.footerEmailLabel}</h2>
              <DatoLink
                key={data?.footerEmail?.id}
                data={data?.footerEmail}
                className={styles.email}
              />
            </div>
            <div className={styles.links}>
              {data?.footerLinks?.map(link => {
                return (
                  <DatoLink
                    key={link?.id}
                    data={link}
                    className={styles.link}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

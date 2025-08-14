'use client'

import { type ComponentProps, useState } from 'react'

import { HubspotForm } from '@/features/hubSpotForm'
import { DatoLink } from '@/features/links'
import { LogoHorizontal, LogoWelcome } from '@/features/logo'
import { Modal } from '@/features/modal'
import { PrivacyPolicy } from '@/features/privacyPolicy'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'

import styles from './Footer.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.FooterFragment | null | undefined
  privacyPolicy: Queries.PrivacyPolicyFragment | null | undefined
}

export const Footer = ({ data, privacyPolicy, ...props }: Props) => {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [privacyPolicyModalOpen, setPrivacyPolicyModalOpen] =
    useState(false)

  const openContactModal = () => {
    setContactModalOpen(true)
  }

  const openPrivacyPolicyModal = () => {
    setPrivacyPolicyModalOpen(true)
  }

  useEscKeyFunction(() => {
    setContactModalOpen(false)
    setPrivacyPolicyModalOpen(false)
  })

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
            onClick={openContactModal}
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
                    onClick={() =>
                      link?.__typename === 'KeepMePostedLinkRecord'
                        ? openPrivacyPolicyModal()
                        : null
                    }
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {contactModalOpen && (
        <Modal onClose={() => setContactModalOpen(false)}>
          <HubspotForm />
        </Modal>
      )}
      {privacyPolicyModalOpen && (
        <Modal onClose={() => setPrivacyPolicyModalOpen(false)}>
          <PrivacyPolicy data={privacyPolicy}></PrivacyPolicy>
        </Modal>
      )}
    </footer>
  )
}

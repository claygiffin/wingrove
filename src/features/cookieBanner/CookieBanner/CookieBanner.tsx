'use client'

import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { Modal } from '@/features/modal'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'

import { LearnMore } from '../LearnMore/LearnMore'
import styles from './CookieBanner.module.scss'

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false)

  useEffect(() => {
    // Check if the cookie exists
    const consent = Cookies.get('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 })
    setIsVisible(false)
  }

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 })
    setIsVisible(false)
  }

  const openLearnMoreModal = () => {
    setShowLearnMoreModal(true)
  }

  useEscKeyFunction(() => setShowLearnMoreModal(false))

  if (!isVisible) return null

  return (
    <div className={styles.cookieBannerWrapper}>
      <div className={styles.cookieBanner}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            We use cookies to improve your experience.{' '}
            <span className={styles.mobileBreak}>
              <br />
            </span>
            By using our site, you agree to our use of cookies.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            onClick={handleAccept}
            className={styles.acceptButton}
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className={styles.declineButton}
          >
            Reject
          </button>
          <button
            onClick={openLearnMoreModal}
            className={styles.learnMoreButton}
          >
            Learn More
          </button>
        </div>
      </div>
      {showLearnMoreModal && (
        <Modal onClose={() => setShowLearnMoreModal(false)}>
          <LearnMore />
        </Modal>
      )}
    </div>
  )
}

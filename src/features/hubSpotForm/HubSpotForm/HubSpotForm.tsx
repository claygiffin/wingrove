'use client'

import Script from 'next/script'
import { useEffect } from 'react'

import styles from './HubspotForm.module.scss'

export const HubspotForm = () => {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
        formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
        region: process.env.NEXT_PUBLIC_HUBSPOT_REGION,
        target: process.env.NEXT_PUBLIC_HUBSPOT_TARGET,
      })
    }
  }, [])

  return (
    <div className={styles.hubspotFormContainer}>
      <Script
        src="//js-na2.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
              formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
              region: process.env.NEXT_PUBLIC_HUBSPOT_REGION,
              target: process.env.NEXT_PUBLIC_HUBSPOT_TARGET,
            })
          }
        }}
      />
      <div id="hubspotFormContainer"></div>
    </div>
  )
}

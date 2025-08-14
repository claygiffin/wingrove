'use client'

import { useEffect } from 'react'

export const HubspotTracking = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    // Inject the external tracking script
    const script = document.createElement('script')
    const scriptSrc = 'https://js-na2.hs-scripts.com/242324058.js'
    const scriptId = 'hs-script-loader'
    script.src = scriptSrc
    script.async = true
    script.defer = true
    script.id = scriptId
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      document.querySelector(`script[src="${scriptSrc}"]`)?.remove()
    }
  }, [])
  return null
}

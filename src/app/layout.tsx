import { GoogleTagManager } from '@next/third-parties/google'
import gql from 'graphql-tag'
import type { ReactNode } from 'react'

import { CookieBanner } from '@/features/cookieBanner'
import {
  ContextWrapper,
  Footer,
  FooterFragment,
  Nav,
  NavFragment,
} from '@/features/layout'
import { PrivacyPolicyFragment } from '@/features/privacyPolicy'
import { HubspotTracking } from '@/features/tracking'
import { datoRequest } from '@/lib/datocms-fetch'
import { brown, helveticaNeue, teodor } from '@/theme/fonts/fontface'
import '@/theme/globals.scss'
import { classes } from '@/utils/css'

const query = gql`
  query RootLayout {
    nav {
      ...Nav
    }
    footer {
      ...Footer
    }
    privacyPolicy {
      ...PrivacyPolicy
    }
  }
  ${NavFragment}
  ${FooterFragment}
  ${PrivacyPolicyFragment}
`

const RootLayout = async ({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) => {
  const { data } = await datoRequest<Queries.RootLayoutQuery>({ query })

  return (
    <ContextWrapper>
      <html
        lang="en"
        className={classes(
          brown.variable,
          teodor.variable,
          helveticaNeue.variable
        )}
      >
        <head>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''}
          />
          <HubspotTracking />
          <meta
            name="google-site-verification"
            content="VHXvvvMZFvSimoPvk7JpBMXkTNCRVaUYvg7HqD6czXQ"
          />
        </head>
        <body>
          <Nav data={data.nav} />
          {children}
          <div id="lightbox-container">{modal}</div>
          <Footer
            data={data.footer}
            privacyPolicy={data.privacyPolicy}
          ></Footer>
          <CookieBanner />
        </body>
      </html>
    </ContextWrapper>
  )
}

export default RootLayout

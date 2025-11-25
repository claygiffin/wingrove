'use client'

import Link from 'next/link'
import {
  type ComponentProps,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'

import { HubspotForm } from '@/features/hubSpotForm'
import { DatoLink } from '@/features/links'
import { LogoHorizontal } from '@/features/logo'
import { Modal } from '@/features/modal'
import { useElementHeight } from '@/hooks/useElementRect'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'
import { classes } from '@/utils/css'

import styles from './Nav.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.NavFragment | null | undefined
}

export const Nav = ({ data, className, ...props }: Props) => {
  const { inView: spacerInView, ref: spacerRef } = useInView()

  const navRef = useRef<HTMLElement | null>(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const navHeight = useElementHeight(navRef) || 0

  const openContactModal = () => {
    setContactModalOpen(true)
  }

  useEscKeyFunction(() => setContactModalOpen(false))

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--nav-height',
      navHeight + 'px'
    )
    return () => {
      document.documentElement.style.removeProperty('--nav-height')
    }
  }, [navHeight])

  return (
    <Fragment>
      <div
        data-scrolled={!spacerInView}
        className={classes(styles.container, className)}
        {...props}
      >
        <nav
          className={styles.nav}
          ref={navRef}
        >
          <Link
            href="/"
            className={styles.logoWrap}
            aria-label="Wingrove"
          >
            <LogoHorizontal />
          </Link>
          <div className={styles.navItems}>
            {data?.links.map(link => (
              <DatoLink
                key={link.id}
                data={link}
                onClick={
                  link.__typename === 'KeepMePostedLinkRecord'
                    ? openContactModal
                    : undefined
                }
                className={styles.link}
              />
            ))}
          </div>
        </nav>
      </div>
      <div
        className={styles.spacer}
        ref={spacerRef}
      />
      {contactModalOpen && (
        <Modal onClose={() => setContactModalOpen(false)}>
          <HubspotForm />
        </Modal>
      )}
    </Fragment>
  )
}

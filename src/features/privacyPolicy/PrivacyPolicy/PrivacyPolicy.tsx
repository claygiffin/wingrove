'use client'

import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './PrivacyPolicy.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.PrivacyPolicyFragment | null | undefined
}

export const PrivacyPolicy = ({ data, ...props }: Props) => {
  return (
    <div
      className={styles.privacyPolicy}
      {...props}
    >
      <h2 className={styles.heading}>{data?.privacyPolicyHeading}</h2>
      <DatoStructuredText
        data={data?.privacyPolicyText}
      ></DatoStructuredText>
    </div>
  )
}

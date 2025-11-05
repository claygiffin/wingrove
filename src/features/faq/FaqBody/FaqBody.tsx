'use client'

import { type ComponentProps, useState } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { classes } from '@/utils/css'

import styles from './FaqBody.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.FaqBodyFragment | null | undefined
}

export const FaqBody = ({ data, ...props }: Props) => {
  const [selectItemIndex, setSelectItemIndex] = useState(0)

  return (
    <div
      className={styles.body}
      {...props}
    >
      {(data?.items || []).map((item, index) => {
        return (
          <div
            className={styles.itemWrapper}
            key={index}
            onClick={() => setSelectItemIndex(index)}
          >
            <div className={styles.questionWrapper}>
              <h3 className={styles.question}>{item?.question}</h3>
              <div
                className={classes(
                  styles.button,
                  selectItemIndex === index ? styles.active : ''
                )}
              >
                <div className={styles.horizontalLine}></div>
                <div className={styles.verticalLine}></div>
              </div>
            </div>
            <div
              className={classes(
                styles.answerWrapper,
                selectItemIndex === index ? styles.active : ''
              )}
            >
              <DatoStructuredText data={item?.answer} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

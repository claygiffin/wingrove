// Modified StructuredText component to handle Gatsby's incompatible type generation
import { isLink } from 'datocms-structured-text-utils'
import Link from 'next/link'
import {
  StructuredText,
  type StructuredTextDocument,
  type StructuredTextGraphQlResponseRecord,
  type StructuredTextPropTypes,
  renderNodeRule,
} from 'react-datocms/structured-text'

interface Props<
  R1 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R2 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R3 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
> extends Omit<StructuredTextPropTypes<R1, R2, R3>, 'data'> {
  data:
    | {
        value:
          | StructuredTextDocument
          | Record<string, unknown>
          | unknown
          | null
        blocks?: readonly (R1 | null | undefined)[] | null
        links?: readonly (R2 | null | undefined)[] | null
        inlineBlocks?: readonly (R3 | null | undefined)[] | null
      }
    | null
    | undefined
}

export const DatoStructuredText = <
  R1 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R2 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R3 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
>({
  data,
  customNodeRules,
  ...props
}: Props<R1, R2, R3>) => {
  if (data) {
    return (
      <StructuredText
        data={
          data as {
            value: StructuredTextDocument
            blocks?: R1[]
            links?: R2[]
            inlineBlocks?: R3[]
          }
        }
        customNodeRules={[
          renderNodeRule(isLink, ({ node, children, key }) => {
            const isInternal =
              node.url.startsWith('/') || node.url.startsWith('#')
            return (
              <Link
                key={key}
                href={node.url}
                target={isInternal ? undefined : '_blank'}
                rel={isInternal ? undefined : 'noreferrer'}
                {...node.meta}
              >
                {children}
              </Link>
            )
          }),
          ...(customNodeRules || []),
        ]}
        {...props}
      />
    )
  }
}

import type { PolymorphicComponent } from '@/types/polymorphic'

type Props = {
  data: unknown
}

export type DatoTypedList = (string | number)[]

export const DatoTypedList: PolymorphicComponent<'ul', Props> = ({
  data,
  as = 'ul',
  ...props
}) => {
  const listArray = data as DatoTypedList
  const ListElement = as
  return (
    <ListElement {...props}>
      {listArray.map((listItem, i) => (
        <li key={i}>{listItem}</li>
      ))}
    </ListElement>
  )
}

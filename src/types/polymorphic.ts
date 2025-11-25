// import type {
//   ComponentPropsWithRef,
//   ComponentPropsWithoutRef,
//   ComponentType,
//   JSX,
//   ReactElement,
// } from 'react'
// type As = keyof JSX.IntrinsicElements | ComponentType<any>
// type PropsOf<E extends As> = JSX.LibraryManagedAttributes<
//   E,
//   ComponentPropsWithoutRef<E>
// >
// type RefOf<E extends As> = ComponentPropsWithRef<E>['ref']
// type PolymorphicComponentProps<
//   E extends As,
//   P extends object = Record<string, unknown>,
// > = P & { as?: E } & Omit<PropsOf<E>, keyof P | 'as'> & {
//     ref?: RefOf<E>
//   }
// export type PolymorphicComponent<
//   D extends As,
//   P extends object = Record<string, unknown>,
// > = <E extends As = D>(
//   props: PolymorphicComponentProps<E, P>
// ) => ReactElement | null
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ComponentType,
  JSX,
  ReactElement,
} from 'react'

type As = keyof JSX.IntrinsicElements | ComponentType<any>

export type PolymorphicComponent<
  D extends As,
  P extends object = Record<string, unknown>,
> = <E extends As = D>(
  props: P & { as?: E } & Omit<
      JSX.LibraryManagedAttributes<E, ComponentPropsWithoutRef<E>>,
      keyof P | 'as'
    > & {
      ref?: ComponentPropsWithRef<E>['ref']
    }
) => ReactElement | null

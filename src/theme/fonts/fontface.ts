import localFont from 'next/font/local'

export const brown = localFont({
  src: [
    {
      path: './Brown/Brown-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Brown/Brown-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Brown/Brown-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--ff-brown',
})

export const teodor = localFont({
  src: [
    {
      path: './Teodor/Teodor-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--ff-teodor',
})

export const helveticaNeue = localFont({
  src: [
    {
      path: './HelveticaNeue/HelveticaNeue-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--ff-helveticaNeue',
})

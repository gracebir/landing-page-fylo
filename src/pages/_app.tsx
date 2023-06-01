import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets:['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${openSans.className} bg-main-bg min-h-screen w-full`}>
      <Component {...pageProps} />
    </div>
  )
}

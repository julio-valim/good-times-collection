import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
  Gothic_A1 as Gothic,
} from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
const gothic = Gothic({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-gothic',
})

export const metadata = {
  title: 'GoodTimes Collection',
  description: 'Keeping close your good times.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} ${gothic.variable} bg-orange-200 font-sans text-indigo-950`}
      >
        {children}
      </body>
    </html>
  )
}

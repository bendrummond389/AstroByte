import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AstroByte',
  description:
    'AstroByte is a forward-thinking web development agency dedicated to transforming your ideas into seamless digital experiences. Our expert developers craft cutting-edge websites, apps, and software solutions to propel your business into the digital age.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

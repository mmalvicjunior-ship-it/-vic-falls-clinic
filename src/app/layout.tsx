import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vic Falls Clinic | Quality Healthcare You Can Trust',
  description: 'Vic Falls Clinic provides quality, affordable healthcare services in Victoria Falls, Zimbabwe. Book appointments online and access trusted medical care.',
  keywords: 'Vic Falls Clinic, Victoria Falls healthcare, Zimbabwe medical care, doctor appointment, quality healthcare',
  metadataBase: new URL('https://vicfallsclinic.vercel.app'),
  openGraph: {
    title: 'Vic Falls Clinic | Quality Healthcare You Can Trust',
    description: 'Vic Falls Clinic provides quality, affordable healthcare services in Victoria Falls, Zimbabwe.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

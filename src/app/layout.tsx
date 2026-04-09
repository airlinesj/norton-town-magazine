import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const interFont = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const monoFont = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'The Norton Town Magazine - Week 126',
  description: 'A clean, high-end digital magazine for Norton, Zimbabwe',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${interFont.variable} ${monoFont.variable} bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 font-geist-sans`}
      >
        <Navbar />
        <main className="overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

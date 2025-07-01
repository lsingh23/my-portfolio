import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lakhveer Singh - Full Stack Developer',
  description: 'Portfolio of Lakhveer Singh - Frontend-focused Full Stack Developer specializing in React, Next.js, and AI integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
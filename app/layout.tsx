import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lakhveer Singh — Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and AI integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#E8EDF5] text-[#1A2332] antialiased">
        {children}
      </body>
    </html>
  )
}

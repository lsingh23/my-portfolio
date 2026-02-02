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
      <body className="bg-[#0A0A0B] text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  )
}

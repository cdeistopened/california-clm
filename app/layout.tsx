import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'California Catholic Land Movement',
  description: 'California Catholics returning to the land. Rural resettlement, practical education, fellowship, and faith.',
  openGraph: {
    title: 'California Catholic Land Movement',
    description: 'California Catholics returning to the land.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

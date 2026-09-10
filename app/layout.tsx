import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const siteUrl = 'https://www.apexorder.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Apex Order',
    template: '%s | Apex Order',
  },
  description:
    'We aim to attract the best, bringing the entire community to unlimited growth, reaching their own APEX.',
  keywords: ['NFT', 'Staking', 'Prospera', 'Apex Order', 'Apex Centher'],
  authors: [{ name: 'Apex' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Apex Order',
    description:
      'We aim to attract the best, bringing the entire community to unlimited growth, reaching their own APEX.',
    url: siteUrl,
    siteName: 'apexorder.xyz',
    images: [
      {
        url: '/images/logo.png',
        width: 160,
        height: 172,
        alt: 'Apex Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Order',
    description:
      'We aim to attract the best, bringing the entire community to unlimited growth, reaching their own APEX.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon/logofavicon.png' },
      {
        url: '/images/favicon/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/images/favicon/android-icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/favicon/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/images/favicon/android-icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: ['/images/favicon/logofavicon.png'],
    apple: [
      { url: '/images/favicon/apple-icon.png' },
      {
        url: '/images/favicon/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/images/favicon/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: '#00020A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

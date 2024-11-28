import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doc Driven Development',
  description: 'A revolutionary AI-driven approach to software development',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  // Optimize for mobile performance
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'theme-color': '#ffffff'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical images */}
        <link 
          rel="preload" 
          href="/images/about-ryan-vice.jpeg" 
          as="image" 
          type="image/jpeg" 
        />
        <link 
          rel="preload" 
          href="/images/doc-driven-dev-process.png" 
          as="image" 
          type="image/png" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface SharedLayoutProps {
  children: React.ReactNode
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="container mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

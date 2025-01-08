import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Articles | Doc Driven Dev',
  description: 'Read our latest articles and insights about document-driven development',
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

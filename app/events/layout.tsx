import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Events | Doc Driven Dev',
  description: 'Join our upcoming events and workshops about document-driven development',
}

export default function EventsLayout({
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
    </div>
  )
}

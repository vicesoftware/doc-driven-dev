import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Articles | Doc Driven Dev',
  description: 'Read our latest articles and insights about document-driven development',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="container mx-auto px-4">
        <div className="pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore insights and best practices about document-driven development, software architecture, and building better software.
          </p>
        </div>
        
        {/* Article list */}
        <div className="grid gap-8 pb-16">
          <Link href="/articles/devin-best-practices" className="block">
            <article className="p-6 border rounded-lg bg-card hover:border-primary transition-colors">
              <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Best Practices for Working with Devin AI</h2>
              <p className="text-muted-foreground">
                Learn how to effectively work with Devin AI using the DocDD.ai approach, proper task management, and testing strategies. 
                Discover best practices for breaking down work, setting up tests, and managing pull requests.
              </p>
            </article>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

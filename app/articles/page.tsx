import { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Articles | Doc Driven Dev',
  description: 'Articles about software development, AI, and building better documentation.',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="flex-1 overflow-x-hidden container mx-auto px-4 py-24">
        <div className="pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore insights and best practices about document-driven development, software architecture, and building better software.
          </p>
        </div>
        
        {/* Article list */}
        <div className="space-y-8 pb-16">
          <Link 
            href="/articles/best-llm-for-development"
            className="block group"
          >
            <article className="flex flex-col md:flex-row gap-8 p-6 border rounded-lg bg-card hover:border-primary transition-colors">
              <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-lg shrink-0">
                <Image
                  src="/images/robot-race.jpeg"
                  alt="AI robots racing to represent different LLM models competing"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
                <h2 className="text-2xl font-semibold mb-3 text-primary group-hover:text-sky-400">
                  Choosing the Best LLM Model for Development
                </h2>
                <p className="text-muted-foreground">
                  A comprehensive comparison of leading LLM models to help you select the right one for your development workflow.
                  Learn about the strengths and limitations of GPT-4 Turbo, Claude 3 Opus, and more.
                </p>
              </div>
            </article>
          </Link>

          <Link 
            href="/articles/devin-best-practices"
            className="block group"
          >
            <article className="flex flex-col md:flex-row gap-8 p-6 border rounded-lg bg-card hover:border-primary transition-colors">
              <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-lg shrink-0">
                <Image
                  src="/images/Designer.jpeg"
                  alt="AI developer working with human"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
                <h2 className="text-2xl font-semibold mb-3 text-primary group-hover:text-sky-400">
                  Best Practices for Working with Devin AI
                </h2>
                <p className="text-muted-foreground">
                  Learn how to effectively work with Devin AI using the DocDD.ai approach, proper task management, and testing strategies. 
                  Discover best practices for breaking down work, setting up tests, and managing pull requests.
                </p>
              </div>
            </article>
          </Link>
        </div>
      </main>
      <SimpleFooter />
    </div>
  )
}

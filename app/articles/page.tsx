import { Metadata } from 'next'
import Header from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import ContentList from '@/components/shared/ContentList'
import ContentCard from '@/components/shared/ContentCard'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Articles',
  description: 'Articles about software development, AI, and building better documentation.',
})

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="flex-1 overflow-x-hidden container mx-auto px-4 py-24">
        <ContentList
          title="Articles"
          description="Explore insights and best practices about document-driven development, software architecture, and building better software."
        >
          <ContentCard
            href="/articles/best-llm-for-development"
            imageSrc="/images/robot-race.jpeg"
            imageAlt="AI robots racing to represent different LLM models competing"
            date="January 8, 2024"
            title="Choosing the Best LLM Model for Development"
            description="A comprehensive comparison of leading LLM models to help you select the right one for your development workflow. Learn about the strengths and limitations of GPT-4 Turbo, Claude 3 Opus, and more."
          />

          <ContentCard
            href="/articles/devin-best-practices"
            imageSrc="/images/Designer.jpeg"
            imageAlt="AI developer working with human"
            date="January 8, 2024"
            title="Best Practices for Working with Devin AI"
            description="Learn how to effectively work with Devin AI using the DocDD.ai approach, proper task management, and testing strategies. Discover best practices for breaking down work, setting up tests, and managing pull requests."
          />
        </ContentList>
      </main>
      <SimpleFooter />
    </div>
  )
}

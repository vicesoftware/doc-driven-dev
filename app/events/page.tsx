import { Metadata } from 'next'
import Header from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import ContentList from '@/components/shared/ContentList'
import ContentCard from '@/components/shared/ContentCard'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Events',
  description: 'Join us for workshops, hackathons, and other events focused on document-driven development and AI.',
  type: 'event'
})

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="flex-1 overflow-x-hidden container mx-auto px-4 py-24">
        <ContentList
          title="Events"
          description="Join us for workshops, hackathons, and other events focused on document-driven development and AI."
        >
          <ContentCard
            href="/events/ai-hackathon-2025"
            imageSrc="/images/ai-hackathon.jpeg"
            imageAlt="AI Hackathon 2025 event banner"
            date="February 15-16, 2025"
            title="AI Hackathon 2025: Building the Future"
            description="Join us for a weekend of innovation and coding as we explore the latest in AI technology and build groundbreaking applications."
          />

          <ContentCard
            href="/events/doc-driven-dev-workshop"
            imageSrc="/images/doc-workshop.jpeg"
            imageAlt="Document-Driven Development Workshop banner"
            date="March 1, 2025"
            title="Document-Driven Development Workshop"
            description="Learn how to improve your development workflow with document-driven development practices in this hands-on workshop."
          />
        </ContentList>
      </main>
      <SimpleFooter />
    </div>
  )
}

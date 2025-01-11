import { Metadata } from 'next'
import Header from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import ContentList from '@/components/shared/ContentList'
import EventCard from '@/components/shared/EventCard'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { generateMetadata } from '@/lib/metadata'
import { sortEventsByDate } from '@/lib/date-utils'

const events = [
  {
    title: 'Context is King: Boosting Developer Productivity with DocDD',
    description: 'Join Ryan Vice for an in-depth exploration of Documentation Driven Development (DocDD) and how it revolutionizes AI-assisted development by prioritizing context.',
    imageSrc: '/images/ai-hackathon.jpeg',
    imageAlt: 'Context is King: Boosting Developer Productivity with DocDD - Event Banner',
    href: '/events/12th-cto-colloquium-park-city-ut',
    startDate: '2025-02-15',
    endDate: '2025-02-16',
    location: 'Tech Hub Downtown, Austin TX'
  }
].sort(sortEventsByDate)

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
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Events' }
          ]}
        />
        <ContentList
          title="Upcoming Events"
          description="Join us at our upcoming events and workshops to learn more about document-driven development and connect with other developers."
        >
          {events.map((event, index) => (
            <EventCard
              key={index}
              href={event.href}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
              startDate={event.startDate}
              endDate={event.endDate}
              title={event.title}
              description={event.description}
              location={event.location}
            />
          ))}
        </ContentList>
      </main>
      <SimpleFooter />
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EventCard from '@/components/shared/EventCard'
import { sortEventsByDate } from '@/lib/date-utils'

// Events are sorted by date
const events = [
  {
    title: 'AI Hackathon 2025',
    description: 'Join us for an exciting weekend of innovation, coding, and collaboration. Create cutting-edge applications using the latest AI technologies.',
    imageSrc: '/images/ai-hackathon.jpeg',
    imageAlt: 'AI Hackathon 2025 event banner',
    href: '/events/ai-hackathon-2025',
    startDate: '2025-02-15',
    endDate: '2025-02-16',
    location: 'Tech Hub Downtown, Austin TX'
  },
  {
    title: 'Document-Driven Development Workshop',
    description: 'Learn how to improve your development workflow, reduce technical debt, and create better software through effective documentation.',
    imageSrc: '/images/doc-workshop.jpeg',
    imageAlt: 'Document-Driven Development Workshop banner',
    href: '/events/doc-driven-dev-workshop',
    startDate: '2025-03-01',
    location: 'Virtual Event (Zoom)'
  }
].sort(sortEventsByDate)

export default function UpcomingEvents() {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Upcoming Events</h2>
          <Link 
            href="/events" 
            className="flex items-center gap-2 text-primary hover:text-sky-400 transition-colors"
          >
            View all events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-8">
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
        </div>
      </div>
    </section>
  )
}

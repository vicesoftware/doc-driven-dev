import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EventCard from '@/components/shared/EventCard'
import { sortEventsByDate } from '@/lib/date-utils'

// Events are sorted by date
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

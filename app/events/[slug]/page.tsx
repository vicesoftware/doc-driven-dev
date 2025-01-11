import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { formatEventDate } from '@/lib/date-utils'

// This would typically come from a database or CMS
const events = {
  'ai-hackathon-2025': {
    title: 'AI Hackathon 2025',
    description: 'Join us for an exciting weekend of innovation, coding, and collaboration. Create cutting-edge applications using the latest AI technologies.',
    longDescription: `
      Join us for an exciting weekend of innovation, coding, and collaboration at our AI Hackathon 2025! 
      This two-day event brings together developers, designers, and AI enthusiasts to create cutting-edge 
      applications using the latest AI technologies.

      What to expect:
      - Expert speakers from leading AI companies
      - Hands-on workshops on AI implementation
      - Networking opportunities with industry professionals
      - Prizes for the most innovative solutions
      
      Whether you're an AI expert or just getting started, this hackathon is the perfect opportunity to 
      learn, build, and connect with others in the field.
    `,
    imageSrc: '/images/ai-hackathon.jpeg',
    imageAlt: 'AI Hackathon 2025 event banner',
    startDate: '2025-02-15',
    endDate: '2025-02-16',
    location: 'Tech Hub Downtown, Austin TX',
    registrationUrl: 'https://www.vicesoftware.com/ryan'
  },
  'doc-driven-dev-workshop': {
    title: 'Document-Driven Development Workshop',
    description: 'Learn how to improve your development workflow, reduce technical debt, and create better software through effective documentation.',
    longDescription: `
      Join us for a comprehensive workshop on Document-Driven Development! This virtual event will teach 
      you how to improve your development workflow, reduce technical debt, and create better software 
      through effective documentation.

      What you'll learn:
      - Core principles of document-driven development
      - Best practices for technical documentation
      - Tools and frameworks for documentation management
      - Real-world case studies and examples
      
      This workshop is perfect for developers, technical writers, and team leads who want to improve 
      their documentation practices and development workflows.
    `,
    imageSrc: '/images/doc-workshop.jpeg',
    imageAlt: 'Document-Driven Development Workshop banner',
    startDate: '2025-03-01',
    location: 'Virtual Event (Zoom)',
    registrationUrl: 'https://www.vicesoftware.com/ryan'
  }
}

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = events[params.slug as keyof typeof events]
  
  if (!event) {
    notFound()
  }

  const formattedDate = formatEventDate(event.startDate, event.endDate)

  return (
    <div className="py-24">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: event.title }
        ]}
      />
      <div className="relative w-full aspect-[21/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src={event.imageSrc}
          alt={event.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">{formattedDate}</div>
          <h1 className="text-4xl font-bold text-primary">{event.title}</h1>
          <div className="text-sm text-sky-400">{event.location}</div>
        </div>
        <div className="prose prose-invert max-w-none">
          {event.longDescription.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
        <div className="pt-8">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  )
}

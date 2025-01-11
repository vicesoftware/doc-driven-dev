import Link from 'next/link'
import Image from 'next/image'

export interface ContentCardProps {
  href: string
  imageSrc: string
  imageAlt: string
  date: string
  title: string
  description: string
}

export default function ContentCard({
  href,
  imageSrc,
  imageAlt,
  date,
  title,
  description,
}: ContentCardProps) {
  return (
    <Link 
      href={href}
      className="block group"
    >
      <article className="flex flex-col md:flex-row gap-8 p-6 border rounded-lg bg-card hover:border-primary transition-colors">
        <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-lg shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-sm text-muted-foreground mb-3">{date}</div>
          <h2 className="text-2xl font-semibold mb-3 text-primary group-hover:text-sky-400">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </article>
    </Link>
  )
}

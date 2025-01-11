'use client'

import MDXContent from '@/components/MDXContent'
import Event from './event.mdx'
import Image from 'next/image'

export default function CTOColloquiumPage() {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16 overflow-x-hidden">
      <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
        <Image
          src="/images/ai-hackathon.jpeg"
          alt="Context is King: Boosting Developer Productivity with DocDD - Event Banner"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 85vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
      
      <header className="mb-12">
        <div className="text-sm text-muted-foreground mb-3">February 15-16, 2025</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Context is King: Boosting Developer Productivity with DocDD
        </h1>
        <div className="text-xl text-muted-foreground">
          Join Ryan Vice for an in-depth exploration of Documentation Driven Development (DocDD) and how it revolutionizes AI-assisted development by prioritizing context.
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXContent>
          <Event />
        </MDXContent>
      </div>
    </article>
  )
}

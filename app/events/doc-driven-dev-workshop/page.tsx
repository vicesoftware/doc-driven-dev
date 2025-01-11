'use client'

import MDXContent from '@/components/MDXContent'
import Event from './event.mdx'
import Image from 'next/image'

export default function DocDrivenDevWorkshopPage() {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16 overflow-x-hidden">
      <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
        <Image
          src="/images/doc-workshop.jpeg"
          alt="Document-Driven Development Workshop banner"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 85vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
      
      <header className="mb-12">
        <div className="text-sm text-muted-foreground mb-3">March 1, 2025</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Document-Driven Development Workshop
        </h1>
        <div className="text-xl text-muted-foreground">
          Learn how to improve your development workflow with document-driven development practices in this hands-on workshop.
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

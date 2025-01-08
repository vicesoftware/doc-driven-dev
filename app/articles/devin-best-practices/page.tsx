'use client'

import type { ReactElement } from 'react'
import MDXContent from '@/components/MDXContent'
import Article from './article.mdx'
import Image from 'next/image'

export default function DevinBestPracticesPage(): ReactElement {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16 overflow-x-hidden">
      <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
        <Image
          src="/images/Designer.jpeg"
          alt="AI developer working with human"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 85vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
      
      <header className="mb-12">
        <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Devin Best Practices
        </h1>
        <div className="text-xl text-muted-foreground">
          Learn how to effectively use Devin, the AI software engineer, with these essential best practices and tips
        </div>
      </header>

      <div className="prose prose-invert max-w-none [&_.mermaid]:!max-w-full [&_.mermaid]:overflow-x-auto [&_.mermaid]:pb-4">
        <MDXContent>
          <Article />
        </MDXContent>
      </div>
    </article>
  )
}

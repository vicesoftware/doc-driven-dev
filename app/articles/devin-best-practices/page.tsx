'use client'

import type { ReactElement } from 'react'
import MDXContent from '@/components/MDXContent'
import Article from './article.mdx'

export default function DevinBestPracticesPage(): ReactElement {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16">
      <header className="mb-12">
        <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Best Practices for Working with Devin AI
        </h1>
        <div className="text-xl text-muted-foreground">
          Learn how to effectively work with Devin AI using the DocDD.ai approach, proper task management, and testing strategies
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXContent>
          <Article />
        </MDXContent>
      </div>
    </article>
  )
}

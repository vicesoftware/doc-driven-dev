'use client'

import MDXContent from '@/components/MDXContent'
import Article from './article.mdx'
import Image from 'next/image'

export default function BestLLMForDevelopmentPage() {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16 overflow-x-hidden">
      <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
        <Image
          src="/images/robot-race.jpeg"
          alt="AI robots racing to represent different LLM models competing"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 85vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
      
      <header className="mb-12">
        <div className="text-sm text-muted-foreground mb-3">January 8, 2024</div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Choosing the Best LLM Model for Development
        </h1>
        <div className="text-xl text-muted-foreground">
          A comprehensive comparison of leading LLM models to help you select the right one for your development workflow
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

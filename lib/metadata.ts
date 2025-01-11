import { Metadata } from 'next'

interface GenerateMetadataOptions {
  title: string
  description: string
  type?: 'article' | 'event'
  path?: string
}

export function generateMetadata({
  title,
  description,
  type = 'article',
  path = '',
}: GenerateMetadataOptions): Metadata {
  const baseTitle = 'Doc Driven Dev'
  const fullTitle = path ? `${title} | ${baseTitle}` : `${type === 'article' ? 'Articles' : 'Events'} | ${baseTitle}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: type === 'article' ? 'article' : 'website',
      url: `https://docdd.ai${path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

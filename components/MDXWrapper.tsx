'use client'

import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold mt-12 mb-6" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-6 text-lg" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-lg" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold" {...props} />
  ),
}

interface MDXWrapperProps {
  children: React.ReactNode
}

export default function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

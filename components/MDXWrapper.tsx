'use client'

import { MDXProvider } from '@mdx-js/react'
import type { ReactNode, HTMLAttributes } from 'react'

type MDXComponentProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}

const components = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-4xl font-bold mb-8" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-semibold mt-12 mb-6" {...props}>{children}</h2>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="mb-6 text-lg" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="text-lg" {...props}>{children}</li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props}>{children}</blockquote>
  ),
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong className="font-semibold" {...props}>{children}</strong>
  ),
}

interface MDXWrapperProps {
  children: ReactNode
}

export default function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

'use client'

import { MDXProvider } from '@mdx-js/react'
import type { ComponentPropsWithoutRef, DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react'
import MermaidDiagram from './MermaidDiagram'

type HTMLProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

interface MDXCode extends ReactElement {
  props: {
    className?: string
    children?: string
  }
}

const components = {
  h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mb-8" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-12 mb-6" {...props}>{children}</h2>
  ),
  p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-6 text-lg" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: HTMLProps<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: HTMLProps<HTMLLIElement>) => (
    <li className="text-lg" {...props}>{children}</li>
  ),
  blockquote: ({ children, ...props }: HTMLProps<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props}>{children}</blockquote>
  ),
  strong: ({ children, ...props }: HTMLProps<HTMLElement>) => (
    <strong className="font-semibold" {...props}>{children}</strong>
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => {
    const codeElement = children as MDXCode
    if (
      codeElement?.props?.className === 'language-mermaid' ||
      codeElement?.props?.children?.includes('graph') ||
      codeElement?.props?.children?.includes('sequenceDiagram')
    ) {
      return <MermaidDiagram chart={codeElement.props.children || ''} />
    }
    return <pre {...props}>{children}</pre>
  },
}

interface MDXContentProps {
  children: ReactNode
}

export default function MDXContent({ children }: MDXContentProps) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}

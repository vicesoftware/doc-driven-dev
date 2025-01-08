import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Practices for Working with Devin AI',
  description: 'Learn how to effectively work with Devin AI using the DocDD.ai approach, proper task management, and testing strategies',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16">
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </article>
  )
}

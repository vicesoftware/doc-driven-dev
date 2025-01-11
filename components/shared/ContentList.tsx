import { ReactNode } from 'react'

interface ContentListProps {
  title: string
  description?: string
  children: ReactNode
}

export default function ContentList({ title, description, children }: ContentListProps) {
  return (
    <>
      <div className="pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-8 pb-16">
        {children}
      </div>
    </>
  )
}

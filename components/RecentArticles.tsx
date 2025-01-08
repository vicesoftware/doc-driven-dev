import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Choosing the Best LLM Model for Development',
    description: 'A comprehensive comparison of leading LLM models to help you select the right one for your development workflow. Learn about the strengths and limitations of GPT-4 Turbo, Claude 3 Opus, and more.',
    image: '/images/robot-race.jpeg',
    link: '/articles/best-llm-for-development',
    date: 'January 8, 2024'
  },
  {
    title: 'Devin Best Practices',
    description: 'Learn how to effectively use Devin, the AI software engineer, with these essential best practices and tips. Discover how to maximize your productivity and build better software with AI assistance.',
    image: '/images/Designer.jpeg',
    link: '/articles/devin-best-practices',
    date: 'January 8, 2024'
  }
]

export default function RecentArticles() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Recent Articles</h2>
          <Link 
            href="/articles" 
            className="flex items-center gap-2 text-primary hover:text-sky-400 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={article.link}
              className="block group"
            >
              <article className="flex flex-col md:flex-row gap-8 p-6 border rounded-lg bg-card hover:border-primary transition-colors">
                <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-lg shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground mb-3">{article.date}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary group-hover:text-sky-400">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {article.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

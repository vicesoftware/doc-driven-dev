import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Document Driven Development</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Process
          </Link>
          <Link href="/articles" className="transition-colors hover:text-primary">
            Articles
          </Link>
          <Link href="https://github.com/vicesoftware/doc-driven-dev" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Github className="mr-2 h-4 w-4" />
              <span>Star on GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.vicesoftware.com/ryan" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

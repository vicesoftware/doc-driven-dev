import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Document Driven Development</h3>
            <p className="text-sm text-muted-foreground">
              Revolutionizing software development with AI-driven documentation and code generation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#process" className="hover:text-primary transition-colors">Process</a>
              </li>
              <li>
                <a href="#steps" className="hover:text-primary transition-colors">Steps</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="https://vicesoftware.com" className="hover:text-primary transition-colors">Vice Software</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/vicesoftware" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://x.com/RyanVice1" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/ryanvice/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Document Driven Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


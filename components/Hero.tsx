import { Button } from "@/components/ui/button"
import { AnimatedText } from "./AnimatedText"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-background pt-4">
      <div className="container mx-auto px-4 py-8">
        <AnimatedText />
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-primary">
            Document Driven Development
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            A revolutionary AI-driven approach to software development that puts documentation at the forefront of the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


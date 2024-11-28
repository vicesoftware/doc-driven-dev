import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    title: "Document",
    description: "Create comprehensive documentation for features and architecture.",
  },
  {
    title: "Generate",
    description: "Use AI to generate code based on the documentation.",
  },
  {
    title: "Test",
    description: "Generate and run tests to verify the implementation.",
  },
  {
    title: "Refactor",
    description: "Improve the code structure and performance.",
  },
  {
    title: "Update",
    description: "Revise the documentation to reflect the current best practices.",
  },
]

export default function ProcessOverview() {
  return (
    <section id="process" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Simplify Your Development</h2>
          <p className="text-muted-foreground">
            From documentation to deployment, DDD&apos;s AI-driven approach supports a wide range of
            development workflows and use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background border-primary hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="text-6xl font-bold text-primary/10 mb-4">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

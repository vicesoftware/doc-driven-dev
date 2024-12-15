import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const detailedSteps = [
  {
    title: "Document the approach using AI",
    content: [
      {
        heading: "Brownfield Development",
        items: [
          "Document existing features and functionality",
          "Map out current architecture",
          "Identify areas for improvement"
        ]
      },
      {
        heading: "Documentation Process",
        items: [
          "Use AI to analyze existing codebase",
          "Generate comprehensive documentation",
          "Review and refine documentation accuracy"
        ]
      }
    ]
  },
  {
    title: "Generate code based on documentation",
    content: [
      {
        heading: "Code Generation",
        items: [
          "AI analyzes documentation requirements",
          "Generates initial code implementation",
          "Provides multiple approach options"
        ]
      },
      {
        heading: "Quality Assessment",
        items: [
          "Review generated code quality",
          "Verify implementation matches documentation",
          "Choose between AI-generated or custom code"
        ]
      }
    ]
  },
  {
    title: "Generate and verify tests",
    content: [
      {
        heading: "Test Generation",
        items: [
          "Create comprehensive test suites",
          "Cover edge cases and error scenarios",
          "Generate integration tests"
        ]
      },
      {
        heading: "Verification",
        items: [
          "Ensure tests fail initially",
          "Verify test coverage",
          "Validate test reliability"
        ]
      }
    ]
  },
  {
    title: "Refactor and optimize",
    content: [
      {
        heading: "Code Improvement",
        items: [
          "Identify optimization opportunities",
          "Implement performance improvements",
          "Enhance code readability"
        ]
      },
      {
        heading: "Quality Assurance",
        items: [
          "Run automated code analysis",
          "Verify refactoring results",
          "Maintain test coverage"
        ]
      }
    ]
  },
  {
    title: "Update documentation",
    content: [
      {
        heading: "Documentation Refinement",
        items: [
          "Update technical documentation",
          "Document new best practices",
          "Maintain version history"
        ]
      },
      {
        heading: "Knowledge Sharing",
        items: [
          "Share insights with team",
          "Document lessons learned",
          "Update development guidelines"
        ]
      }
    ]
  }
]

export default function DetailedSteps() {
  return (
    <section id="steps" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">Detailed Process</h2>
        <div className="grid gap-4">
          {detailedSteps.map((step, index) => (
            <Accordion key={index} type="single" collapsible className="bg-secondary rounded-lg px-6">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-semibold py-6 text-primary hover:text-primary/80">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-6">
                    {step.content.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-semibold mb-2 text-primary">
                          {section.heading}
                        </h4>
                        <ul className="grid gap-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground flex items-start">
                              <span className="mr-2 text-primary">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutCreator() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">About the Creator</h2>
          <Card className="bg-background border-primary overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image 
                    src="/images/about-ryan-vice.jpeg"
                    alt="Ryan Vice speaking at a tech conference"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2 text-primary">Ryan Vice</h3>
                  <p className="text-accent-foreground mb-6">CEO at Vice Software</p>
                  <p className="text-muted-foreground mb-6">
                  Ryan Vice, CEO of Vice Software, leads a company specializing in affordable custom software services. The firm employs 
                  a hybrid development model with distributed teams across various time zones, allowing for limited daily collaboration. 
                  Vice Software often embeds its teams within client organizations, with Ryan customizing processes for each project. 
                  This approach has given him deep insights into optimizing workflows in challenging situations. Ryan believes that 
                  harnessing AI's productivity potential in complex projects hinges on effective processes. He has developed a method 
                  for using AI in code generation, integrating Domain-Driven Design (DDD) to enhance its practical application.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published author and frequent speaker at tech conferences, Ryan shares his expertise on AI-driven development practices
                    and innovative software methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


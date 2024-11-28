import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessOverview from '@/components/ProcessOverview'
import DetailedSteps from '@/components/DetailedSteps'
import AboutCreator from '@/components/AboutCreator'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-orbitron">
      <Header />
      <main className="pt-8">
        <Hero />
        <ProcessOverview />
        <DetailedSteps />
        <AboutCreator />
      </main>
      <Footer />
    </div>
  )
}


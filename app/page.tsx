import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessOverview from '@/components/ProcessOverview'
import DetailedSteps from '@/components/DetailedSteps'
import UpcomingEvents from '@/components/UpcomingEvents'
import RecentArticles from '@/components/RecentArticles'
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
        <UpcomingEvents />
        <RecentArticles />
        <AboutCreator />
      </main>
      <Footer />
    </div>
  )
}

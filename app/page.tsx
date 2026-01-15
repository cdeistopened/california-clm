import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Pillars from '@/components/Pillars'
import Events from '@/components/Events'
import Signup from '@/components/Signup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Map />
      <Pillars />
      <Events />
      <Signup />
      <Footer />
    </main>
  )
}

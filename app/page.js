import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import HowItWorks from '../components/home/HowItWorks'
import Stats from '../components/home/Stats'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <Stats />
    </div>
  )
}

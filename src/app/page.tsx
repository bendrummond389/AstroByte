import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PricesSection from '@/components/PricesSection'


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <a href="#About" />
      <AboutSection />
      <a href="#Pricing" />
      <PricesSection />
      <a href="#Conact" />
    </main>
  )
}

import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProductsSection from '../components/sections/ProductsSection'
import StatsSection from '../components/sections/StatsSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProductsSection />
      <ContactSection />
    </>
  )
}

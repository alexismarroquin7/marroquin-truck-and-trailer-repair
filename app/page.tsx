import { AboutSection, BillingSection, BusinessHoursSection, ContactSection, HeroSection, ServiceAreaSection, ServicesSection } from "@/components"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <ContactSection/>
      <ServiceAreaSection/>
      <BusinessHoursSection/>
      <BillingSection/>
      <AboutSection/>
    </main>
  )
}

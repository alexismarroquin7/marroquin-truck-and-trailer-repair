import { AboutSection, BillingSection, BusinessHoursSection, ContactSection, HeroSection, ServiceAreaSection, ServicesSection } from "@/components"

export default function Home() {
  return (
    <main
      className="main"
    >
      <div
        className="main__content"
      >
        <HeroSection/>
        <ServicesSection/>
        <ContactSection/>
        <ServiceAreaSection/>
        <BusinessHoursSection/>
        <BillingSection/>
        <AboutSection/>
      </div>
    </main>
  )
}

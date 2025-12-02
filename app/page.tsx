import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Features } from "@/components/features"
import { Timeline } from "@/components/timeline"
import { SecuritySection } from "@/components/security-section"
import { ComparisonTable } from "@/components/comparison-table"
import { ChromeStoreCard } from "@/components/chrome-store-card"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CookiePopup } from "@/components/cookie-popup"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dot-grid">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Timeline />
      <SecuritySection />
      <ComparisonTable />
      <ChromeStoreCard />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <CookiePopup />
    </main>
  )
}

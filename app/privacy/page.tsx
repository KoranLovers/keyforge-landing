import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Privacy Policy - Keyforge",
  description: "Keyforge Privacy Policy - Learn how we protect your data",
}

export default function PrivacyPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-balance text-foreground">Privacy Policy</h1>

            <p className="text-lg text-muted-foreground mb-6">Last updated: November 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Keyforge ("we", "us", "our", or "Company") operates the Keyforge browser extension and website. This page
                informs you of our policies regarding the collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Collection</h2>
              <p className="text-muted-foreground mb-4">
                Keyforge is designed with privacy at its core. We collect minimal data to provide our password management service:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Browser extension version and installation date</li>
                <li>Anonymized usage statistics</li>
                <li>Error logs for service improvement</li>
                <li>No passwords or personal information is collected or stored on our servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Data</h2>
              <p className="text-muted-foreground mb-4">Keyforge uses the collected data for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To improve and maintain our Service</li>
                <li>To understand and analyze how you use the Service</li>
                <li>To provide customer support</li>
                <li>To gather feedback to improve user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to request access to, correction of, or deletion of your personal data. To exercise
                these rights, please contact us at privacy@keyforgepass.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-muted-foreground mt-2">Email: privacy@keyforgepass.com</p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

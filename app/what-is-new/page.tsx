import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "What's New - Keyforge",
  description: "Latest updates and features for Keyforge password manager",
}

export default function WhatsNewPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-12 text-balance text-foreground">What's New</h1>

          <div className="space-y-8">
            <article className="border-b border-border pb-8">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold text-foreground">Keyforge 2.1 Release</h2>
                <span className="text-sm text-muted-foreground">January 2025</span>
              </div>
              <p className="text-muted-foreground mb-4">
                We're excited to announce Keyforge 2.1, bringing biometric unlock support and enhanced security features.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Biometric unlock support (fingerprint/Face ID)</li>
                <li>Improved password strength analyzer</li>
                <li>Enhanced cross-device sync performance</li>
                <li>New secure notes feature</li>
              </ul>
            </article>

            <article className="border-b border-border pb-8">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold text-foreground">Keyforge 2.0 Release</h2>
                <span className="text-sm text-muted-foreground">December 2024</span>
              </div>
              <p className="text-muted-foreground mb-4">Major update focused on dark mode and user experience improvements.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Beautiful dark mode support</li>
                <li>Improved autofill accuracy</li>
                <li>Faster password generation</li>
                <li>Enhanced UI/UX across all screens</li>
              </ul>
            </article>

            <article className="border-b border-border pb-8">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold text-foreground">Keyforge 1.9 Release</h2>
                <span className="text-sm text-muted-foreground">November 2024</span>
              </div>
              <p className="text-muted-foreground mb-4">Import feature and breach alerts added.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Import from LastPass, 1Password, Dashlane, and more</li>
                <li>Data breach alerts and notifications</li>
                <li>Improved password sharing</li>
                <li>Better browser compatibility</li>
              </ul>
            </article>

            <article className="pb-8">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold text-foreground">Keyforge Launch</h2>
                <span className="text-sm text-muted-foreground">September 2024</span>
              </div>
              <p className="text-muted-foreground">
                Keyforge officially launched with core password management capabilities, end-to-end encryption, and a
                privacy-first approach. Join thousands of users enjoying secure password management.
              </p>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

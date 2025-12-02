import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Thanks for Installing - Keyforge",
  description: "Thank you for installing Keyforge password manager",
}

export default function ThanksPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-balance text-foreground">Thank You for Installing Keyforge!</h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                You're now protected. Your passwords are secured with end-to-end encryption, and your browsing experience is
                getting better every second.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Here's What You Can Do Now</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Create Your Master Password</h3>
                    <p className="text-muted-foreground text-sm">
                      Set up a strong master password to secure all your credentials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Import Your Passwords</h3>
                    <p className="text-muted-foreground text-sm">Click the Keyforge icon to import passwords from other managers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Start Browsing Securely</h3>
                    <p className="text-muted-foreground text-sm">Keyforge will auto-fill your credentials on supported websites.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground mb-6">Need help getting started?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-primary hover:bg-primary/90">View Quick Start Guide</Button>
                <Button variant="outline">Explore Settings</Button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Have feedback? We'd love to hear from you. Visit{" "}
                <a href="mailto:hello@keyforgepass.com" className="text-primary hover:underline">
                  hello@keyforgepass.com
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

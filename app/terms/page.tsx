import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Terms of Service - Keyforge",
  description: "Keyforge Terms of Service",
}

export default function TermsPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-balance text-foreground">Terms of Service</h1>

            <p className="text-lg text-muted-foreground mb-6">Last updated: November 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Keyforge, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. License Grant</h2>
              <p className="text-muted-foreground mb-4">
                Keyforge grants you a non-exclusive, non-transferable, revocable license to use the Service in accordance
                with these Terms. This license does not include any right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Resell or rent the Service or access to the Service</li>
                <li>Modify, adapt, translate, prepare derivative works from the Service</li>
                <li>Remove or obscure any proprietary notices on the Service</li>
                <li>Transfer your license to another party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) from
                Keyforge for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modify the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Keyforge are provided on an 'as is' basis. Keyforge makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Keyforge or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Keyforge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Modifications</h2>
              <p className="text-muted-foreground">
                Keyforge may revise these terms of service for the Service at any time without notice. By using this
                Service, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at terms@keyforgepass.com.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

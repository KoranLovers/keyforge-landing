"use client"

import { motion } from "framer-motion"
import { ArrowRight, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to ship securely?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of developers who trust Keyforge for their credential management. Free forever, open
              source, and built for the terminal.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Install Extension
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
              >
                <Terminal className="mr-2 w-4 h-4" />
                View CLI Docs
              </Button>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

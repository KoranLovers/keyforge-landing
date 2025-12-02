"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Vercel", logo: "▲" },
  { name: "Stripe", logo: "S" },
  { name: "GitHub", logo: "◐" },
  { name: "Linear", logo: "◇" },
  { name: "Raycast", logo: "⌘" },
  { name: "Figma", logo: "F" },
]

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by developers at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

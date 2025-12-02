"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

const features = [
  { name: "Open Source", keyforge: true, lastpass: false, onepass: false, bitwarden: true },
  { name: "CLI Support", keyforge: true, lastpass: false, onepass: "partial", bitwarden: true },
  { name: "Zero Knowledge", keyforge: true, lastpass: true, onepass: true, bitwarden: true },
  { name: "Self-hosted Option", keyforge: true, lastpass: false, onepass: false, bitwarden: true },
  { name: "Git Integration", keyforge: true, lastpass: false, onepass: false, bitwarden: false },
  { name: "SSH Key Management", keyforge: true, lastpass: false, onepass: true, bitwarden: false },
  { name: "Free Tier", keyforge: "unlimited", lastpass: "limited", onepass: "trial", bitwarden: "unlimited" },
]

const competitors = [
  { key: "keyforge", name: "Keyforge", highlight: true },
  { key: "lastpass", name: "LastPass", highlight: false },
  { key: "onepass", name: "1Password", highlight: false },
  { key: "bitwarden", name: "Bitwarden", highlight: false },
]

function getValue(value: boolean | string) {
  if (value === true) return <Check className="w-5 h-5 text-primary" />
  if (value === false) return <X className="w-5 h-5 text-muted-foreground/50" />
  if (value === "partial") return <Minus className="w-5 h-5 text-muted-foreground" />
  return <span className="text-sm text-foreground">{value}</span>
}

export function ComparisonTable() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How we compare</h2>
          <p className="text-muted-foreground">The features developers actually need</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border overflow-hidden bg-card"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.key}
                      className={`py-4 px-6 text-sm font-medium text-center ${
                        c.highlight ? "text-primary bg-primary/5" : "text-muted-foreground"
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={feature.name} className={i !== features.length - 1 ? "border-b border-border" : ""}>
                    <td className="py-4 px-6 text-sm text-foreground">{feature.name}</td>
                    {competitors.map((c) => (
                      <td key={c.key} className={`py-4 px-6 text-center ${c.highlight ? "bg-primary/5" : ""}`}>
                        {getValue(feature[c.key as keyof typeof feature] as boolean | string)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

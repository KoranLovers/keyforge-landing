"use client"

import { motion } from "framer-motion"
import { Download, Key, Shield, Rocket } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Install Extension",
    description: "Add Keyforge to your browser in one click. Available for Chrome, Firefox, and Safari.",
  },
  {
    icon: Key,
    title: "Create Master Key",
    description: "Generate a secure master password. This is the only password you'll need to remember.",
  },
  {
    icon: Shield,
    title: "Import Credentials",
    description: "Import from other password managers or start fresh. All data is encrypted locally.",
  },
  {
    icon: Rocket,
    title: "Start Shipping",
    description: "Autofill credentials instantly. Use CLI for terminal workflows. Ship faster, stay secure.",
  },
]

export function Timeline() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get started in minutes</h2>
          <p className="text-muted-foreground">From install to autofill in under 5 minutes</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        Step {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

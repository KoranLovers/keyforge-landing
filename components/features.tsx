"use client"

import { motion } from "framer-motion"
import { Key, Chrome, Shield, Zap, Lock, Fingerprint, Cloud, GitBranch, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Chrome,
    title: "Get in Chrome Web Store",
    description: "Install the Keyforge extension directly from Chrome Web Store with one click",
    size: "large",
  },
  {
    icon: Shield,
    title: "Zero Knowledge",
    description: "Your data never leaves your device unencrypted",
    size: "small",
  },
  {
    icon: Zap,
    title: "Fast Autofill",
    description: "Instant credential matching",
    size: "small",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all your credentials",
    size: "medium",
  },
  {
    icon: Fingerprint,
    title: "Biometric Unlock",
    description: "Use TouchID or FaceID for quick access",
    size: "medium",
  },
  {
    icon: Cloud,
    title: "Sync Anywhere",
    description: "Encrypted sync across all devices",
    size: "small",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Version control for your vault",
    size: "small",
  },
  {
    icon: Key,
    title: "SSH Key Management",
    description: "Securely store and manage SSH keys",
    size: "large",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for the way you work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with developers in mind. No bloat, just the tools you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isLarge = feature.size === "large"
            const isMedium = feature.size === "medium"
            const isChromeStore = feature.title === "Get in Chrome Web Store"

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`
                  p-6 rounded-xl bg-card border border-border hover:border-primary/50 
                  transition-all duration-300 group cursor-pointer
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${isMedium ? "lg:col-span-2" : ""}
                `}
              >
                <div
                  className={`
                  w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                  mb-4 group-hover:bg-primary/20 transition-colors
                  ${isLarge ? "w-16 h-16" : ""}
                `}
                >
                  <Icon className={`text-primary ${isLarge ? "w-8 h-8" : "w-6 h-6"}`} />
                </div>
                <h3 className={`font-semibold text-foreground mb-2 ${isLarge ? "text-xl" : ""}`}>{feature.title}</h3>
                <p className={`text-muted-foreground ${isLarge ? "text-base" : "text-sm"}`}>{feature.description}</p>

                {isLarge && (
                  <div className="mt-6">
                    {isChromeStore ? (
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                        <Link href="https://chrome.google.com/webstore" target="_blank">
                          Add to Chrome
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
                      <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                        <code className="text-sm font-mono text-primary">$ keyforge ssh add ~/.ssh/id_ed25519</code>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Zero-knowledge encryption</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Passwords for <span className="text-primary">developers</span> who ship fast
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Open source password manager built for the terminal-first workflow. CLI support, browser extension, and
              zero-knowledge architecture.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="https://chrome.google.com/webstore" target="_blank">
                  Install for Chrome
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
                asChild
              >
                <Link href="#whats-new">
                  <Sparkles className="mr-2 w-4 h-4" />
                  What's new
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>12k+ GitHub stars</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>MIT License</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative perspective-1000">
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -3, 0, 3, 0],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative"
              >
                {/* Browser mockup */}
                <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#F85149]" />
                      <div className="w-3 h-3 rounded-full bg-[#F0883E]" />
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground flex items-center gap-2">
                        <Shield className="w-3 h-3 text-primary" />
                        github.com
                      </div>
                    </div>
                  </div>

                  {/* Extension popup */}
                  <div className="p-6 bg-card">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">K</span>
                        </div>
                        <span className="font-medium text-foreground">Keyforge</span>
                      </div>
                      <span className="text-xs text-primary">Unlocked</span>
                    </div>

                    <div className="space-y-3">
                      {["GitHub", "AWS Console", "Vercel"].map((site) => (
                        <div
                          key={site}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-xs font-mono text-muted-foreground">
                              {site[0]}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{site}</div>
                              <div className="text-xs text-muted-foreground">dev@keyforgepass.com</div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>{"⌘K to search"}</span>
                      <span>3 items</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl -z-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

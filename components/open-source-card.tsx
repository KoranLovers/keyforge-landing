"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpenSourceCard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#161B22] border border-border flex items-center justify-center">
                  <Github className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">keyforge</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-foreground font-semibold">keyforge</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Open source password manager for developers</p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Star className="w-4 h-4 mr-2" />
                Star on GitHub
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-[#F0883E]" />
                <span className="font-semibold text-foreground">12,847</span>
                <span className="text-muted-foreground">stars</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GitFork className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-foreground">1,203</span>
                <span className="text-muted-foreground">forks</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-foreground">342</span>
                <span className="text-muted-foreground">watching</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-[#3178C6]" />
                <span className="text-foreground">TypeScript</span>
              </div>
              <div className="text-sm text-muted-foreground">MIT License</div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
              <code className="text-sm font-mono text-muted-foreground">
                <span className="text-primary">$</span> git clone https://github.com/keyforge/keyforge.git
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

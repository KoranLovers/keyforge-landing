"use client"

import { motion } from "framer-motion"
import { Chrome, Star, Users, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ChromeStoreCard() {
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC05] p-[2px]">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <Chrome className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-semibold text-lg">Keyforge</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Password Manager for Developers</p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="https://chrome.google.com/webstore" target="_blank">
                  Add to Chrome
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9</span>
                <span className="text-muted-foreground">(2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-foreground">50,000+</span>
                <span className="text-muted-foreground">users</span>
              </div>
              <div className="text-sm text-muted-foreground">Free</div>
            </div>

            {/* Reviews preview */}
            <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Recent Reviews</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">John D.</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#FBBC05] fill-[#FBBC05]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {"Best password manager I've used. The autofill is lightning fast!"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                    SK
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">Sarah K.</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#FBBC05] fill-[#FBBC05]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Finally a password manager that understands developers. Love the CLI integration.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="https://chrome.google.com/webstore"
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
              >
                Read all reviews
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

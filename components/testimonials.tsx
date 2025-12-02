"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Finally a password manager that understands developer workflows. The CLI integration is a game-changer.",
    author: "Sarah Chen",
    role: "Staff Engineer",
    company: "Vercel",
    avatar: "SC",
  },
  {
    quote: "Switched from 1Password. The Git integration and self-hosting option sold me immediately.",
    author: "Marcus Johnson",
    role: "DevOps Lead",
    company: "Stripe",
    avatar: "MJ",
  },
  {
    quote: "Open source, audited, and actually fast. This is what security tools should be.",
    author: "Elena Rodriguez",
    role: "Security Engineer",
    company: "GitHub",
    avatar: "ER",
  },
  {
    quote: "The zero-knowledge architecture gives me peace of mind. Plus, the CLI is incredibly well designed.",
    author: "David Park",
    role: "CTO",
    company: "Linear",
    avatar: "DP",
  },
  {
    quote: "We migrated our entire team in an afternoon. The import tools are flawless.",
    author: "Amy Zhang",
    role: "Engineering Manager",
    company: "Figma",
    avatar: "AZ",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by developers</h2>
            <p className="text-muted-foreground">See what engineers are saying about Keyforge</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-border text-foreground hover:bg-secondary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-border text-foreground hover:bg-secondary"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[350px] p-6 rounded-xl bg-card border border-border snap-start"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

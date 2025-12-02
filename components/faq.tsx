"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Is Keyforge really free?",
    answer:
      "Yes! Keyforge is open source and free for personal use. We offer a Pro plan for teams that need advanced features like shared vaults, audit logs, and priority support.",
  },
  {
    question: "How does zero-knowledge encryption work?",
    answer:
      "Your master password is never sent to our servers. Instead, we derive an encryption key from your password locally using PBKDF2, then encrypt your vault with AES-256-GCM. Only the encrypted data is synced.",
  },
  {
    question: "Can I self-host Keyforge?",
    answer:
      "Absolutely. Keyforge is designed to run anywhere—your own server, a VPS, or even locally. We provide Docker images and detailed deployment guides.",
  },
  {
    question: "What happens if I forget my master password?",
    answer:
      "Due to our zero-knowledge architecture, we cannot recover your master password. However, you can set up recovery keys or trusted contacts during initial setup.",
  },
  {
    question: "How does the CLI integration work?",
    answer:
      "Install via npm, brew, or cargo. Once authenticated, you can access credentials with commands like 'keyforge get github.com' or pipe passwords directly to other tools.",
  },
  {
    question: "Is Keyforge audited?",
    answer:
      "Yes. We undergo annual security audits by third-party firms. All audit reports are published publicly on our GitHub repository for full transparency.",
  },
]

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-medium text-foreground pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const midpoint = Math.ceil(faqItems.length / 2)
  const leftColumn = faqItems.slice(0, midpoint)
  const rightColumn = faqItems.slice(midpoint)

  return (
    <section id="docs" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently asked questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Keyforge</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-12"
        >
          <div>
            {leftColumn.map((item, i) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div>
            {rightColumn.map((item, i) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openIndex === i + midpoint}
                onToggle={() => setOpenIndex(openIndex === i + midpoint ? null : i + midpoint)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

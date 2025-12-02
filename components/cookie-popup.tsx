"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

const COOKIE_CONSENT_KEY = "keyforge-cookie-consent"

export function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-card border border-border shadow-lg shadow-black/20">
            <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              We use cookies for analytics.{" "}
              <a href="#" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4"
            >
              OK
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

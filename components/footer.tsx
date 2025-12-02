"use client"

import { Key, Github, Twitter } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Product: ["Features", "Security", "Pricing", "Changelog"],
  Developers: ["Documentation", "CLI Reference", "API", "GitHub"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security Policy"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Key className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Keyforge</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Open source password manager for developers.</p>
            <div className="flex gap-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Keyforge. MIT License.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}

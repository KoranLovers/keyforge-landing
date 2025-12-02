"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Server } from "lucide-react"

const securityFeatures = [
  { icon: Lock, label: "AES-256-GCM" },
  { icon: Eye, label: "Zero Knowledge" },
  { icon: Server, label: "Local-first" },
  { icon: Shield, label: "Audited" },
]

const codeExample = `// Keyforge encryption flow
import { encrypt, derive } from '@keyforge/core';

async function encryptVault(data: VaultData) {
  // Derive key from master password (PBKDF2)
  const key = await derive(masterPassword, {
    salt: crypto.randomBytes(32),
    iterations: 600_000,
    hash: 'SHA-256'
  });

  // Encrypt with AES-256-GCM
  const encrypted = await encrypt(data, key, {
    algorithm: 'AES-256-GCM',
    iv: crypto.randomBytes(12)
  });

  return encrypted; // Never leaves device unencrypted
}`

export function SecuritySection() {
  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#010409]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Security first</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Your data stays yours</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Keyforge uses zero-knowledge architecture. Your master password never leaves your device, and all
              encryption happens locally. Even we cannot access your data.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{feature.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl bg-card border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#F85149]" />
                  <div className="w-3 h-3 rounded-full bg-[#F0883E]" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">encryption.ts</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="font-mono">
                  {codeExample.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 text-muted-foreground/50 select-none text-right pr-4">{i + 1}</span>
                      <span
                        className={`
                        ${line.includes("//") ? "text-muted-foreground" : ""}
                        ${line.includes("import") || line.includes("export") || line.includes("async") || line.includes("const") || line.includes("return") ? "text-[#FF7B72]" : ""}
                        ${line.includes("'") ? "text-[#A5D6FF]" : ""}
                        ${line.includes("function") ? "text-[#D2A8FF]" : ""}
                        ${!line.includes("//") && !line.includes("import") && !line.includes("'") && !line.includes("function") && !line.includes("async") && !line.includes("const") && !line.includes("return") && !line.includes("export") ? "text-foreground" : ""}
                      `}
                      >
                        {line || " "}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

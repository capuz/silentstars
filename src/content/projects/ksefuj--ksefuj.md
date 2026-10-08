---
repo: "ksefuj/ksefuj"
name: "ksefuj"
description: "🧾 ksefuj.to: free, open-source KSeF tools. FA(3) invoice validator (web, CLI, npm), NBP rates and guides. Runs in the browser."
readmeQualityOk: true
url: "https://github.com/ksefuj/ksefuj"
homepage: "https://ksefuj.to"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [52, 47]
topics: ["e-invoicing", "fa3", "faktura", "invoice", "ksef", "nextjs", "open-source", "poland", "typescript", "validator"]
stars: 9
forks: 1
openIssues: 3
closedIssues: 34
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-12T10:45:58Z"
lastCommitAt: "2026-10-08T10:51:06Z"
lastReleaseAt: "2026-10-08T09:44:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["witekbobrowski", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/475871c27d728f23a7ed7239a04e8554d7ea9851ac2ace6901a249acb578f2c3/ksefuj/ksefuj"
fundingLinks: ["GITHUB:https://github.com/witekbobrowski", "BUY_ME_A_COFFEE:https://buymeacoffee.com/witekbobrowski"]
discussionCount: 0
---

# ksefuj

Open source toolkit for Polish KSeF FA(3) e-invoicing.

- **100% free forever** — no limits, no signup, no hidden costs
- **Privacy-first** — everything runs locally in your browser
- **Official compliance** — full XSD validation against Ministry of Finance schemas
- **Multilingual** — Polish, English, Ukrainian

🌐 **[ksefuj.to](https://ksefuj.to)** — free online validator 📦
**[@ksefuj/validator](https://www.npmjs.com/package/@ksefuj/validator)** — npm package + CLI

## What is KSeF?

KSeF (Krajowy System e-Faktur) is Poland's mandatory e-invoicing system. Starting April 1, 2026
(February 1, 2026 for large companies), all VAT taxpayers must issue structured XML invoices through
KSeF using the FA(3) schema.

## Features

### Three-Layer Validation

- **XSD Schema Validation** — full compliance with official Ministry of Finance schemas
- **MF Semantic Rules** — catches errors that XSD can't express, per the official FA(3) information
  sheet
- **Extra checks** — tax calculation math, NBP currency rates, IBAN format: things KSeF won't catch

### Privacy & Performance

- **100% client-side** — your invoice data never leaves your browser
- **Offline capable** — bundled…

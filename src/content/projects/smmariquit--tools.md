---
repo: "smmariquit/tools"
name: "tools"
description: "Tools for Filipinos"
readmeQualityOk: true
url: "https://github.com/smmariquit/tools"
homepage: "https://phtools.me"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [71, 25]
topics: ["cli", "personal", "scripts", "tools", "utilities"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-28T11:36:35Z"
lastCommitAt: "2026-11-11T15:02:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 58
undervaluedScore: 13
maintainers: ["smmariquit"]
openGraphImageUrl: "https://opengraph.githubassets.com/9042b7833476fdc500b05644260ec69122d6d60e39354dff5f8e57ac64d73e8a/smmariquit/tools"
---

# PH Tools & Calculators 🇵🇭

A suite of free, accurate, and highly optimized online utilities and calculators specifically designed for the Philippines (Salary, SSS, Tax, ID Photos, etc.).

## 🏗️ Architecture & Philosophy
This repository is engineered to maximize Google AdSense revenue while maintaining **$0/month in server costs** and **bypassing Data Privacy Act (RA 10173)** liabilities.

* **Framework:** Next.js 15 (App Router).
* **Zero-Server Compute:** Calculations run entirely in the user's browser via Client Components; no calculator data is sent to a server.
* **SEO Supremacy:** We use a strict Server/Client component split. `page.tsx` handles static metadata and JSON-LD schema, while `Client.tsx` handles the interactive UI.
* **A/B Testing & Analytics:** Handled entirely by **PostHog** (`<PostHogProvider>`). We do not use custom databases or authentication to avoid maintenance and privacy liabilities.
* **Legal Compliance:** All tools feature strict disclaimers stating they are estimates, protecting against Unauthorized Practice of Accountancy (RA 9298).

## 🚀 CI/CD & Agentic Workflow
This repository features an "ultimate closed-loop" agentic workflow:
1. **Husky…

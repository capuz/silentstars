---
repo: "BraaMohammed/bricks"
name: "bricks"
description: "Bricks is the open-source, fully local alternative to Clay.com. It combines AI agents, advanced web scraping, and Puppeteer automation to turn raw CSV data into actionable business intelligence — without subscriptions, vendor lock-in, or sending your data to the cloud."
readmeQualityOk: true
url: "https://github.com/BraaMohammed/bricks"
homepage: "https://usebricks.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["b2b", "clay", "outreach", "sales", "ai-agents", "automation", "browser-automation", "cold-outreach", "data-enrichment", "lead-generation"]
stars: 73
forks: 16
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-21T13:45:09Z"
lastCommitAt: "2026-11-17T14:48:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 54
undervaluedScore: 24
maintainers: ["BraaMohammed"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff22d6d4131c09aa2927b4949ee73ea139a98bd677d46cd00c728eee30b2ca30/BraaMohammed/bricks"
---

# Bricks 🧱

> Run data enrichment and outreach automation entirely on your own machine. No monthly subscriptions, no credit systems, no data leaving your computer.

https://github.com/user-attachments/assets/7995b9ee-ab2c-4d15-b38e-6171345ee409

Most data enrichment platforms charge $200–400/month in base fees, then charge again per enrichment run in their own credit system. You also hand over your entire lead list to a cloud server just to run what is essentially a web search and an AI call.

Bricks runs the same workflows — web scraping, AI agents, browser automation, data synthesis — entirely on your own machine, using your own API keys at wholesale prices. Or run local models via Ollama for $0.

---

## What It Does

### Autonomous Web Research Agent
Give a column an instruction: *"Find this company's most recent funding round and who led it."*

Bricks spins up a search agent that creates queries, hits the `/api/search` and `/api/reader` backend endpoints, reads the parsed markdown of the pages, and writes the answer directly into your cell. It keeps searching until it finds something concrete.

### AI Email Finder
No third-party email tool needed. The agent takes the lead's…

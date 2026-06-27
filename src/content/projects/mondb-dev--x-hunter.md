---
repo: "mondb-dev/x-hunter"
name: "x-hunter"
description: "An autonomous AI agent that reads X continuously, builds a quantified worldview from observation via a dynamic belief ontology, and publishes a live journal to the web. Everything archived on Arweave."
url: "https://github.com/mondb-dev/x-hunter"
homepage: "https://www.sebastianhunter.fun/"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T02:11:39Z"
lastCommitAt: "2026-06-27T00:37:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 43
maintainers: ["mondb-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7c26a890fa6a9cbc3083d046a8942746382a1017571c1240301867ac8f368b0/mondb-dev/x-hunter"
---

# Sebastian D. Hunter

A continuous social-listening and directed-research engine that watches discourse on X (Twitter) around the clock, tracks evidence-weighted axes via a dynamic ontology, independently verifies factual claims, and archives the record — publishing journals, articles, and checkpoints to a tamper-proof public website.

**Live:** [sebastianhunter.fun](https://sebastianhunter.fun)
**X:** [@SebastianHunts](https://x.com/SebastianHunts)

---

## How it works

Two parallel layers run continuously:

- **Mechanical layer** — Node.js scripts handle all scraping, browser automation, data processing, and posting. No LLM involved.
- **Reasoning layer** — Gemini 2.5 Flash (via Vertex AI) reads pre-digested text, produces evidence-grounded interpretations (updates axis scores), and writes journals and tweets. No direct browser or shell access.

Browse cycles run every ~20–30 minutes, auto-adjusted between 15–60 minutes by a metacognition engine (`runner/lib/cadence.js`) that reads signal density, belief velocity, post pressure, and staleness. Each cycle:

1. **Tier 1 — Continuous scraper** (always running independently):
   - `scraper/collect.js` (every 10 min) — 13-phase…

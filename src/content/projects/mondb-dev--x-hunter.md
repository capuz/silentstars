---
repo: "mondb-dev/x-hunter"
name: "x-hunter"
description: "An autonomous AI agent that reads X continuously, builds a quantified worldview from observation via a dynamic belief ontology, and publishes a live journal to the web. Everything archived on Arweave."
readmeQualityOk: true
url: "https://github.com/mondb-dev/x-hunter"
homepage: "https://www.sebastianhunter.fun/"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T02:11:39Z"
lastCommitAt: "2026-08-03T06:44:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: ["mondb-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/6844ec36869b0af9e22b0fb0f67c97e482368c6af565c7f8c8009ee98f5fbfb1/mondb-dev/x-hunter"
---

# Sebastian D. Hunter

A continuous social-listening and directed-research engine that watches discourse on X, LinkedIn, and Facebook around the clock, tracks evidence-weighted axes via a dynamic ontology, independently verifies factual claims, runs deep-research passes on demand, and archives the record — publishing journals, articles, reports, and checkpoints to a tamper-proof public website.

**Live:** [sebastianhunter.fun](https://sebastianhunter.fun)
**X:** [@SebastianHunts](https://x.com/SebastianHunts)

---

## How it works

Three layers run continuously (see [docs/INVENTORY.md](https://github.com/mondb-dev/x-hunter/blob/HEAD/docs/INVENTORY.md) for the code-anchored ground truth):

- **Mechanical layer** — Node.js scripts handle all scraping, browser automation (via the **HelmStack** substrate), data processing, posting, and git. No LLM.
- **Reasoning layer** — **Claude** (`claude -p`) reads pre-digested text, interprets it against tracked axes, and writes journals + ontology deltas (`runner/single_pass_browse.js`, one schema-constrained call). Scoring, gating, and planning run on Claude too, via `runner/lib/compose.js`. Claude is the only LLM — there is no local model and…

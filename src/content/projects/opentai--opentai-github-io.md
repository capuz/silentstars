---
repo: "OpenTAI/opentai.github.io"
name: "opentai.github.io"
description: "The official website of the Open Trustworthy AI Community (OpenTAI)."
readmeQualityOk: true
url: "https://github.com/OpenTAI/opentai.github.io"
homepage: "https://opentai.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["agent-skills", "agents", "cybersecurity", "embodied-agent", "embodied-ai", "fairness", "jailbreaks", "llm", "privacy", "safety"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2024-06-21T07:22:30Z"
lastCommitAt: "2026-09-13T08:29:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 75
maintainers: ["Frankiegan912", "Reindulger"]
openGraphImageUrl: "https://opengraph.githubassets.com/902ef792c607c821af0cd543f7b1c1754cf53a5f11c8b0012681896ce4aa56d9/OpenTAI/opentai.github.io"
---

# OpenTAI website (rebuild)

A rebuild of the OpenTAI site on the OpenHallu framework: Next.js 16 App Router,
React 19, Tailwind CSS v4, static export.

Positioning: **OpenTAI — The Open Hub for Trustworthy AI**. An open ecosystem
connecting trustworthy AI research, innovation, and startups.

## Local development

```bash
npm ci
npm run dev
```

## Site map

| Route | Contents |
| --- | --- |
| `/` | Discover — site-wide search, newsletter signup, trending, latest releases |
| `/benchmarks` | Flagship collection, 69 entries; primary filters are LLMs, Agents, Embodied AI |
| `/benchmarks/[slug]` | Per-benchmark page: description, code, papers, leaderboard, curation gaps |
| `/models` | Verified open-source guard, security-specialized, and safety-aligned models |
| `/datasets` | 33 directly safety/trustworthiness-relevant datasets retained from a 155-record primary-source audit; charts update automatically by domain and year |
| `/papers` | 772-paper library — LLMs / Agents / Embodied AI, then Research / Survey |
| `/leaderboard` | Source-checked public leaderboard cards for LLM Safety, Agent Safety, and Fairness; every snapshot names its exact metric |
| `/arenas` | Gray Swan…

---
repo: "bjorn-ali-goransson/built-in-saudi"
name: "built-in-saudi"
description: "built-in-saudi.com"
readmeQualityOk: true
url: "https://github.com/bjorn-ali-goransson/built-in-saudi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 0
openIssues: 0
closedIssues: 37
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-30T05:43:11Z"
lastCommitAt: "2026-07-07T06:38:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 53
maintainers: ["bjorn-ali-goransson"]
openGraphImageUrl: "https://opengraph.githubassets.com/375d03a44c21b2df19b89fd58610a599b6334258a65d81c350714044281b8e9e/bjorn-ali-goransson/built-in-saudi"
---

# Built in Saudi

A growing toolbox of **free, privacy-first online utilities** — the everyday
tools that are usually buried in ads and paywalls elsewhere. Everything runs
client-side: no ads, no sign-ups, nothing uploaded. Branded and proudly built
in Saudi Arabia.

Live at **[built-in-saudi.com](https://built-in-saudi.com)**.

## Stack

- **React + TypeScript**, built with **Vite**
- **React Router** for routing
- No backend — every tool runs entirely in the browser
- Deployed to **GitHub Pages** via GitHub Actions

## Tools

| Tool | Status |
|------|--------|
| QR Code Generator | ✅ Live |
| Password Generator, Image Compressor, Color tools, Unit Converter, JSON Formatter, UUID, Text Counter, Base64 … | 🛠️ On the roadmap |

## Architecture: adding a tool

Tools are self-contained, lazily-loaded modules registered in one place — the
shell (routing, home catalog, tool page, SEO) picks them up automatically.

1. Create `src/tools/<id>/`:
   - `Xyz​Tool.tsx` — the tool UI (default export).
   - `meta.ts` — a `Tool` object (`src/tools/types.ts`) with a lazy `component`.
2. Register it in `src/tools/index.ts`.

That's it. External/showcase tools are supported too — omit `component`…

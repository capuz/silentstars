---
repo: "c1t1zen1/markgitup-research-desk"
name: "markgitup-research-desk"
description: "Autonomous hourly research desk: a local LLM picks a fresh angle from 24 standing AI/policy/markets topic families, SearXNG gathers the evidence, and nothing publishes without 2+ independent sources. Static site, zero dependencies, built with Hermes Agent."
readmeQualityOk: true
url: "https://github.com/c1t1zen1/markgitup-research-desk"
homepage: "https://c1t1zen1.github.io/markgitup-research-desk/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [77, 20]
topics: ["agentic-ai", "ai", "ai-policy", "artificial-intelligence", "automation", "autonomous-agents", "cron", "deepfakes", "github-pages", "hermes-agent"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-30T19:28:33Z"
lastCommitAt: "2026-10-26T03:02:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/47dc071bf75575f8127f11a795cbe764221543141b9337d7eb1e93c099bc7313/c1t1zen1/markgitup-research-desk"
---

# Markgitup Research Desk

**An autonomous, source-gated research portal — published hourly, on the hour.**

Twenty-four durable AI and technology topic families feed a local-first research pipeline. It finds a fresh angle, gathers source-linked evidence, rejects thin or repeated work, renders deterministic static HTML, and deploys to GitHub Pages.

### [→ Read the live desk](https://c1t1zen1.github.io/markgitup-research-desk/)

---

## Contents

- [What this is](#what-this-is)
- [How a dispatch gets made](#how-a-dispatch-gets-made)
- [Topic families](#topic-families)
- [Integrity model](#integrity-model)
- [Inference chain](#inference-chain)
- [The portal](#the-portal)
- [Local weather hero and privacy](#local-weather-hero-and-privacy)
- [Repository layout](#repository-layout)
- [Configuration](#configuration)
- [Running it](#running-it)
- [Tests and verification](#tests-and-verification)
- [Credits](#credits)

---

## What this is

Markgitup is an unattended research desk. A scheduled publisher on a Raspberry Pi completes the loop once per hour:

1. Choose an unused family from a persistent 24-topic cycle.
2. Ask a local model for a current angle and a primary plus adjacent…

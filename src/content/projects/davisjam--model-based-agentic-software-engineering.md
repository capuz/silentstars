---
repo: "davisjam/model-based-agentic-software-engineering"
name: "model-based-agentic-software-engineering"
description: "Book, website, and skills for MAGE: the Model-Based Agentic Software Engineering framework"
readmeQualityOk: true
url: "https://github.com/davisjam/model-based-agentic-software-engineering"
homepage: "https://davisjam.github.io/model-based-agentic-software-engineering/"
language: "HTML"
languages: ["HTML"]
languagePcts: [80]
topics: ["agentic-coding", "softwareengineering", "vibecoding"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T15:35:07Z"
lastCommitAt: "2026-08-17T04:18:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["davisjam"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c540d97d41c8cd17bde0d639c729bcc0b90ab734132085424cf2d403e37e58b/davisjam/model-based-agentic-software-engineering"
---

# Agent Governance Mechanisms

*A catalogue of the **governance mechanisms** that keep a fleet of AI coding agents productive while
holding the cost of their failures within bounds, distilled from a 19-week case study of building a
production system with frontier coding agents. Each mechanism is written like a design pattern: the
recurring failure it kills, and why it is **not** just the cheaper thing everyone already does.*

## Between two schools of thought

Two common ways to build with agents sit at opposite ends of a spectrum. This catalogue is about the
**midway**.

| Vibe coding | · Governance-centric · — **the midway** | Oversight-centric |
|:---|:---:|:---|
| Prompt, accept what looks right, iterate by feel. Fast, but the same failures keep recurring and human review becomes the bottleneck. | Let velocity **expose** failures, and **convert** each recurring one into a durable guardrail. The guardrails grow from real failures, so code stays fast **and** trustworthy. | Check *everything* before you trust it: a human reviewing every change, or a formal spec verified against (spec-driven development is this). Rigorous, but checking is the bottleneck, and neither humans nor…

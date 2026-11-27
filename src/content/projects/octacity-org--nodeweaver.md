---
repo: "octacity-org/nodeweaver"
name: "nodeweaver"
description: "Turn any codebase into an interactive architecture map"
readmeQualityOk: true
url: "https://github.com/octacity-org/nodeweaver"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-16T22:43:25Z"
lastCommitAt: "2026-11-27T12:53:09Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 27
maintainers: ["emreydin", "Mahmut-Ornek", "elifsudayi"]
openGraphImageUrl: "https://opengraph.githubassets.com/8306b3614e7bd134464aa188838eae3bb92c383d74d2c18d225b128c0132e3cf/octacity-org/nodeweaver"
---

# NodeWeaver

> Turn any codebase into an interactive architecture map — not another wall of text.

**Status: early development (pre-alpha).** The project skeleton is in place. The features described below are planned and are not implemented yet.

NodeWeaver is a local-first tool that will scan a repository and generate an interactive knowledge graph, module summaries, and onboarding-ready documentation, so developers and researchers can understand a new or complex codebase in minutes instead of hours.

Built by the ARC team of the Octacity community.

---

## Why NodeWeaver?

Most AI coding assistants answer "explain this repo" with a long, linear block of text. That does not match how people build a mental model of a system: through structure, relationships, and data flow.

NodeWeaver is designed to:
- Parse your codebase with deterministic, rule-based **AST parsing**, not a guess from an LLM.
- Build a **knowledge graph** of modules, dependencies, and data flow.
- Render it as an **interactive visual map** you can click through.
- Run **entirely on your machine**, so no code is sent to an external server.

---

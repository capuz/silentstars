---
repo: "rjwalters/lean-genius"
name: "lean-genius"
description: "Annotations for Lean Proofs"
url: "https://github.com/rjwalters/lean-genius"
homepage: "https://leangenius.org"
language: "Lean"
languages: ["Lean"]
languagePcts: [93]
stars: 6
forks: 1
openIssues: 9
closedIssues: 1056
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-21T18:20:32Z"
lastCommitAt: "2026-06-23T23:30:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 61
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b42c6d72fced429707f9f9a752afad8f7fd92f862d100afa4dd2a7fde96e645/rjwalters/lean-genius"
---

# LeanGenius

> *"The Truth Mines were a honeycomb of abstract constructs..."*
> — Greg Egan, *Diaspora*

An interactive gallery of formal mathematics — annotated Lean 4 proofs with line-by-line explanations, plus tooling for AI-assisted formalization of open problems.

**Live site**: [leangenius.org](https://leangenius.org)

## Goals

- Formalize the [Erdos Problems](https://erdosproblems.com) in Lean 4
- Build infrastructure for human-AI collaborative proof development
- Create an accessible gallery for exploring verified mathematics

See [ROADMAP.md](ROADMAP.md) for current plans.

## Status

| Metric | Count |
|--------|-------|
| Lean proof files | 2,400+ |
| Gallery proofs | 2,000+ |
| Erdos problems formalized | 1,200+ |
| Research problems tracked | 1,100+ |

### Infrastructure

- **Multi-agent orchestration**: Autonomous researcher, enricher, auditor, and deployer agents
- **Aristotle integration**: Automated proof search via [Harmonic's Aristotle](https://harmonic.fun)
- **Smart account management**: Load balancing across multiple OAuth accounts with usage-aware scheduling
- **Docker builds**: Memory-safe Lean compilation (direct `lake build` can consume 100GB+)
-…

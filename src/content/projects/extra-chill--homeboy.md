---
repo: "Extra-Chill/homeboy"
name: "homeboy"
description: "Deterministic orchestration for agentic software engineering."
readmeQualityOk: true
url: "https://github.com/Extra-Chill/homeboy"
homepage: "https://chubes.net/docs/homeboy"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["cli", "developer-tools", "rust", "code-factory"]
stars: 16
forks: 8
openIssues: 647
closedIssues: 8457
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-09T22:51:16Z"
lastCommitAt: "2026-11-20T11:47:34Z"
lastReleaseAt: "2026-01-11T16:53:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f133bcb964f94571087f7195113100155acd17f90ffda5ef76daff0d0932b18/Extra-Chill/homeboy"
---

# Homeboy

Homeboy is a component-aware automation CLI for modern software work: many branches, many worktrees, many agents, and many projects moving at once.

Coding agents are powerful but nondeterministic: the same task can produce different changes on every run. Homeboy makes that work more deterministic by surrounding it with fixed structure: isolated worktrees, deterministic gates, durable evidence, and gated pull-request finalization.

It gives local developers, CI jobs, scheduled automation, and coding agents the same operational surface for checks, reviews, tests, benchmarks, traces, releases, and evidence. Humans get readable terminal output; automation gets stable JSON artifacts.

Homeboy core is intentionally domain-agnostic. The CLI owns orchestration, configuration, structured output, persisted runs, baselines, remote execution, and release/evidence workflows. Domain-specific behavior lives in extensions such as Rust, WordPress, Node.js, GitHub, Homebrew, Swift, and custom team extensions.

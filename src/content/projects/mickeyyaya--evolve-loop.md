---
repo: "mickeyyaya/evolve-loop"
name: "evolve-loop"
description: "Autonomous CI/CD for AI-written code: plans, builds, and adversarially audits changes to any repo — a different model reviews the builder — shipping only what passes deterministic gates. Failures become durable lessons; runs are checkpoint-resumable & context-optimized. Claude Code · Codex · Gemini."
readmeQualityOk: true
url: "https://github.com/mickeyyaya/evolve-loop"
homepage: "https://mickeyyaya.github.io/evolve-loop/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agents", "ai-pipeline", "autonomous-coding", "claude-code", "claude-code-plugin", "code-quality", "developer-tools", "gemini-cli", "open-source", "self-improving"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T06:55:05Z"
lastCommitAt: "2026-09-29T10:04:07Z"
lastReleaseAt: "2026-03-22T15:37:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 51
maintainers: ["mickeyyaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1e923187be0788ed42db974239bfc04381ad675c5624ff6b023af96396fea6/mickeyyaya/evolve-loop"
---

# Evolve Loop

Current guarantees and supported modes: [runtime contract](https://github.com/mickeyyaya/evolve-loop/blob/HEAD/docs/architecture/current-runtime-contract.md).

**An autonomous pipeline that improves your codebase across many cycles — and structurally detects when the AI tries to fake the result.**

> **The pitch, in one sentence:** Any agent can write a feature overnight. Evolve Loop is the layer that decides whether that code is *safe to merge* — adversarially, structurally, and with memory that compounds across runs.

The mental model is **CI/CD for AI-written code**. You hand it a goal — "add dark mode," "harden the auth flow," "pay down concurrency debt" — and, optionally, a number of cycles; leave the count off and the advisor decides how many the work needs. It runs unattended: it finds the work, plans it, writes it, has an audit agent adversarially review it, ships only what passes deterministic checks, and records failures as durable lessons and retrieves relevant lessons for later phases.

Over 1,300 autonomous cycles in, the trust layer is structural, not aspirational: **typed routing authority** keeps operator-owned control-plane work out of autonomous…

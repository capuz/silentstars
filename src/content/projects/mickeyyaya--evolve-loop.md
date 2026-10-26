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
stars: 6
forks: 2
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T06:55:05Z"
lastCommitAt: "2026-10-26T09:17:16Z"
lastReleaseAt: "2026-03-22T15:37:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 54
maintainers: ["mickeyyaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/f402f162f4065a80dc0cc85c1d48d0d4f53b35c92d5f5ba528b79b7bcf15a41d/mickeyyaya/evolve-loop"
---

# Evolve Loop

Current guarantees and supported modes: [runtime contract](https://github.com/mickeyyaya/evolve-loop/blob/HEAD/docs/architecture/current-runtime-contract.md).

**An autonomous pipeline that improves your codebase across many cycles. Its structure detects when the AI tries to fake the result.**

> **The pitch, in one sentence:** Any agent can write a feature overnight. Evolve Loop is the layer that decides if that code is *safe to merge*. It decides adversarially and structurally, with a memory that compounds across runs.

The mental model is **CI/CD for AI-written code**. You give it a goal: "add dark mode," "harden the auth flow," "pay down concurrency debt". Optionally, you also give it a number of cycles. If you do not give the count, the advisor decides how many cycles the work needs. It runs unattended:

- it finds the work, plans it and writes it;
- an audit agent reviews the work adversarially;
- it ships only what passes deterministic checks;
- it records failures as durable lessons, and it gets the relevant lessons for later phases.

After more than 1,300 autonomous cycles, the trust layer is structural, not aspirational:

- **typed routing authority**…

---
repo: "Extra-Chill/homeboy"
name: "homeboy"
description: "Headless orchestration for agentic software engineering."
readmeQualityOk: true
url: "https://github.com/Extra-Chill/homeboy"
homepage: "https://chubes.net/docs/homeboy"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "developer-tools", "rust", "code-factory"]
stars: 13
forks: 6
openIssues: 205
closedIssues: 3947
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-09T22:51:16Z"
lastCommitAt: "2026-07-15T05:53:31Z"
lastReleaseAt: "2026-01-11T16:53:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98495ab350d6dbe91d4a1c534ec9f858aafa5cf4e94f9326682947cf672f53e8/Extra-Chill/homeboy"
---

# Homeboy

Homeboy is a component-aware automation CLI for modern software work: many branches, many worktrees, many agents, and many projects moving at once.

It gives local developers, CI jobs, scheduled automation, and coding agents the same operational surface for checks, reviews, tests, benchmarks, traces, releases, and evidence. Humans get readable terminal output; automation gets stable JSON artifacts.

Homeboy core is intentionally domain-agnostic. The CLI owns orchestration, configuration, structured output, persisted runs, baselines, remote execution, and release/evidence workflows. Domain-specific behavior lives in extensions such as Rust, WordPress, Node.js, GitHub, Homebrew, Swift, and custom team extensions.

## What You Can Do

- Run repeatable quality gates with `homeboy review audit`, `homeboy review lint`, `homeboy review test`, `homeboy review build`, and `homeboy review`.
- Produce structured evidence with `--output` so CI jobs and coding agents can inspect results without scraping terminal logs.
- Capture benchmark, fuzz, trace, and review artifacts as persisted runs.
- Coordinate many branches and worktrees with comparable checks, reports, and PR evidence.
-…

---
repo: "bnsd55/openscion"
name: "openscion"
description: "Server-centric version control for agent-heavy monorepos, in Rust. An independent open-source implementation of the design from Anthropic's \"Redesigning source control\" post. Not affiliated with Anthropic."
readmeQualityOk: true
url: "https://github.com/bnsd55/openscion"
homepage: "https://www.anthropic.com/engineering/redesigning-source-control"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "content-addressable", "git", "grpc", "monorepo", "rust", "source-control", "vcs", "version-control"]
stars: 29
forks: 2
openIssues: 15
closedIssues: 101
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-14T06:05:49Z"
lastCommitAt: "2026-10-21T23:36:02Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 43
maintainers: ["bnsd55"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418448489/50192809-91c9-4058-888e-f7bc0f4d51bb"
discussionCount: 0
---

# openscion

A version control system for large monorepos where most of the writers are
AI agents. The server keeps the history and makes the commits; clients ask
only for what they need. Written in Rust.

> **Alpha (0.x).** It runs on one machine and is not ready for production
> code. What holds between versions is in [docs/stability.md](https://github.com/bnsd55/openscion/blob/HEAD/docs/stability.md);
> the order of the work, and what stays out until it passes, is in
> [docs/ROADMAP.md](https://github.com/bnsd55/openscion/blob/HEAD/docs/ROADMAP.md); planned work is tracked in
> [issues](https://github.com/bnsd55/openscion/issues)
> and [milestones](https://github.com/bnsd55/openscion/milestones).

## What this is, and what it is not

openscion is an independent, open-source implementation of the design that
Anthropic described in
[Redesigning source control](https://www.anthropic.com/engineering/redesigning-source-control)
(October 2026). Anthropic built a system called Scion for its own monorepo.
This project rebuilds the ideas from that public article.

- It is **not** affiliated with or endorsed by Anthropic, and it contains no
  Anthropic code. Where the article does not…

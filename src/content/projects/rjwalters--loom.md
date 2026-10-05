---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [71, 28]
stars: 14
forks: 9
openIssues: 495
closedIssues: 4470
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-10-05T10:47:58Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 73
maintainers: ["turian", "loom-fleet-dispatch[bot]", "2ambot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a35bb2f4a885b5f42dac2514484b4ef031f451f72e78c585b5ac748f38bd6f5e/rjwalters/loom"
discussionCount: 4
---

# Loom

**AI-powered development orchestration using your forge as the coordination layer.**

Loom spawns AI agents that claim issues, implement features, review PRs, and merge code -- all coordinated through labels. Your only job: write issues, review PRs, merge what you like.

> **What Loom optimizes for — and when it's the wrong tool.** Loom is tuned for
> *unattended correctness over long horizons*: code you can leave running overnight and
> still trust in the morning. Its gates (Curator, Judge, Doctor, merge-risk holds,
> `buildGate`) buy that guarantee at the cost of latency.
>
> **If you need to ship in hours with a human watching continuously, Loom is the wrong
> tool.** Work in live agent sessions instead of dispatching sweeps, write fewer tests,
> merge without a review round-trip, and patch symptoms rather than root causes. See
> [Latency vs. Reliability](https://github.com/rjwalters/loom/blob/HEAD/docs/philosophy/latency-vs-reliability.md) for why that
> recipe is right there and wrong everywhere else.

**Supported Forges**: GitHub | Gitea — Loom auto-detects your forge from the git remote URL. A forge abstraction layer — `defaults/scripts/lib/forge-helpers.sh` for…

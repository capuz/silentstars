---
repo: "jackin-project/jackin"
name: "jackin"
description: "Cyberpunk-inspired CLI for orchestrating autonomous AI coding agents in isolated sandboxed environments — reproducible, scoped, and fully under your control"
readmeQualityOk: true
url: "https://github.com/jackin-project/jackin"
homepage: "http://jackin.tailrocks.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 14
forks: 0
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-31T20:04:13Z"
lastCommitAt: "2026-10-23T08:47:27Z"
lastReleaseAt: "2026-06-26T22:22:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["donbeave"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1197700841/a3cf3113-c342-4626-b888-d06fa1ef71da"
---

# jackin❯

> [!WARNING]
> 🚧 jackin❯ is in active early development.
>
> jackin❯ is not production-ready. We are actively refining the core concept, runtime integrations, CLI/TUI workflows, schemas, and documentation, and that will introduce major breaking changes before a stable release. Features may be redesigned, replaced, or removed while we find the shape that makes sense. Early adopters are welcome, but the priority right now is concept quality and fast iteration rather than freezing today's behavior. The docs track the rolling preview channel; open issues and roadmap feedback are welcome, but do not treat the current feature set as a compatibility promise.

Run AI coding agents at full speed inside isolated containers: scoped access, per-agent state, and host boundaries that stay visible.

jackin❯ is the **ecosystem layer around** AI coding agents — not another agent itself. It runs many agents in parallel, each in its own container, with its own file access, tool profile, and credentials. Every agent runtime ([Claude Code](https://claude.com/product/claude-code) `--dangerously-skip-permissions`, [Codex](https://github.com/openai/codex) YOLO, [Amp](https://ampcode.com),…

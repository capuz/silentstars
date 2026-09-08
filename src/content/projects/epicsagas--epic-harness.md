---
repo: "epicsagas/epic-harness"
name: "epic-harness"
description: "Multi-tool AI agent harness — 22 skills, self-evolving engine, unified memory, autonomous spec-to-PR pipeline. Works with Claude Code, Codex, Cursor, OpenCode, and Cline."
readmeQualityOk: true
url: "https://github.com/epicsagas/epic-harness"
homepage: "https://epicsagas.github.io/epic-harness/"
language: "Rust"
languages: ["Rust"]
languagePcts: [60]
topics: ["ai-agent", "claude", "claude-code", "cli", "developer-tools", "llm", "rust"]
stars: 18
forks: 5
openIssues: 1
closedIssues: 22
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-09T10:54:42Z"
lastCommitAt: "2026-09-08T08:16:04Z"
lastReleaseAt: "2026-04-30T04:00:21Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 52
maintainers: ["epicsagas", "dependabot[bot]", "trdillman"]
openGraphImageUrl: "https://opengraph.githubassets.com/c59dceaaaf65622028daa6625c29d4439983a122eb66c26ee3f37b30fcf288c8/epicsagas/epic-harness"
fundingLinks: ["GITHUB:https://github.com/epicsagas", "BUY_ME_A_COFFEE:https://buymeacoffee.com/epicsaga"]
---

<h1 align="center">Epic Harness</h1>

<blockquote><p align="center">A self-evolving AI coding agent harness — 3 commands, 25 skills, 1 autonomous pipeline, learns from your failures.</p></blockquote>

</p>

</p>
</p>

A Claude Code plugin that **consolidates 30+ commands into 3 commands + 25 auto-trigger skills**, and **evolves new skills** from your own failure patterns.

</p>

---

### Web Dashboard — auto-launches on session start

10-screen real-time metrics for eval scores, tool stats, orbit pipelines, evolved skills, and hook health. Opens automatically with the first Claude Code session — no manual setup needed. The **Eval & Evolve** screen surfaces the HarnessX evolution-engine state: reward-hacking warnings, seesaw solved-task registry, variant pool, and the adaptation landscape (persistent failures + untried edit types).

</p>

```bash
# Auto-launches on first session (default: http://localhost:7700)
# Configure port or disable in ~/.harness/config.toml:
[dashboard]
port = 7700       # set to 0 to disable auto-launch
auto_open = true  # open browser on first session
```

Screens: **Dashboard** · /orbit Pipeline · Commands (3) · Skills (25) · Live Agents · Eval & Evolve ·…

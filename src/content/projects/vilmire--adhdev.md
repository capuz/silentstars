---
repo: "vilmire/adhdev"
name: "adhdev"
description: "🦦 ADHDev — Agent Dashboard Hub. Monitor & control AI coding agents from a single dashboard. Self-hosted, open-source."
readmeQualityOk: true
url: "https://github.com/vilmire/adhdev"
homepage: "https://adhf.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["dashboard", "remote-control", "cli", "ai-agents", "ai-coding", "ai-coding-assistant", "claude-code", "developer-tools", "orchestration", "antigravity"]
stars: 110
forks: 17
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-17T16:55:03Z"
lastCommitAt: "2026-10-23T11:26:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 38
maintainers: ["vilmire"]
openGraphImageUrl: "https://opengraph.githubassets.com/f747c7539622df923448f761a5a1cbad70c5e26e265022981918023b328f9412/vilmire/adhdev"
discussionCount: 0
---

[English](https://github.com/vilmire/adhdev/blob/HEAD/README.md) | [한국어](https://github.com/vilmire/adhdev/blob/HEAD/README.ko.md)

# ADHDev

**The control plane for your coding agents: every agent on every machine in one view, one shared task queue, and only work that passes your tests reaches `main`.**

AI coding agents have become long-running background workers. ADHDev is the control plane for them: launch, watch, approve, and steer agent sessions from a web or mobile dashboard — Claude Code, Codex, Kimi, Cursor CLI, Antigravity CLI side by side, across every machine you own — and hand off convergence to an unattended pipeline that merges finished work into `main`.

**Parallel agents without the collisions.** Every task runs in its own git worktree; the Refinery gates, verifies, and rebases finished work onto main, merging only if main hasn't moved — no merge-day hangover.

Website: **[adhf.dev](https://adhf.dev)** · Docs: **[docs.adhf.dev](https://docs.adhf.dev)**

**Try it in one command:** `npx @adhdev/daemon-standalone`, then open http://localhost:3847.

**The loop:** describe a task in chat → the coordinator files it, tags it, queues it → an idle machine claims it into a…

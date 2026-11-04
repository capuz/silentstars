---
repo: "uniquechao/PandaDOS"
name: "PandaDOS"
description: "Your self-hosted control plane for Claude Code and Codex. Turn issues into queued, observable, approval-aware coding workflows—from any browser."
readmeQualityOk: true
url: "https://github.com/uniquechao/PandaDOS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 268
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-07-31T06:01:34Z"
lastCommitAt: "2026-11-04T10:48:35Z"
lastReleaseAt: "2026-09-30T02:25:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 11
maintainers: ["uniquechao"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce9c5c101e737d5cab80c41d5b5cf392e174af7d521b5449aaf2b0f04f671d7a/uniquechao/PandaDOS"
---

# PandaDOS — Long-running autopilot for Claude Code and Codex

PandaDOS is an open-source, self-hosted control plane that turns Claude Code and Codex into
long-running, issue-driven coding agents. You define outcomes and make the important product or
architecture decisions; PandaDOS keeps the queue moving, preserves context, handles routine
approvals, watches progress, records results, and brings you back only when a real decision is
needed.

[简体中文](https://github.com/uniquechao/PandaDOS/blob/HEAD/README.zh-CN.md)

[Why PandaDOS](#why-pandados) · [Quick start](#quick-start) ·
[Your first 10 minutes](#your-first-10-minutes) · [How it works](#how-it-works) ·
[24/7 deployment](#run-pandados-247) · [Security](#security)

> The workspace, users, issues, branches, and project names in the screenshots are sanitized demo
> data.

## Why PandaDOS

Claude Code and Codex are excellent native coding agents. PandaDOS does not replace them or hide
their terminals. It adds the operating system around them:

- **Work is driven by issues, not repeated chat prompts.** Queue outcomes, acceptance criteria, and
  priorities, then let the agent continue through planning, implementation, verification,…

---
repo: "PerpetualSoftware/pad"
name: "pad"
description: "Project Management for the agent era"
readmeQualityOk: true
url: "https://github.com/PerpetualSoftware/pad"
homepage: "https://getpad.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 23]
topics: ["ai-agents", "claude-code", "cli", "cursor", "golang", "local-first", "mcp-server", "open-source", "project-management", "self-hosted"]
stars: 195
forks: 25
openIssues: 6
closedIssues: 38
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2026-03-26T13:39:22Z"
lastCommitAt: "2026-10-26T20:59:51Z"
lastReleaseAt: "2026-05-03T05:43:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 32
maintainers: ["xarmian", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c9b905be68283ed7ab05392b297d842fbecf31df2ce77b26532743a8ac69559/PerpetualSoftware/pad"
discussionCount: 1
---

&nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;

---

> One binary. Local-first. No sign-up. Pad gives you a CLI, a web UI, and an AI agent skill — all backed by SQLite, all running on your machine. Your project data stays on your laptop — unless you take it to [Pad Cloud](https://app.getpad.dev).

## Quick Start

```bash
brew install PerpetualSoftware/tap/pad
cd your-project
pad init                    # configure, auth, workspace, AI skill — all in one
pad server open             # opens the web UI at localhost:7777
```

`pad init` is the smart entry point — it auto-detects what's needed, walks you through each step, and is safe to re-run anytime (it skips finished steps and prints a status summary).

Then, in a fresh agent session in your project, say:

```
/pad onboard
```

Your new workspace ships with the canonical `onboard` playbook auto-activated. The agent walks an interview, inspects your codebase if it has shell access, and adapts your workspace's collections, conventions, roles, and playbooks to match the project. It's the fastest way to go from empty workspace to "okay, this is mine."

## Why Pad?

Tools like…

---
repo: "PerpetualSoftware/pad"
name: "pad"
description: "Project Management for the agent era"
readmeQualityOk: true
url: "https://github.com/PerpetualSoftware/pad"
homepage: "https://getpad.dev"
language: "Go"
languages: ["Go"]
languagePcts: [65]
topics: ["ai-agents", "claude-code", "cli", "cursor", "golang", "local-first", "mcp-server", "open-source", "project-management", "self-hosted"]
stars: 132
forks: 22
openIssues: 8
closedIssues: 24
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2026-03-26T13:39:22Z"
lastCommitAt: "2026-08-24T04:22:17Z"
lastReleaseAt: "2026-05-03T05:43:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 32
maintainers: ["xarmian", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a575c8366926db2dc177d5a57d7e8b32fcbe9454d2dde6a32e83d0f65266ce9f/PerpetualSoftware/pad"
discussionCount: 1
---

<h1 align="center">Pad</h1>
  </p>
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
    &nbsp;·&nbsp;
  </p>
</p>

---

> One binary. Local-first. No accounts required. Pad gives you a CLI, a web UI, and an AI agent skill — all backed by SQLite, all running on your machine. Your project data stays on your laptop — unless you take it to [Pad Cloud](https://app.getpad.dev).

</p>

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

Your new workspace ships with the canonical `onboard` playbook auto-activated. The agent walks an interview, inspects your codebase if it has shell access, and adapts your workspace's collections, conventions, roles, and playbooks to match the project. It's the fastest way to go from…

---
repo: "johnlindquist/codex-imps"
name: "codex-imps"
description: "Single-purpose, isolated Codex SDK agents for common CLI tools (~6K tokens vs ~22K default)"
url: "https://github.com/johnlindquist/codex-imps"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 46]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-27T22:14:06Z"
lastCommitAt: "2026-07-01T07:04:46Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 48
maintainers: ["johnlindquist"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f1058cf53141df91d44b8a9c4ba7c3f884386d471120c9e0cc283746e77b52/johnlindquist/codex-imps"
---

# codex-imps

Single-purpose, isolated [Codex SDK](https://www.npmjs.com/package/@openai/codex-sdk) agents — **imps** — for common CLI tools. An imp is small, fast, and bound to exactly one tool. Each imp runs with ~6K input tokens instead of the default ~22K — faster, cheaper, and focused. Interactive mode is **on by default**; explicit non-interactive runs use a warm background imp for ~2x lower latency.

All imps start with `imp-` so you can type `imp-` and tab-complete to summon the whole roster.

Where is all this headed? [VISION.md](./VISION.md) — the perfect future we're building toward and the creed every change is measured against.

## What is an imp?

An imp is a single executable TypeScript file that wraps a CLI tool with an isolated Codex agent. It:

- Loads **zero** user-space config (no plugins, skills, hooks, memories, or MCP servers)
- Replaces the ~20K system prompt with a focused, Oracle-tuned prompt optimized for small tool agents
- Disables unused tool schemas (Gmail, Slack, web, imagegen) via feature flags
- Symlinks only `auth.json` for login — token refreshes propagate automatically
- Uses `gpt-5.5` with `medium` reasoning effort by default
- Opens the…

---
repo: "ensemblr-hq/ensemblr"
name: "ensemblr"
description: "Orchestrator for Pi and Claude Code. Every stream of work gets its own git worktree, and an agent can drive the app itself — spawn sub-agents, delegate, integrate."
readmeQualityOk: true
url: "https://github.com/ensemblr-hq/ensemblr"
homepage: "https://www.ensemblr.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "claude-code", "coding-agents", "electron", "git-worktree", "macos", "mcp", "multi-agent", "orchestrator", "pi-agent"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-04T12:34:52Z"
lastCommitAt: "2026-09-09T08:18:09Z"
lastReleaseAt: "2026-08-20T16:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["psoldunov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/06f6c0b504b159505b97eb5b86dc4632f8e985f934cc73f424c2d011e2128c0b/ensemblr-hq/ensemblr"
---

</p>

# Ensemblr™

**A desktop orchestrator for multi-agent coding work, driving the Pi CLI or the Claude Code CLI — whichever
you already run.**

The agent inside a workspace can drive the app itself: spawn sub-agents into their own chat tabs, delegate
a unit of work to each, block until they finish, read their reports, and integrate the results. That
permission-gated surface is **Ensemblr Control**, and the worktree manager underneath it exists to make it
safe — every stream of work gets its own git worktree, branch, and review path, so a fan-out of agents
cannot collide.

**One agent sits above all of it.** The [**Concierge**](#the-concierge--one-agent-above-every-workspace)
belongs to no workspace: it reads across every project you have open, remembers what it learns between
conversations, and never writes a file itself — real change is delegated to an orchestrator it spawns into
the workspace that needs it.

**macOS on Apple silicon, or Linux on x86-64. Bring your own agent CLI — Pi or Claude Code, one is enough.
`git` and an authenticated `gh` are required.**

No Ensemblr account, no sign-in, no cloud sync, no telemetry. State is a local SQLite database, secrets go
to the OS…

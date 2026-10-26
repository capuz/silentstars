---
repo: "griffinwork40/agent-afk"
name: "agent-afk"
description: "The coding agent you don’t have to watch. Start a task and walk away. AFK builds the feature, verifies its own work, and texts you when it’s done. You come back to a receipt of every step, every decision, and what’s waiting on you. If it’s unsure, it stops and asks instead of guessing."
readmeQualityOk: true
url: "https://github.com/griffinwork40/agent-afk"
homepage: "https://agentafk.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agents", "ai", "cli", "harness-engineering", "self-improving", "afk", "agent-framework", "anthropic", "autonomous-agent", "claude"]
stars: 62
forks: 17
openIssues: 60
closedIssues: 1419
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-06-05T10:42:23Z"
lastCommitAt: "2026-10-26T18:06:34Z"
lastReleaseAt: "2026-06-07T22:42:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["griffinwork40", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73cb38ba2792ace2f0a0884a257e3c1e92df0156f7bacb561f65c677940ab030/griffinwork40/agent-afk"
---

# Agent AFK

**Start a task and walk away.** AFK builds the feature, verifies its own work, and texts you when it's done. You come back to a receipt of every step, every decision, and what's waiting on you.

Open source. Runs locally. Works with any model provider, including local models. Your keys, your machine, your rules.

    Your browser does not support the video tag.

> ⭐ **Like the idea of an agent you can walk away from? [Star the repo](https://github.com/griffinwork40/agent-afk/stargazers)** -- it's the fastest way to help other people find it.

## Quick Start

```bash
npm install -g agent-afk    # Node 22.22.2–22.x, 24.15–24.x, or 26+ (23.x and 25.x excluded)
afk login                   # authenticate (auto-detects Claude Code / Codex creds)
afk doctor                  # verify everything works
afk chat "hello"             # first real conversation

# Preview a behaviour change before applying it
afk whatif --append "Always ask a clarifying question before using tools." --verify
```

That's it. You're in.

**Using pnpm?** `pnpm add -g agent-afk` works, but pnpm 10 and later block build scripts by default and skips `postinstall` (with an easy-to-miss warning — see…

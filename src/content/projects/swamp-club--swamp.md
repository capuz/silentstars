---
repo: "swamp-club/swamp"
name: "swamp"
description: "Stinemates, Watson, Adam, Mahir, Paul "
readmeQualityOk: true
url: "https://github.com/swamp-club/swamp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 471
forks: 35
openIssues: 0
closedIssues: 447
watchers: 3
contributors: 37
recentReleases: 0
createdAt: "2026-01-28T17:27:17Z"
lastCommitAt: "2026-07-04T22:19:37Z"
lastReleaseAt: "2026-02-09T21:25:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 25
maintainers: ["stack72", "keeb", "adamhjk"]
openGraphImageUrl: "https://opengraph.githubassets.com/47546b42469b13ed8eb4b658c73ca46d72760a77edfcb081f17f858dcd8e92e3/swamp-club/swamp"
---

</p>

# Swamp

Deterministic Automation for AI Agents.

Swamp is a CLI that supercharges AI agents to create operational workflows that
are reviewable, shareable, and accurate. Built for agents, there to empower
humans. All the data lives in the `.swamp/` (the swamp).

Come join the [swamp party on discord](https://discord.gg/swamp-club).

## Getting Started

```bash
curl -fsSL https://swamp-club.com/install.sh | sh
```

### Quick Start

```bash
swamp repo init                    # Claude Code (default)
swamp repo init --tool cursor      # Cursor
swamp repo init --tool opencode    # OpenCode
swamp repo init --tool codex       # Codex
```

Start your AI agent in the repo and tell it what you want to do. Just ask:

- _"Manage my EC2 fleet — inventory every instance across all regions and flag
  anything without a cost-center tag"_
- _"Set up a workflow to check my bare metal Minecraft servers are online and
  under 80% memory"_
- _"Audit our DNS records and compare them against what's actually running"_
- _"Build a workflow that rotates database credentials and stores them in the
  vault"_

The agent will create models, wire up workflows, and run them — all reviewable
in `.swamp/`…

---
repo: "claudification/claudewerk"
name: "claudewerk"
description: "Distributed session monitoring for Claude Code - aggregate and control multiple sessions from a single dashboard"
readmeQualityOk: true
url: "https://github.com/claudification/claudewerk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 8
forks: 1
openIssues: 6
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-04T08:43:14Z"
lastCommitAt: "2026-07-22T06:16:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 48
maintainers: ["icanhasjonas"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d9207e72ffa681987e72d19825d5f37a6ffb782bd5148e927e1d43d0b83d475/claudification/claudewerk"
---

```
   ________    ___   __  ______  _______       ____________  __ __
  / ____/ /   /   | / / / / __ \/ ____/ |     / / ____/ __ \/ //_/
 / /   / /   / /| |/ / / / / / / __/  | | /| / / __/ / /_/ / ,<
/ /___/ /___/ ___ / /_/ / /_/ / /___  | |/ |/ / /___/ _, _/ /| |
\____/_____/_/  |_\____/_____/_____/  |__/|__/_____/_/ |_/_/ |_|
        ┌───────────────────────────────────────────────┐
        │  DISTRIBUTED SESSION FABRIC FOR CLAUDE CODE   │
        └───────────────────────────────────────────────┘
```

---

> **v1.0.0 / Wire Protocol v2 (2026-05-04) is a HARD BREAK.**\
> Old agent hosts can't talk to a new broker, and vice versa. Upgrade
> both sides at the same time:
> ```bash
> bun install -g @claudewerk/claude-agent-host @claudewerk/sentinel
> ```
> See [CHANGELOG.md](https://github.com/claudification/claudewerk/blob/HEAD/CHANGELOG.md) for what changed and why. Old
> binaries that try to connect get a `protocol_upgrade_required` reply
> + a copy-pastable upgrade command in the dashboard.

---

## What is this?

**CLAUDEWERK** turns Claude Code from a local-only CLI tool into a remotely
accessible, multi-machine AI workstation you can monitor and control from
anywhere.

Run…

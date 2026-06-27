---
repo: "claudification/claudewerk"
name: "claudewerk"
description: "Distributed session monitoring for Claude Code - aggregate and control multiple sessions from a single dashboard"
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
lastCommitAt: "2026-06-27T06:24:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 48
maintainers: ["icanhasjonas", "ziadsawalha"]
openGraphImageUrl: "https://opengraph.githubassets.com/96a89a72c9a1a0dbb6a8cb7ee8e953e51b9e6f480cf56a37eb240d1f8ea35600/claudification/claudewerk"
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
> See [CHANGELOG.md](./CHANGELOG.md) for what changed and why. Old
> binaries that try to connect get a `protocol_upgrade_required` reply
> + a copy-pastable upgrade command in the dashboard.

---

## What is this?

**CLAUDEWERK** turns Claude Code from a local-only CLI tool into a remotely
accessible, multi-machine AI workstation you can monitor and control from
anywhere.

Run `rclaude` instead of `claude`. It wraps the CLI with a…

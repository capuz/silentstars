---
repo: "aussedatlo/banalize"
name: "banalize"
description: "Ban IPs from matching regex with multiple stream support"
url: "https://github.com/aussedatlo/banalize"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [51, 46]
stars: 5
forks: 0
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-08-31T20:29:49Z"
lastCommitAt: "2026-06-26T06:46:09Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 75
maintainers: ["aussedatlo", "dependabot[bot]", "Jason-Deroubaix"]
openGraphImageUrl: "https://opengraph.githubassets.com/b133faa6b04abfb22d89af5e843284ced864a6ebec4f6010fb534876107d074e/aussedatlo/banalize"
---

**A lightweight intrusion prevention system written in Rust.**

</div>

---

Banalize tails log files, extracts IP addresses via configurable regex patterns, and blocks offenders using `iptables` after a configurable number of matches within a time window.

## Architecture

```
apps/
  core/   — Rust binary  API + iptables integration   →  :6040
  ui/     — Vite + React dashboard (shadcn/ui)         →  :6041 (docker) / :5173 (dev)
```

## How it works

```
log file → regex match → IP extracted → threshold reached → iptables DROP rule
                                                          → auto-expires after ban_time
```

- **Watchers** tail one log file per config using inotify
- **Matches** are counted in an in-memory store (per config + IP) for fast threshold checks, rebuilt from the SQLite audit log on restart
- **Bans** are applied synchronously via iptables and persisted across restarts
- **Events** (match, ban, unban) are recorded asynchronously in SQLite for auditing
- **Cleaner** runs periodically to expire bans and matches outside their time windows
- **REST API** on port 6040 — documented at `GET /api/openapi.json`, UI at `GET /swagger`
- **Dashboard** at…

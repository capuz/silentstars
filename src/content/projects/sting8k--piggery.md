---
repo: "sting8k/piggery"
name: "piggery"
description: "Piggery 🐖 - Lợn cày tasks. Your coding agents are pigs; Piggery is the farm. Form any team you like from pi, Claude Code, Codex and more, and the farm keeps every pig in its pen."
readmeQualityOk: true
url: "https://github.com/sting8k/piggery"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 45
forks: 9
openIssues: 0
closedIssues: 19
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-28T11:33:34Z"
lastCommitAt: "2026-11-05T07:56:07Z"
lastReleaseAt: "2026-10-03T10:30:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["sting8k", "sting9k", "sting-lon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4095fb0ef65e7bbefb0a94304fcb5fa79b18703d55866302604a74a7a0463f83/sting8k/piggery"
---

https://github.com/user-attachments/assets/0b4871d7-96ec-4262-a8cc-3373800ba68d

Work goes into a pig's trough and waits there until the pig is back. It only counts as eaten
when the job is actually done, not when the pig sniffed at it. Every pig also has a pen: its
role says who it may talk to and whether it may have piglets (workers). The farm checks the
fence itself, so no amount of sweet talk gets a pig through it.

pi, Claude Code, Codex, omp, dsh and opencode pigs all live on the same farm and talk to each other. The
farm is one Go binary and a SQLite file, and nothing runs in the cloud.

## How it works

```mermaid
flowchart LR
  a["agent on pi"] <-->|mail| farm
  b["agent on Claude Code"] <-->|mail| farm
  c["agent on …"] <-->|mail| farm
  farm(("🐖 piggery<br/>mailbox + gate")) --- shape[["a team layout<br/>lead → peers<br/>peer ↔ peer<br/>…"]]
  shape --> work[/"your tasks and projects,<br/>plowed"/]
```

- **One mailbox for every agent**, whatever its harness. A pi session can mail a Claude Code
  session, and a worker's answer wakes whoever is waiting for it.
- **A gate on every mail and every spawn.** It checks them against the team's layout, a small
  YAML file you…

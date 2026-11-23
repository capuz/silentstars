---
repo: "takodotid/strait"
name: "strait"
description: "A virtual service between Kubernetes clusters at different sites"
readmeQualityOk: true
url: "https://github.com/takodotid/strait"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 6
forks: 0
openIssues: 4
closedIssues: 43
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T01:04:50Z"
lastCommitAt: "2026-11-23T10:29:14Z"
lastReleaseAt: "2026-11-05T23:29:57Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["Hazmi35", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0684bcef9309eac2354fcf41861a23b3a877a4d1b1a11fdc045400fff3918994/takodotid/strait"
---

## What it does

- **One name at every site.** The application connects to `pg.app.svc:5432` everywhere. It holds no host lists, address maps or failover logic. When the PostgreSQL primary moves to another site, the name follows.
- **Routes, never acts.** Strait never fails over, promotes or demotes a workload. The workload's own controller (such as CloudNativePG) or the operator moves the primary. Strait follows. Plugins read a workload's state with read-only permissions.
- **Routes nowhere rather than to a guess.** When Strait can't tell which member is active, the name has no endpoints. A new connection is refused at once, and the client retries.
- **Each site decides its own route.** Its controller reads its own members and polls what the other sites observe, over a `direct` private path or a `wireguard` tunnel between the gateways. When the active link fails, new connections move to the next one within 5 seconds.
- **A read-only CLI.** `strait explain` says why a name points where it does. `strait --skill` prints a skill document for AI agents.

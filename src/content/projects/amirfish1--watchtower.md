---
repo: "amirfish1/watchtower"
name: "watchtower"
description: "WatchTower — run fleets of AI coding-agent workers and know which queues are stuck. CLI-first (wt)."
readmeQualityOk: true
url: "https://github.com/amirfish1/watchtower"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-06-26T03:42:25Z"
lastCommitAt: "2026-10-29T05:50:02Z"
lastReleaseAt: "2026-10-01T17:45:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["amirfish1"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcc09ee47ee00dfb05f9f0b1a96db46cb208e23bb8ca5860d3fed3246e3faab1/amirfish1/watchtower"
---

# WatchTower

**Run fleets of AI coding-agent workers, unattended.** File tickets into named queues. Workers drain them automatically. `wt status` shows which queues are stuck: nothing more, nothing less.

The engine is a single durable JSON queue (append-only, file-locked): stdlib-only Python, zero runtime dependencies. WatchTower is a standalone product. It does not require [Claude Command Center](https://github.com/amirfish1/claude-command-center) or any other desktop app to run; every command below works from a plain terminal. A couple of optional integrations (an HTTP delegate for one alternate messaging transport, a shared model-default file) light up automatically if CCC happens to be installed on the same machine, and are called out explicitly where they appear. Nothing in the core queue, worker, or dashboard path depends on them.

## The 30-second demo

The signature feature is `wt wait`: it blocks until a queue has zero open tickets, so you can gate a script on a fleet of agents finishing their work. See it end to end, with no agent CLI required, in one script:

```bash
git clone https://github.com/amirfish1/watchtower.git
cd watchtower && pip install -e .…

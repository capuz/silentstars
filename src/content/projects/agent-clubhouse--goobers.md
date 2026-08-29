---
repo: "Agent-Clubhouse/Goobers"
name: "Goobers"
description: "Workflow orchestration for agent teams "
readmeQualityOk: true
url: "https://github.com/Agent-Clubhouse/Goobers"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 5
forks: 6
openIssues: 644
closedIssues: 1533
watchers: 1
contributors: 15
recentReleases: 8
createdAt: "2026-07-13T00:06:56Z"
lastCommitAt: "2026-08-29T17:28:04Z"
lastReleaseAt: "2026-08-22T04:31:24Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["masra91", "krishnapatel17", "C-Azzone416"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad26e67fa06f19062d604d82fc4a3dc842bcc8047689610a92eeb81545384dd3/Agent-Clubhouse/Goobers"
---

# Goobers

**Goobers is an open, self-hosted platform for running an AI workforce against
your repositories and backlog.** Instead of giving one agent an open-ended
prompt, you define a team of roles (a *gaggle*) and the workflow, permissions,
checks, retry limits, and human handoffs that govern its work.

It is for a solo builder who wants dependable issue-to-PR automation, a small
team that wants agents to work within its existing review and CI policy, or a
larger organization that needs the same definitions to remain useful as its
execution infrastructure grows. Today the shipped runner is one Go binary that
runs on one machine. Cloud-scale orchestration is an explicit design goal, not a
current product claim; the cluster entrypoints in this repository remain
quarantined. What is intended to stay constant is the configuration and run
contract, so scaling execution does not require redefining the workforce.

## Install

Install the current `v0.1.0` release on Linux or macOS:

```sh
/bin/sh -c "$(curl -fsSL https://github.com/Agent-Clubhouse/Goobers/releases/download/v0.1.0/install.sh)" \
  -- v0.1.0
```

The installer verifies the downloaded archive against the release checksum…

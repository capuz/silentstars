---
repo: "eyupio/zoomies"
name: "zoomies"
description: "Zoomies is a lightweight, self-hosted GitHub Actions runner fleet controller. Ephemeral runners by default, GitHub App auth, webhook-driven autoscaling, multi-host agents, a polished live web UI, and a one-line interactive installer. Single Go binary, SQLite, no Kubernetes."
readmeQualityOk: true
url: "https://github.com/eyupio/zoomies"
homepage: "https://zoomies.sh/"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["github-runner", "github-runners", "github-runners-management", "runner", "runners", "self-hosted", "selfhosted", "actions-runner", "actions-runner-controller", "actions-runners"]
stars: 56
forks: 44
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-04T10:25:01Z"
lastCommitAt: "2026-10-16T08:27:42Z"
lastReleaseAt: "2026-09-25T14:59:51Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 53
maintainers: ["jnnngs", "Copilot", "zoomies-eyupio2[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1357002726/112f8bcc-fe65-4034-99a1-0eae12ddc388"
fundingLinks: ["KO_FI:https://ko-fi.com/eyupio"]
---

Repomix-generated context: [`.zoomies/ai-context/`](https://github.com/eyupio/zoomies/tree/zoomies-ai-context/.zoomies/ai-context). The badge shows workflow status, not context freshness or assistant connectivity. Private repository badges require GitHub access.

# Give your GitHub Actions runners the Zoomies.

**Free and open source.** Install in minutes, manage every runner from a live
web UI, and move off static runners without rebuilding your CI.

Zoomies gives each job a fresh runner, scales across the hosts and runner
operating systems you already use, and makes the fleet easy to see and
operate, without Kubernetes and without a database server.

Single Go binary. SQLite. AGPL-3.0.

*The [support matrix](https://zoomies.sh/#what-is-qualified) separates what a
test has actually run on from what merely builds. Read it before you put
anything precious on this.*

```sh
curl -fsSL https://zoomies.sh/install.sh | sh
```

Just looking? [Explore the live demo](https://demo.zoomies.sh/) without
installing anything or signing in. To run a local demo, add `-s -- --demo`
after `sh` and nothing is installed: a
controller with a fleet already in it runs on your machine only, and goes when…

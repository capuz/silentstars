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
lastCommitAt: "2026-10-13T10:57:38Z"
lastReleaseAt: "2026-09-25T14:59:51Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 53
maintainers: ["jnnngs", "claude", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1357002726/112f8bcc-fe65-4034-99a1-0eae12ddc388"
fundingLinks: ["KO_FI:https://ko-fi.com/eyupio"]
---

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

Just looking? Add `-s -- --demo` after `sh` and nothing is installed: a
controller with a fleet already in it runs on your machine only, and goes when
you press Ctrl-C.

**[zoomies.sh](https://zoomies.sh)** ·
[Quick start](https://zoomies.sh/quickstart/) ·
[See the web UI](https://zoomies.sh/ui/) ·
[Architecture](https://zoomies.sh/architecture/) ·
[Configuration](https://zoomies.sh/configuration/) ·
[Migrating](https://zoomies.sh/migration/) ·
[Security](https://zoomies.sh/security/) ·…

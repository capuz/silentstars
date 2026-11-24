---
repo: "Claiyc/pelican-k8s"
name: "pelican-k8s"
description: "A Kubernetes-native backend for https://pelican.dev"
readmeQualityOk: true
url: "https://github.com/Claiyc/pelican-k8s"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["docker", "game-panel", "gameserver", "k8s", "kubernetes", "pelican", "pterodactyl", "game-server-hosting", "self-hosted", "go"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-15T20:21:15Z"
lastCommitAt: "2026-11-24T14:06:25Z"
lastReleaseAt: "2026-10-14T14:03:05Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["Claiyc", "dependabot[bot]", "jadrian2006"]
openGraphImageUrl: "https://opengraph.githubassets.com/540c2c6b7ca62be3c4123ed27b59803f5276b45d4035125ac9345989baa5b5ad/Claiyc/pelican-k8s"
---

**A Kubernetes-native backend for [Pelican Panel](https://pelican.dev).**

pelican-k8s presents a whole cluster to the Panel as a single Wings node.
Each game server becomes a `GameServer` custom resource, which an operator
reconciles into ordinary pods: a small agent pod with Wings embedded as a
library, and a game pod that exists only while the server is on. The Panel,
the eggs and the Wings core logic stay unmodified.

| Component | What it does |
|---|---|
| **gateway** | Looks like one Wings node to the Panel. Turns Panel calls into `GameServer` changes and proxies console, files and SFTP to the right pod |
| **operator** | Reconciles each `GameServer` into an agent pod, a game pod per run, PVC, Services, NetworkPolicies and install Jobs |
| **agent** | [Wings](https://github.com/pelican/wings) as a Go library, one pod per server: files, SFTP, console and backups whether the game runs or not |
| **shim** | Entrypoint of the game pod: PTY, signals, exit codes, stats and the console buffer |

[ARCHITECTURE.md](https://github.com/Claiyc/pelican-k8s/blob/HEAD/ARCHITECTURE.md) describes how the system works.

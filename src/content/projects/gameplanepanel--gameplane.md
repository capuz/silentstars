---
repo: "GameplanePanel/Gameplane"
name: "Gameplane"
description: "Kubernetes-native game server control panel. Idle auto-sleep with wake-on-connect, restic backups, OIDC + RBAC, OCI game templates, relay tunnels. Open-source (AGPL-3.0) alternative to CubeCoders AMP and Pterodactyl that runs the same way on a k3s homelab and a multi-node cluster. Beta."
readmeQualityOk: true
url: "https://github.com/GameplanePanel/Gameplane"
homepage: "https://gameplane.net"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 31]
topics: ["game-panel", "game-server", "game-servers", "go", "golang", "helm", "kubernetes", "operator", "pterodactyl", "self-hosted"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-06-22T22:19:06Z"
lastCommitAt: "2026-10-09T18:57:20Z"
lastReleaseAt: "2026-10-06T04:10:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["ValgulNecron", "claude", "Baylem"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1277428491/95914c7a-3f5c-4083-8809-d92e0cd62782"
discussionCount: 0
---

# Gameplane

A Kubernetes-native game server control panel. Open-source alternative to
[CubeCoders AMP](https://cubecoders.com/AMP) with a K8s backend instead of
Docker — scales from a single-node k3s homelab to multi-node production
clusters without changing the operational model.

> Status: **pre-v1 release** (`v0.3.0`). The operator, API, agent, and dashboard
> are feature-complete for the v1 scope and stabilized for external testing.
> See [Pre-v1 status & known limitations](#pre-v1-status--limitations) before
> running it for anything you can't afford to lose.

**Website:** <https://gameplanepanel.github.io/website/> — features,
docs, and comparisons. Source lives in
[`GameplanePanel/website`](https://github.com/GameplanePanel/website),
mounted here as the `website/` submodule.

## Screenshots

Screenshots are captured against mocked data for consistency and reproducibility; all UI layouts and components reflect the current dashboard.

| | |
|---|---|
|  |  |
| Login — local account or OIDC | Create server — pick a game template |
|  |  |
| Server detail — Events (diagnosing a failed start) | Admin Settings — General |
|  |  |
| Cluster — nodes at a glance | Server detail —…

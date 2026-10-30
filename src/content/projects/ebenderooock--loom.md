---
repo: "Ebenderooock/loom"
name: "loom"
description: "Loom is a media management / sourcing application"
readmeQualityOk: true
url: "https://github.com/Ebenderooock/loom"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [67, 30]
stars: 15
forks: 2
openIssues: 10
closedIssues: 53
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2026-05-05T20:30:52Z"
lastCommitAt: "2026-10-30T10:23:00Z"
lastReleaseAt: "2026-10-30T08:42:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 47
maintainers: ["Ebenderooock", "ebenderoock"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/Ebenderooock/loom"
discussionCount: 1
---

# Loom

> Unified media automation — **Radarr + Sonarr + Prowlarr** in one
> modern, container-native, observable platform. Single Go binary,
> SQLite by default, Postgres-ready, K8s-native.

> **Status: alpha.** The first tagged release ([`v0.1.0`](https://github.com/ebenderooock/loom/releases))
> is out — published binaries and container images are available. APIs and
> schema may still change. See the [roadmap](https://github.com/Ebenderooock/loom/blob/HEAD/ROADMAP.md) for what's done,
> what's in flight, and what's next. Issues and PRs welcome.

Loom is a from-scratch, like-for-like replacement of the *arr stack
(Radarr, Sonarr, Prowlarr) with a modernised UI, first-class
observability, and a single binary that runs anywhere. It is
**wire-compatible** with the existing self-hosted media ecosystem, so
Overseerr, Jellyseerr, Bazarr, Notifiarr, Tautulli, Plex, Jellyfin and
Emby keep working unchanged.

> **Name rationale — "Loom":** short, catchy, evokes weaving disparate
> threads (indexers, download clients, metadata providers, libraries)
> into a uniform fabric. Working name; trivial to rename later.

## Why Loom?

| | *arr stack | Loom |
|---|---|---|
| Apps to deploy | 3+…

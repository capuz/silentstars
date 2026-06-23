---
repo: "Silo-Server/silo-android"
name: "silo-android"
description: "Native Android phone and Android TV clients for the Silo self-hosted media server."
url: "https://github.com/Silo-Server/silo-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["silo"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-05-23T00:26:47Z"
lastCommitAt: "2026-06-23T23:28:37Z"
lastReleaseAt: "2026-06-23T23:17:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["RXWatcher", "Quick104"]
openGraphImageUrl: "https://opengraph.githubassets.com/e41558a6f422c44f30cb5090e0ad6c8785ee5a264dd989ffac9f9fb4c66c815c/Silo-Server/silo-android"
---

# Silo Android

Android **phone** and **Android TV** clients for the [Silo](https://github.com/Silo-Server/silo-server) self-hosted media server — stream and download your movies, shows, music, audiobooks, and ebooks, with quality-aware playback and multi-server/multi-profile support.

Built as a Kotlin Multiplatform project: one shared business-logic core, two Jetpack Compose apps (touch + 10-foot TV). The repo preserves the existing application IDs and Kotlin package namespaces (`com.continuum.app`) for install continuity, but all user-facing names and server references use Silo.

> **Status:** Early WIP (`v0.1.0`). The architecture is solid and the feature surface is broad; some areas are intentionally "bones-level" and under active redesign (see [Roadmap](#roadmap)).
>
> **Current exposure note:** Requests, Admin, and Watch Together are not currently accessible in the Android phone or Android TV apps. Some shared repositories, routes, or older screen code may still exist, but there is no production user entry point for those surfaces on this branch.

---

## Table of contents

- [What's inside](#whats-inside)
- [Feature overview](#feature-overview)
-…

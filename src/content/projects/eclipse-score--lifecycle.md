---
repo: "eclipse-score/lifecycle"
name: "lifecycle"
description: "Repository for the lifecycle feature"
readmeQualityOk: true
url: "https://github.com/eclipse-score/lifecycle"
homepage: "https://eclipse-score.github.io/lifecycle"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 8
forks: 36
openIssues: 103
closedIssues: 231
watchers: 1
contributors: 60
recentReleases: 7
createdAt: "2025-09-09T09:52:08Z"
lastCommitAt: "2026-11-13T15:05:17Z"
lastReleaseAt: "2026-10-29T14:05:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 97
maintainers: ["eclipse-score-bot", "NicolasFussberger", "MaciejKaszynski"]
openGraphImageUrl: "https://opengraph.githubassets.com/2331be2a6d6978f18d9f88c24b2497d145c0d89dda966672a27f0486152f798d/eclipse-score/lifecycle"
postedAt: "2026-08-31T10:05:29.134Z"
---

# Lifecycle & Health

## Overview

Portable and high-performance implementation of the Lifecycle feature for the S-CORE project.

High level functionality provided by Lifecycle:

* **Launch Manager**
    * **Portability**: LaunchManager works with multiple operating systems including Linux and QNX8.
    * **Component Lifecycle Control**: Spawning and terminating OS processes according to their configured parameters (executable path, user/group identity, environment, scheduling policy, etc.).
    * **Run Target Management**: Determining which components are active at any given time by activating and deactivating named Run Targets in response to requests from a StateManager.
    * **Dependency Resolution**: Ensuring components start and stop in the correct order based on declared startup and shutdown dependencies.
    * **Failure Recovery**: Detecting unexpected process termination and executing configured recovery actions such as restarting a component or switching to a recovery Run Target.
    * **External Watchdog Integration**: Compatible with external watchdogs through a configurable watchdog device file.
* **Health Monitor**
    * **Supervision Types**: Supports Heartbeat,…

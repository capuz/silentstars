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
stars: 6
forks: 37
openIssues: 98
closedIssues: 212
watchers: 1
contributors: 57
recentReleases: 7
createdAt: "2025-09-09T09:52:08Z"
lastCommitAt: "2026-11-03T15:30:55Z"
lastReleaseAt: "2026-10-29T14:05:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 100
maintainers: ["NicolasFussberger", "cameron-craig-etas", "eclipse-score-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/83e126be7510390b167be79adc94d473db6a006749e0538f65b8371c64257cc6/eclipse-score/lifecycle"
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

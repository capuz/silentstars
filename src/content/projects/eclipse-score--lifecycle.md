---
repo: "eclipse-score/lifecycle"
name: "lifecycle"
description: "Repository for the lifecycle feature"
readmeQualityOk: true
url: "https://github.com/eclipse-score/lifecycle"
homepage: "https://eclipse-score.github.io/lifecycle"
language: "C++"
languages: ["C++"]
languagePcts: [69]
stars: 5
forks: 32
openIssues: 94
closedIssues: 135
watchers: 2
contributors: 252
recentReleases: 4
createdAt: "2025-09-09T09:52:08Z"
lastCommitAt: "2026-09-01T07:59:41Z"
lastReleaseAt: "2026-08-31T14:43:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 95
maintainers: ["NicolasFussberger", "MaciejKaszynski", "danth"]
openGraphImageUrl: "https://opengraph.githubassets.com/571a1baf424f73d05b323fbcb122fd7d311831315461a1b9fbf1866efad0c451/eclipse-score/lifecycle"
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
    * **External Watchdog Integration**: Compatible with external watchdogs through configurable watchdog device file.
* **Health Monitor**
    * **Supervision Types**: Supports Heartbeat,…

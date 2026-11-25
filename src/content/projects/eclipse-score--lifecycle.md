---
repo: "eclipse-score/lifecycle"
name: "lifecycle"
description: "Repository for the lifecycle feature"
readmeQualityOk: true
url: "https://github.com/eclipse-score/lifecycle"
homepage: "https://eclipse-score.github.io/lifecycle"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 8
forks: 39
openIssues: 96
closedIssues: 249
watchers: 1
contributors: 62
recentReleases: 6
createdAt: "2025-09-09T09:52:08Z"
lastCommitAt: "2026-11-25T12:45:12Z"
lastReleaseAt: "2026-10-29T14:05:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 97
maintainers: ["eclipse-score-bot", "MaciejKaszynski", "NicolasFussberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2c9d2cf8240f86603d2be2be72c355ed4a91666384e261c4ad74e0bf4ca88e8/eclipse-score/lifecycle"
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

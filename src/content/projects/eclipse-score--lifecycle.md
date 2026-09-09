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
stars: 6
forks: 33
openIssues: 94
closedIssues: 146
watchers: 1
contributors: 48
recentReleases: 5
createdAt: "2025-09-09T09:52:08Z"
lastCommitAt: "2026-09-09T07:19:45Z"
lastReleaseAt: "2026-09-04T10:45:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 96
maintainers: ["danth", "MaciejKaszynski", "eclipse-score-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e8b73fbafcf218bc73a91ebb2050e375e7c175c3dc79dc89f8e8c6d49003be8/eclipse-score/lifecycle"
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

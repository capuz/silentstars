---
repo: "odtheking/OdinAddon"
name: "OdinAddon"
description: "This is an example project to demonstrate adding modules to OdinFabric using an external JAR."
readmeQualityOk: true
url: "https://github.com/odtheking/OdinAddon"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
stars: 6
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-26T17:11:15Z"
lastCommitAt: "2026-11-06T11:23:52Z"
lastReleaseAt: "2026-04-08T09:44:12Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 44
maintainers: ["poisonous888"]
openGraphImageUrl: "https://opengraph.githubassets.com/d724e400e873fc9d37508d39d241150a0381a467c64d46f71124ea76783afe3b/odtheking/OdinAddon"
---

# OdinFabric External Module Example

This is an example project to demonstrate adding modules to [OdinFabric](https://github.com/odtheking/OdinFabric) using an external JAR.

## Project Setup

To set up the project, follow the Fabric documentation for configuring your development environment:  
https://docs.fabricmc.net/develop/getting-started/setting-up

### Notes While Following the Wiki

- **IntelliJ IDEA is heavily recommended.**
- When selecting a project, **clone this repository** from GitHub.
- It should automatically add the **VM arguments required for hotswapping classes and mixins**.  
  If not, add them manually as described in the wiki page.  
  *(You must use the JetBrains Runtime mentioned in the wiki for this to work.)*

## Project-Specific Notes

- In `gradle.properties`, set `odin-version` to the version you want to build upon.  
  *(Both version numbers and commit hashes are supported.)*
- Under `src/main/java`, a `mixins` directory exists — this is where all your mixins should go.
- Under `src/main/kotlin` is your main source directory, where you can add:
    - Modules
    - Other code

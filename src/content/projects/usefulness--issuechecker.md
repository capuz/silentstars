---
repo: "usefulness/issuechecker"
name: "issuechecker"
description: "Find links on popular issue trackers and check their status. Github, Youtrack, ~IssueTracker~"
readmeQualityOk: true
url: "https://github.com/usefulness/issuechecker"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["github", "issues", "issue-tracker", "issue-management", "bug-tracker", "workaround", "links", "youtrack", "issuetracker"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-02-27T06:30:30Z"
lastCommitAt: "2026-07-22T06:09:37Z"
lastReleaseAt: "2025-06-28T16:38:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 58
maintainers: ["renovate[bot]", "mateuszkwiecinski"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcccbb6c2138d1d8d7f213ef8e62878b83f3ad8d47bda5741582ef84e4e94030/usefulness/issuechecker"
---

## Issuechecker
___

&nbsp;[](https://ktlint.github.io/)

## Purpose
In a project that reached maintenance phase there usually are multiple workarounds left to fix _in the future_.  
This tools helps to find all links and check if they have been fixed already.

Supported issue trackers:
- ✅ Jetbrains Youtrack  
- ✅ Github Issues
- ❌ [~Google IssueTracker~](https://issuetracker.google.com/issues/171647219)

## Usage
This repository contains a raw tool written kotlin, available on MavenCentral repository. 
Additionally, it exposes a fat Jar which serves as a CLI. 

The core dependency is available under:
```groovy
repositories.mavenCentral()

dependencies {
    implementation("com.github.usefulness:issuechecker:x.y.z")
}
```

### Common application
- **CLI** - A `jar` file available directly on Github Package Repository - [download page](https://github.com/usefulness/issuechecker/packages/641930) 
- **Gradle Plugin** - `com.starter.quality` plugin runs the tool automatically under `issueLinksReport` name - [source](https://github.com/usefulness/project-starter) 
- **Github Action** - ⏳ In progress ⏳ 

#### CLI 
```text
Usage: issue-checker-cli [OPTIONS]

Options:
  -s, --src,…

---
repo: "hmcts/cnp-jenkins-library"
name: "cnp-jenkins-library"
description: "Shared jenkins library"
readmeQualityOk: true
url: "https://github.com/hmcts/cnp-jenkins-library"
language: "Groovy"
languages: ["Groovy"]
languagePcts: [94]
topics: ["jenkins", "jenkins-library"]
stars: 38
forks: 12
openIssues: 3
closedIssues: 7
watchers: 155
contributors: 150
recentReleases: 10
createdAt: "2017-07-04T11:47:00Z"
lastCommitAt: "2026-10-23T08:47:17Z"
lastReleaseAt: "2026-10-07T09:55:17Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "release_machine"]
healthScore: 91
undervaluedScore: 46
maintainers: ["github-actions[bot]", "endakelly", "gunnertwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/09330e1fea78cb81ec83c12d50664fc6b9eb00f72412c53bd5d77cc273335aa5/hmcts/cnp-jenkins-library"
---

# Shared Jenkins Library for Code and Infrastructure pipelines

## Table of Contents

- [How is this used?](#how-is-this-used)
- [Library versioning](#library-versioning)
  - [Environment specific agents](#environment-specific-agents)
  - [Versioning](#versioning)
  - [Automated updates](#automated-updates)
  - [Changelogs](#changelogs)
- [Opinionated app pipeline](#opinionated-app-pipeline)
- [Opinionated infrastructure pipeline](#opinionated-infrastructure-pipeline)
- [Application specific infrastructure](#application-specific-infrastructure)
- [Nightly pipeline](#nightly-pipeline)
- [PR label behaviour](#pr-label-behaviour)
- [Performance Testing with Dynatrace and Gatling](#performance-testing-with-dynatrace-and-gatling)
- [Non-Deployable App](#non-deployable-app)
- [Release on merge](#release-on-merge)
- [Building and Testing](#building-and-testing)
- [Tool versions](#tool-versions)
- [Contract testing with Pact](#contract-testing-with-pact)
- [Troubleshooting](#troubleshooting)
- [Library controls](#library-controls)
- [Contributing](#contributing)

## How is this used?
Code in this library are loaded at runtime by Jenkins.
Jenkins is already configured to point to this…

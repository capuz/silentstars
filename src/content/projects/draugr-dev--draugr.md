---
repo: "draugr-dev/draugr"
name: "draugr"
description: "Know which security findings to fix first, across the scanners you already run. SAST, SCA, secrets, IaC and containers, every finding ranked by exposure, criticality, exploitability and, for Go, reachability."
readmeQualityOk: true
url: "https://github.com/draugr-dev/draugr"
homepage: "https://draugr.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["appsec", "cli", "code-scanning", "container-security", "dast", "devsecops", "github-action", "golang", "iac-security", "sarif"]
stars: 30
forks: 4
openIssues: 98
closedIssues: 654
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-06T06:18:22Z"
lastCommitAt: "2026-11-22T01:47:40Z"
lastReleaseAt: "2026-07-15T23:25:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["wils0ns", "draugr-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/599d4d8431544d26b04a355f8bd8630cb554f5c816458874c4f2444a08b9fa56/draugr-dev/draugr"
discussionCount: 1
---

# Draugr

> Know which security findings to fix first, [across the scanners you already run](https://github.com/draugr-dev/draugr/blob/HEAD/docs/guides/importing-sarif.md). SAST, SCA, secrets, IaC and containers, every finding ranked by exposure, criticality, exploitability and, for Go, reachability.

**Describe your app in one file, and Draugr hands back the findings in the order to fix them.**

Every application carries problems nobody put there on purpose: a library that turned out to have a
hole in it, a password committed by accident, a server setting that leaves a door open. Draugr finds
them, works out which ones actually matter for *your* app, and answers the question you are really
asking before a release, **is this safe to ship?**

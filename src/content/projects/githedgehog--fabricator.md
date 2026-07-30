---
repo: "githedgehog/fabricator"
name: "fabricator"
description: "Hedgehog Open Network Fabric Installer"
readmeQualityOk: true
url: "https://github.com/githedgehog/fabricator"
homepage: "https://docs.githedgehog.com/"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["fabric", "kubernetes", "sonic"]
stars: 9
forks: 6
openIssues: 106
closedIssues: 418
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2023-04-26T21:31:31Z"
lastCommitAt: "2026-07-30T06:08:01Z"
lastReleaseAt: "2025-01-31T07:20:39Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 81
maintainers: ["Frostman", "dependabot[bot]", "edipascale"]
openGraphImageUrl: "https://opengraph.githubassets.com/b345ad587767961a2a8564018d191e09b1ce8723faac7b82980604168a58947a/githedgehog/fabricator"
discussionCount: 0
---

# Fabricator

Fabricator builds `hhfab`, the CLI for installing and operating
[Hedgehog Open Network Fabric](https://docs.hedgehog.cloud), together with the
Virtual Lab (VLAB), the bare-metal Flatcar installers, the in-cluster
fabricator operator (CRDs + controller), and the Helm charts shipped to
customer control nodes.

## Description

The components of this repository are distributed and versioned independently
as OCI compliant artifacts.

## Local Build Instructions

### Prerequisites
- Go v1.26+
- Docker 17.03+ (used for logging into ghcr.io)
- [zot v2.1.5](https://zotregistry.dev/v2.1.5/)
- A GitHub classic token with package **read** permissions
- git
- [just v1.36.0 or greater](https://github.com/casey/just)

### Clone the repository

```
git clone https://github.com/githedgehog/fabricator.git
cd fabricator
```

### Create a GitHub classic token

1. Log into github.com
1. Click on your icon in the top right corner
1. Click on settings (gear icon)
1. On the left side of the page, scroll down and select "Developer Settings"
1. On the left side click the drop down arrow of "Personal access tokens"
1. Select "Tokens (classic)"
1. On the next page, right of center near the top…

---
repo: "PikoCI/pikoci"
name: "pikoci"
description: "The CI/CD that grows with you. One binary, any database, runs anywhere."
readmeQualityOk: true
url: "https://github.com/PikoCI/pikoci"
homepage: "https://pikoci.com"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["ci-cd", "cicd", "golang", "queue", "go", "cd", "ci"]
stars: 152
forks: 4
openIssues: 57
closedIssues: 278
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2025-09-28T19:38:53Z"
lastCommitAt: "2026-07-04T22:20:14Z"
lastReleaseAt: "2026-06-03T08:17:24Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 41
maintainers: ["xescugc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3e5489105c95d7bdfaa87de410b34acd4275fcc9910c7be029d1ccd6a2b8df8/PikoCI/pikoci"
discussionCount: 0
---

# PikoCI

  **The CI/CD that grows with you. One binary, any database, runs anywhere.**

  [Documentation](https://docs.pikoci.com) · [Quick Start](#quick-start) · [Contributing](#contributing) · [Discord](https://discord.gg/gctEh24CTm)
</div>

## What is PikoCI?

PikoCI is a self-hosted CI/CD system built around a resource/resource-type pipeline model, inspired by [Concourse CI](https://concourse-ci.org), but designed to run anywhere without operational pain.

Most CI/CD tools either lock you into a cloud platform or require spinning up multiple services just to get started. PikoCI runs as a single binary with a pluggable database backend. Use what you already have, or run entirely in memory with zero external dependencies. Bundle your binary, your pipelines, and your database file, and move them anywhere.

Pipelines are defined in [HCL](https://github.com/hashicorp/hcl). The runner abstraction means you're not locked into a specific execution environment.

## Features

- **Single binary**: download and run. No Docker Compose, no Kubernetes, no setup scripts.
- **Truly portable**: bundle the binary with your pipeline config and SQLite file. Move it anywhere, run it instantly.
-…

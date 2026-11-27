---
repo: "padok-team/guacamole"
name: "guacamole"
description: "Evaluate your IaC quality"
readmeQualityOk: true
url: "https://github.com/padok-team/guacamole"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["cli", "golang", "iac", "quality", "terraform", "terragrunt"]
stars: 16
forks: 0
openIssues: 26
closedIssues: 35
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-06-30T08:33:15Z"
lastCommitAt: "2026-11-27T16:29:58Z"
lastReleaseAt: "2025-06-23T10:38:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 60
maintainers: ["RinjieMX", "Pockylolo", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db3aa7b592e45a1afe39885cc75495f8ceac9fbc966d1a184750a10be4701c7f/padok-team/guacamole"
---

# Guacamole 🥑

A CLI tool that runs opinionated quality checks on your IaC codebase.

Check the [IaC guild guidelines](https://padok-team.github.io/docs-terraform-guidelines/) for more information on the quality checks.

## Table of Contents

- [Install](#install)
  - [With Homebrew](#with-homebrew)
  - [From binary](#from-binary)
  - [From GitHub](#from-github)
- [Usage](#usage)
  - [Run in CI](#run-in-ci)
  - [Skipping individual checks](#skipping-individual-checks)
- [List of checks](#list-of-checks)
  - [Static module check for Terraform](#static-module-check-for-terraform)
  - [Static layer check for Terragrunt](#static-layer-check-for-terragrunt)
  - [State](#state)
- [Demo](#demo)
- [License](#license)

## Install

### With Homebrew

> :information_source: If you use Linux, you can install [Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux)

```bash
brew tap padok-team/tap
brew trust padok-team/tap
brew install guacamole
```

### From binary

Download and install the latest binary on Linux or macOS in one command:

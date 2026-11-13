---
repo: "Vulnetix/cli"
name: "cli"
description: "Automate vulnerability triage which prioritizes remediation over discovery"
readmeQualityOk: true
url: "https://github.com/Vulnetix/cli"
homepage: "https://www.vulnetix.com"
language: "Open Policy Agent"
languages: ["Open Policy Agent", "Go"]
languagePcts: [50, 49]
topics: ["cyclonedx", "oscal", "sarif", "sbom", "slsa", "software-transparency", "vex", "vulnerability-management", "sast", "sca"]
stars: 25
forks: 1
openIssues: 17
closedIssues: 90
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-06-02T12:06:27Z"
lastCommitAt: "2026-11-13T11:25:07Z"
lastReleaseAt: "2026-03-16T00:49:00Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 62
maintainers: ["0x73746F66", "github-actions[bot]", "vulnetix[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cf753419580e2913c994ba03c21c481d49ad1901fd6ca4464d0d6343e7c2c74/Vulnetix/cli"
---

# Vulnetix CLI and GitHub Action

Vulnetix scans a repository for vulnerable dependencies, code flaws, secrets, IaC and container
misconfigurations, licence conflicts and malware, then tells you which findings affect the
version you run and the lowest version that fixes them. It is for developers who want that
answer on their own machine, and for teams who run the same scan in CI and track the results in
the Resolve Platform.

## Contents

- [Install](#install)
- [First scan](#first-scan)
- [GitHub Action](#github-action)
- [Other CI/CD platforms](#other-cicd-platforms)
- [Pix for coding agents](#pix-for-coding-agents)
- [Configuration](#configuration)
- [Development](#development)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [License](#license)

## Install

| Method | Platforms | Command |
|--------|-----------|---------|
| [Install script](https://github.com/Vulnetix/cli/blob/HEAD/docs/curl.md) | Linux, macOS | `curl -fsSL https://cli.vulnetix.com/install.sh \| sh` |
| [Homebrew](https://github.com/Vulnetix/cli/blob/HEAD/docs/homebrew.md) | Linux, macOS | `brew install vulnetix/tap/vulnetix` |
|…

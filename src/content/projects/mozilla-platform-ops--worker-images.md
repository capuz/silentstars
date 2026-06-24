---
repo: "mozilla-platform-ops/worker-images"
name: "worker-images"
description: "Code to provision machines images for use in firefox ci"
url: "https://github.com/mozilla-platform-ops/worker-images"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [83]
stars: 5
forks: 7
openIssues: 5
closedIssues: 4
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2023-02-02T16:40:03Z"
lastCommitAt: "2026-06-24T00:24:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 84
maintainers: ["jwmossmoz", "markcor", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f58ec9a3128417d1e1b1fdfc1c88a8db496f93d3397eb4fd16579a58d7c85792/mozilla-platform-ops/worker-images"
---

# Worker Images

This repository contains an opinionated way to build virtual machine images via packer by using configuration that is pre-defined in YAML format, executed through github actions, with support for automated integration tests using [Pester](https://pester.dev/).

## Features

- Packer variables provided through configuration files
- Supports Windows 10, Windows 11, and Windows Server
- Integration with Pester with configuration files
- Azure Authentication using [OpenID Connect](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- Automatically generates software bill of materials for each machine image created

## Repository structure

`.github/*` - Github Action Workflows

`bin/WorkerImages` - Powershell Module that provides helper functions to start packer with pre-defined variables

`config/` - Worker Pool Definition that Packer uses for variables

`provisioners/` - Internal directory used for non-cloud worker deployments at Mozilla

`scripts/*` - OS specific directories that host either shell scripts or a powershell module to support provisioning and configuring windows…

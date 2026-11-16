---
repo: "Owloops/tfjournal"
name: "tfjournal"
description: "Record Terraform runs with git context, timing, and resource events"
readmeQualityOk: true
url: "https://github.com/Owloops/tfjournal"
language: "Go"
languages: ["Go"]
languagePcts: [60]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-23T22:24:37Z"
lastCommitAt: "2026-11-16T11:56:33Z"
lastReleaseAt: "2026-01-30T11:35:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["pgagnidze"]
openGraphImageUrl: "https://opengraph.githubassets.com/9900b3843ed603435fee592ec8abe0dd70ce1b93e010a7fd14cf75fd2fdaa070/Owloops/tfjournal"
---

# tfjournal

Record Terraform runs with git context, timing, and resource events.

## Features

**Run recording**

Wraps terraform/tofu/terragrunt commands and captures output, timing, exit codes.

**Git and CI context**

Automatically records commit, branch, user, and CI provider info.

**Resource timeline**

Parses resource-level events and displays them as a gantt chart.

**S3 sync**

Optional S3 backend for sharing history across machines or teams.

## Installation

### Homebrew

```bash
brew install Owloops/tap/tfjournal
```

### Install script

```bash
curl -sSL https://raw.githubusercontent.com/Owloops/tfjournal/main/install.sh | bash
```

### Go

```bash
go install github.com/Owloops/tfjournal@latest
```

### Build from source

```bash
git clone https://github.com/Owloops/tfjournal.git
cd tfjournal
make build
```

## Usage

```bash
# Record a terraform run
tfjournal -- terraform apply

# Set workspace name manually
tfjournal -w prod -- tofu plan

# Works with terragrunt
tfjournal -- terragrunt apply

# Open TUI
tfjournal

# List runs
tfjournal list
tfjournal list --since 7d --status failed
tfjournal list --action apply

# Show run details
tfjournal show run_abc123…

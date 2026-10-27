---
repo: "kosli-dev/setup-cli-action"
name: "setup-cli-action"
description: "Sets up the Kosli CLI for GitHub Actions runners"
readmeQualityOk: true
url: "https://github.com/kosli-dev/setup-cli-action"
homepage: "https://github.com/marketplace/actions/setup-kosli-cli"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["action", "cli", "gha", "github", "kosli"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2022-09-13T12:31:16Z"
lastCommitAt: "2026-10-27T12:39:13Z"
lastReleaseAt: "2023-03-23T12:49:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 54
maintainers: ["mbevc1", "dependabot[bot]", "AlexKantor87"]
openGraphImageUrl: "https://opengraph.githubassets.com/7684a01a72a0a55fa1bd2109f86cf1966cd93c8478f9f598c99c05d80843a02e/kosli-dev/setup-cli-action"
---

# `setup-kosli-cli`

> Sets up the Kosli CLI for GitHub Actions runners

## About

This action sets up the [Kosli](https://kosli.com) [CLI](https://github.com/kosli-dev/cli), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners,
and will install and expose a specified version of the `kosli` CLI on the runner environment.

## Usage

Setup the `kosli` CLI (installs the latest release by default):

```yaml
steps:
- uses: kosli-dev/setup-cli-action@v5
```

A specific version of the `kosli` CLI can be installed:

```yaml
steps:
- name: setup-kosli-cli
  uses: kosli-dev/setup-cli-action@v5
  with:
    version: 2.11.43
```

### Pin to a major or minor version

To track a major version and pick up every update within it without ever jumping to
the next (breaking) major, pass just the major number. `version: "2"` always installs
the newest stable `2.x` release, and never `3.0.0`:

```yaml
steps:
- name: setup-kosli-cli
  uses: kosli-dev/setup-cli-action@v5
  with:
    version: "2"   # newest stable 2.x, never 3.x
```

You can pin a minor line the same way. `version: "2.11"` installs the newest stable…

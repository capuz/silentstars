---
repo: "hostinger/api-cli"
name: "api-cli"
description: "Hostinger API CLI"
readmeQualityOk: true
url: "https://github.com/hostinger/api-cli"
homepage: "https://developers.hostinger.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["api", "cli", "hostinger", "tools"]
stars: 83
forks: 29
openIssues: 0
closedIssues: 11
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2025-06-12T07:30:55Z"
lastCommitAt: "2026-11-13T11:19:06Z"
lastReleaseAt: "2025-09-08T05:28:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["hostingerbot[bot]", "aurimasbutkus", "aurimasl"]
openGraphImageUrl: "https://opengraph.githubassets.com/3725e319dba4dc6e4c5c856fc3defe906e27c038e2b287c670f9b14b2638b9e3/hostinger/api-cli"
---

# Hostinger API CLI

`hostinger` is the command line interface for the [Hostinger API](https://developers.hostinger.com).

> **This repository is generated.** Do not open pull requests here — every file
> is overwritten by the next generation run. The CLI is generated from the
> OpenAPI specification by
> [hostinger/public-api-generator](https://github.com/hostinger/public-api-generator)
> (see the `cli/` directory there). Report issues or contribute in that repository.

## Installation

### Homebrew (macOS & Linux)

```sh
brew install hostinger/tap/hostinger
```

Upgrade with `brew upgrade hostinger`. Shell tab-completion (bash/zsh/fish) and man pages
(`man hostinger`) are installed automatically.

### Binary download

Download the binary for your platform from the
[releases page](https://github.com/hostinger/api-cli/releases). Then enable tab-completion
with `hostinger completion install` (see [AUTOCOMPLETE.md](https://github.com/hostinger/api-cli/blob/HEAD/AUTOCOMPLETE.md)).

## Configuration

Sign in through the browser:

```sh
hostinger auth login
```

or use an API token instead: run `hostinger config set api_token` (it asks for the token
without echoing it) or set the…

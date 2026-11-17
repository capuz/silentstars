---
repo: "hilli/go-kef-w2"
name: "go-kef-w2"
description: "Go CLI and library for handling KEF W2 platform speakers (LSX Wireless II (LT) / LS50 Wireless II / LS60 Wireless)"
readmeQualityOk: true
url: "https://github.com/hilli/go-kef-w2"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["kef", "kef-connect", "kef-speakers", "kef-wireless-speakers"]
stars: 20
forks: 2
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-04-19T06:40:14Z"
lastCommitAt: "2026-11-17T14:39:15Z"
lastReleaseAt: "2026-02-02T18:51:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 73
undervaluedScore: 45
maintainers: ["hilli", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/629848460/fe8276b7-bcc5-4829-8b16-ff9cb4d50248"
fundingLinks: ["GITHUB:https://github.com/hilli"]
---

# go-kef-w2

CLI, library and apps (planned) for controlling KEFs W2 platform based speakers over the network.

## Command line tool

### Installation

#### General

Grab a version for your OS from the [releases](https://github.com/hilli/go-kef-w2/releases) page.

If you are a developer and already have [Go](https://go.dev/) installed you can install the latest version directly:

```shell
go install github.com/hilli/go-kef-w2/cmd/kefw2@latest
````

#### macOS

Install with Homebrew:

```shell
brew install hilli/tap/kefw2
```

#### Linux

Install with Homebrew:

```shell
brew install hilli/tap/kefw2
```

#### Windows

Install with [Scoop](https://scoop.sh/)

In a Windows Powershell window:

```shell
# Install Scoop if it's not already on your system
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
scoop install git
# Add repo for kefw2
scoop bucket add hilli https://github.com/hilli/scoop-bucket.git
# Install kefw2
scoop install hilli/go-kef-w2
```

Note that speaker discovery might not work in Windows.

### Usage

Setup the speakers

```shell
# Auto discovery
kefw2 config speaker discover --save
# Manually add a…

---
repo: "tranvictor/jarvis"
name: "jarvis"
description: "Ethereum automation made easy to human"
readmeQualityOk: true
url: "https://github.com/tranvictor/jarvis"
language: "Go"
languages: ["Go", "C"]
languagePcts: [49, 46]
stars: 80
forks: 13
openIssues: 1
closedIssues: 18
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2018-12-06T10:44:59Z"
lastCommitAt: "2026-08-30T09:24:18Z"
lastReleaseAt: "2020-03-22T06:58:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 37
maintainers: ["tranvictor", "ductm54", "manhlx3006"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/160660407/65b30000-89e4-11ea-87d6-54cc6c193298"
discussionCount: 1
---

# jarvis

Ethereum automation made easy to human

## If you like Jarvis You can buy me a cup of coffee by sending any tokens to

0xe4d747cbdd6e8e5dd57db6735b6410a29f5027eb

Both Ethereum and BSC :)

## Installation

### MacOS via Homebrew

```bash
brew install tranvictor/jarvis/jarvis
```

To upgrade to the latest version, refresh the tap first. `brew upgrade jarvis` alone uses the locally cached formula, so after a new GitHub release it can report:

`Warning: tranvictor/jarvis/jarvis 0.1.0 already installed`

```bash
brew update
brew upgrade tranvictor/jarvis/jarvis
```

## Build from source

### Ubuntu Build

```bash
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt-get update
sudo apt-get install go-1.12
GO111MODULE=on /usr/lib/go-1.12/bin/go get github.com/tranvictor/jarvis@v0.0.1
GO111MODULE=on /usr/lib/go-1.12/bin/go install github.com/tranvictor/jarvis
```

`jarvis` command will be installed to `~/go/bin`

### MacOS Build

1. Download and install Go v1.12 [here](https://golang.org/dl/)

```
GO111MODULE=on go get github.com/tranvictor/jarvis
GO111MODULE=on go install github.com/tranvictor/jarvis
```

`jarvis` binary file will be placed at `$GOPATH/bin/`

If the…

---
repo: "octomation/go-service"
name: "go-service"
description: "📐 Template for a typical service written on Go."
readmeQualityOk: true
url: "https://github.com/octomation/go-service"
homepage: "https://go-service.octolab.org/"
language: "Shell"
languages: ["Shell", "Go", "Makefile"]
languagePcts: [48, 26, 23]
topics: ["go", "golang", "service", "template", "octolab", "hacktoberfest", "quick-start"]
stars: 7
forks: 0
openIssues: 19
closedIssues: 54
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-04-17T18:09:45Z"
lastCommitAt: "2020-04-17T18:09:45Z"
lastReleaseAt: "2023-11-20T05:40:09Z"
status: "archived"
tags: ["funded"]
healthScore: 44
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/256576533/bf982df3-0bbc-44a1-8f55-e819eeb39a1c"
fundingLinks: ["CUSTOM:https://affiliate.notion.so/inlqolf5id34", "CUSTOM:https://airtable.com/invite/r/8eOiv4I4", "CUSTOM:https://m.do.co/c/b2a387de5da4", "CUSTOM:https://m.do.co/c/00f73acd0fc8"]
discussionCount: 0
---

# 📐 Service

Template for a typical service written on Go.

## 🛫 Quick start

```bash
$ make setup
$ make help

$ make find-todos
$ make test lint
$ TIMEOUT=5s make test-with-coverage
```

```bash
$ alias run=./Taskfile
$ run refresh
$ run help

$ run docs # === `run docs install -- build -- start`
$ run docs npm ci
$ run docs npm i nextra@latest

$ run tools go generate tools.go
$ run tools golangci-lint --version -- mockgen --version
$ run which goimports golangci-lint govulncheck mockgen
```

```bash
$ make tools
$ source bin/activate

$ which goimports
$ goimports -local $(go list -m) -w ./...
```

```bash
$ make go-1.19 # or go-1.20, etc.
/src# make go-env 2>/dev/null | grep GOVERSION
# GOVERSION:   1.19.10
/src# make test
```

## 💡 Idea

Define a powerful template that quickly creates a new Go service.
Not only does it provide a starting point for new projects,
but it comes equipped with pre-configured ci/cd and inventory.

```bash
$ server up &
$ client call
```

## 🏆 Motivation

At [OctoLab](https://www.octolab.org/), we want to start new projects faster using best practices
with a predefined structure and focusing on core ideas implementation
rather than wasting time…

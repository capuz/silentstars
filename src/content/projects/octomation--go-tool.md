---
repo: "octomation/go-tool"
name: "go-tool"
description: "📐 Template for a typical CLI-tool written on Go."
readmeQualityOk: true
url: "https://github.com/octomation/go-tool"
homepage: "https://go-tool.octolab.org/"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [59, 29]
topics: ["go", "golang", "cli", "tool", "template", "octolab", "hacktoberfest", "quick-start"]
stars: 5
forks: 1
openIssues: 10
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-22T15:23:58Z"
lastCommitAt: "2019-12-22T15:23:58Z"
status: "archived"
tags: ["funded"]
healthScore: 46
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/229588315/69838fe7-9cde-4854-8c20-ada5892d6ea9"
fundingLinks: ["CUSTOM:https://affiliate.notion.so/inlqolf5id34", "CUSTOM:https://airtable.com/invite/r/8eOiv4I4", "CUSTOM:https://m.do.co/c/b2a387de5da4", "CUSTOM:https://m.do.co/c/00f73acd0fc8"]
discussionCount: 0
---

# 📐 Tool

Template for a typical CLI-tool written on Go.

## 🛫 Quick start

```bash
$ make setup
$ make help

$ make find-todos
$ make test lint
$ TIMEOUT=5s make test-with-coverage
```

For more details please visit [the page](https://makefiles.octolab.org/).

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

For more details please visit [the page](https://taskfiles.octolab.org/).

```bash
$ make tools
$ source bin/activate

$ which goimports
$ goimports -local $(go list -m) -w ./...
```

For more details please visit [the page](https://egg.octolab.org/).

```bash
$ make go-1.19 # or go-1.20, etc.
/src# make go-env 2>/dev/null | grep GOVERSION
# GOVERSION:   1.19.10
/src# make test
```

## 💡 Idea

Define a powerful template that quickly creates a new Go CLI-tool.
Not only does it provide a starting point for new projects,
but it comes equipped with pre-configured ci/cd and inventory.

```bash
$ tool do action
```

##…

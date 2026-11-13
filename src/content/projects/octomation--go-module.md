---
repo: "octomation/go-module"
name: "go-module"
description: "📐 Template for a typical module written on Go."
readmeQualityOk: true
url: "https://github.com/octomation/go-module"
homepage: "https://go-module.octolab.org/"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [52, 38]
topics: ["go", "golang", "module", "template", "octolab", "hacktoberfest", "awesome-go", "quick-start"]
stars: 40
forks: 2
openIssues: 17
closedIssues: 88
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-06-07T13:25:07Z"
lastCommitAt: "2019-06-07T13:25:07Z"
lastReleaseAt: "2023-04-24T18:07:07Z"
status: "archived"
tags: ["funded"]
healthScore: 49
undervaluedScore: 31
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/190747443/a0adac0d-50f7-4b4e-a012-1ea3570179e5"
fundingLinks: ["CUSTOM:https://affiliate.notion.so/inlqolf5id34", "CUSTOM:https://airtable.com/invite/r/8eOiv4I4", "CUSTOM:https://m.do.co/c/b2a387de5da4", "CUSTOM:https://m.do.co/c/00f73acd0fc8"]
discussionCount: 0
---

# 📐 Module [![awesome.icon]][awesome.page]

Template for a typical module written on Go.

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

$ run tools go install tool
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
$ make go-1.11 # or go-1.12, etc.
/src# make go-env 2>/dev/null | grep GOVERSION
# GOVERSION:   1.11.13
/src# make test
```

- https://go-module.octolab.org/ - [GitHub Pages](https://pages.github.com/)
- https://go-module.pages.dev/ - [Cloudflare Pages](https://pages.cloudflare.com/)

## 💡 Idea

Define a powerful template that…

---
repo: "bitrise-io/bitrise-workflow-editor"
name: "bitrise-workflow-editor"
description: "Bitrise Workflow Editor"
readmeQualityOk: true
url: "https://github.com/bitrise-io/bitrise-workflow-editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["production-code"]
stars: 115
forks: 22
openIssues: 1
closedIssues: 185
watchers: 16
contributors: 58
recentReleases: 0
createdAt: "2016-09-01T10:50:36Z"
lastCommitAt: "2026-11-02T15:17:26Z"
lastReleaseAt: "2017-05-03T15:49:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 46
maintainers: ["k-olly", "moczolaszlo", "zoltanszabo-bitrise"]
openGraphImageUrl: "https://opengraph.githubassets.com/f57a8450fb3f3a9c61b7bd8c410f980fa423368e3f5c48c17958501234758782/bitrise-io/bitrise-workflow-editor"
---

# Bitrise Workflow Editor

## How to install & use the Workflow Editor on your Mac/Linux

1. Install [Go](https://golang.org) `brew install go` (on macOS)
1. Install the latest [Bitrise CLI](https://bitrise.io/cli) - it's a single binary command line tool
1. Run `bitrise setup` just to be sure everything's prepared
1. `cd` into a directory where you have your `bitrise.yml`, and run: `bitrise :workflow-editor`

That's all. The Workflow Editor is now part of the Bitrise CLI core plugins, so you don't have to install it manually.

To upgrade to the latest version of the Workflow Editor run:

```
bitrise plugin update workflow-editor
```

_Join the Workflow Editor's discussion
at: [https://discuss.bitrise.io/t/workflow-editor-v2-open-source-offline-workflow-editor/39](https://discuss.bitrise.io/t/workflow-editor-v2-open-source-offline-workflow-editor/39)_

## Install requirements

The client is a Vite build and needs `node` and `npm`. The local executable is written in Go, so you need a Go
toolchain too. One command installs both sides' dependencies and builds them:

```bash
bitrise run setup
```

## Development

### Build a stand-alone binary, with embedded resources

```
go install…

---
repo: "mtgto/swift-format-action"
name: "swift-format-action"
description: "GitHub Action to run apple/swift-format."
readmeQualityOk: true
url: "https://github.com/mtgto/swift-format-action"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [68, 32]
topics: ["swift-format", "github-actions"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2021-01-06T14:33:57Z"
lastCommitAt: "2026-10-31T07:46:38Z"
lastReleaseAt: "2026-10-29T12:53:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 45
maintainers: ["mtgto"]
openGraphImageUrl: "https://opengraph.githubassets.com/b723508cce8e2b6dbdcebabd1b2546b2069ad35841226c6ef0a718bdb780e874/mtgto/swift-format-action"
---

swift-format-action
====

GitHub Action to run [apple/swift-format](https://github.com/apple/swift-format).

# GitHub Action Workflow Examples

## Lint only

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7

      - uses: mtgto/swift-format-action@v1.1.0
        with:
          # Please comment out if you won't specify configuration file
          configuration_file: .swift-format
          # default is false
          all_files: false
          # default is -1 (infinity)
          max_warnings: -1
```

Warnings are reported as annotations on the pull request.
They are not treated as failures unless you set `max_warnings` (for example `max_warnings: 0`).

See [mtgto/example-swift-format-action#1](https://github.com/mtgto/example-swift-format-action/pull/1) for a live example.

## Format code automatically

```yaml
on:
  pull_request:
    branches: [main]

jobs:
  lint:
    name: Auto Correct
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: mtgto/swift-format-action@v1.1.0
        with:
          # Please comment out…

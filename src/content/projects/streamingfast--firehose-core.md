---
repo: "streamingfast/firehose-core"
name: "firehose-core"
description: "Firehose Blockchain Agnostic Indexing Stack"
readmeQualityOk: true
url: "https://github.com/streamingfast/firehose-core"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 35
forks: 21
openIssues: 35
closedIssues: 37
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2023-04-04T20:26:53Z"
lastCommitAt: "2026-11-11T19:42:08Z"
lastReleaseAt: "2023-09-18T13:54:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 58
maintainers: ["sduchesneau", "UlysseCorbeil", "maoueh"]
openGraphImageUrl: "https://opengraph.githubassets.com/37896cc1631674070c974a7a36639eef165000fb11ff49d6e14e0d649f37e459/streamingfast/firehose-core"
---

## Firehose Core

This repository contains all the base components of [Firehose](https://firehose.streamingfast.io/) and run the software for multiple block chains (Bitcoin, Solana, ...) or be used as a library (firehose-ethereum, firehose-antelope)

## Installation

- Using Homebrew (MacOS & Linux): `brew install tap/streamingfast/firehose-core`
- Using Docker: `alias firecore='docker run --rm -it -e="SF_API_TOKEN=${SF_API_TOKEN}" ghcr.io/streamingfast/firehose-core'`
- Using pre-built binary at: https://github.com/streamingfast/firehose-core/releases?q=&expanded=true
- Compile from source: `go install ./cmd/firecore`

## Running directly

* `firehose-core` can run one or many of the following components:
  - reader-node
  - merger
  - relayer
  - firehose
  - substreams-tier1
  - substreams-tier2
  - (reader-node-stdin -- not run by default)

* You can use a config file like this (default: `firehose.yaml`)

```
start:
  args:
  - reader-node
  - merger
  flags:
    reader-node-path: "/usr/local/bin/firesol"
    reader-node-args: ["fetch", "rpc", "http://localhost:8545", "0"]
```

* Run it with `firecore start --config-file=./firehose.yaml` or set an empty value for config-file…

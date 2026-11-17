---
repo: "agglayer/aggkit"
name: "aggkit"
description: "Connect any chain to the Agglayer"
readmeQualityOk: true
url: "https://github.com/agglayer/aggkit"
homepage: "https://agglayer.github.io/aggkit/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 14
forks: 22
openIssues: 99
closedIssues: 693
watchers: 4
contributors: 30
recentReleases: 0
createdAt: "2024-12-11T10:03:16Z"
lastCommitAt: "2026-11-17T11:20:58Z"
lastReleaseAt: "2025-04-28T07:43:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 81
maintainers: ["arnaubennassar", "joanestebanr", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47abf4b064d700a73cf625ac6ec869d35eba4b72164751547e9edf218b7f2f63/agglayer/aggkit"
discussionCount: 1
---

## AggKit

**AggKit** is a modular framework that developers can use to connect networks to the AggLayer

## Getting Started

### Pre-requisites

Setup Kurtosis following these instructions: [Kurtosis CDK Getting Started](https://github.com/0xPolygon/kurtosis-cdk?tab=readme-ov-file#getting-started)

### Local Testing

- You can run locally against kurtosis-cdk environment using: [docs/local_debug.md](https://github.com/agglayer/aggkit/blob/HEAD/docs/local_debug.md)

### Build locally

You can locally build a production release of AggKit CLI + AggKit with:

```
make build
```

### Run locally

You can build and run a debug binary locally using:

1. build the `aggkit` binary
```bash
make build-aggkit
```

2. run the `aggkit` binary
```bash
cd target/
aggkit run --cfg <CONFIG_FILE> --components <COMPONENTS_TO_RUN>
```

### Running with Kurtosis

1. Run your kurtosis environment
2. build `cdk-erigon` and make it available in your system's PATH
3. Run `scripts/local_config`

## Contributing

Contributions are very welcomed, the guidelines are currently not available (WIP)

## Support

Feel free to [open an issue](https://github.com/agglayer/aggkit/issues/new) if you have any feature…

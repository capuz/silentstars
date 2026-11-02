---
repo: "celestiaorg/celestia-app"
name: "celestia-app"
description: "Celestia consensus node"
readmeQualityOk: true
url: "https://github.com/celestiaorg/celestia-app"
homepage: "https://celestiaorg.github.io/celestia-app/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["lazyledger", "cosmos-sdk", "celestia"]
stars: 422
forks: 520
openIssues: 98
closedIssues: 2618
watchers: 15
contributors: 258
recentReleases: 0
createdAt: "2021-01-07T18:42:35Z"
lastCommitAt: "2026-11-02T17:43:43Z"
lastReleaseAt: "2022-05-25T14:24:56Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 45
maintainers: ["rootulp", "walldiss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f3fa3804249cdda92d4564954ea0e696cd15798a45c41cb4d80c7043554bac/celestiaorg/celestia-app"
discussionCount: 18
---

# celestia-app

celestia-app is the software used by [validators](https://docs.celestia.org/operate/consensus-validators/validator-node/) and [consensus nodes](https://docs.celestia.org/operate/consensus-validators/consensus-node/) on the Celestia consensus network. celestia-app is a blockchain application built using parts of the Cosmos stack:

- [celestiaorg/cosmos-sdk](https://github.com/celestiaorg/cosmos-sdk) a fork of [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk)
- [celestiaorg/celestia-core](https://github.com/celestiaorg/celestia-core) a fork of [cometbft/cometbft](https://github.com/cometbft/cometbft)

## Diagram

```ascii
                ^  +-------------------------------+  ^
                |  |                               |  |
                |  |  State-machine = Application  |  |
                |  |                               |  |   celestia-app (built with Cosmos SDK)
                |  |            ^      +           |  |
                |  +----------- | ABCI | ----------+  v
Celestia        |  |            +      v           |  ^
validator or    |  |                               |  |
full consensus  |  |           Consensus           |  |
node…

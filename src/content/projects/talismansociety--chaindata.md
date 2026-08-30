---
repo: "TalismanSociety/chaindata"
name: "chaindata"
description: "A community controlled repository of relay and parachain information in the Polkadot ecosystem."
readmeQualityOk: true
url: "https://github.com/TalismanSociety/chaindata"
homepage: "https://raw.githubusercontent.com/TalismanSociety/chaindata/main/dist/index.txt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["substrate", "polkadot", "parachains"]
stars: 24
forks: 54
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 37
recentReleases: 0
createdAt: "2021-07-27T07:25:35Z"
lastCommitAt: "2026-08-30T00:45:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 78
maintainers: ["chaindata-ci-superuser[bot]", "0xKheops"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c62bb669d1014619211d480a4e6bc42be817c3d5af39551b9455a8e736a900/TalismanSociety/chaindata"
---

# Chaindata

A **community controlled** repository of [relay](https://wiki.polkadot.network/docs/learn-architecture#relay-chain) and [parachain](https://wiki.polkadot.network/docs/learn-architecture#parachain-and-parathread-slots) information in the [Polkadot ecosystem](https://polkadot.network/).

The goals of this repo are:

1. Provide a community-managed index of Polkadot parachains and their connection information (rpcs, chainspecs)
1. Provide a source of chain and token assets across the ecosystem
1. Enable developers to retrieve this information via an API suitable to their project (json/rest, npm [**soon™**](https://github.com/TalismanSociety/chaindata/issues/35))
1. Move towards a decentralised model

## Usage

The files in this repo, `data/chaindata.json`, `data/testnets-chaindata.json` and `data/evm-networks.json` are used to configure a GitHub workflow which scrapes information from each chain and publishes it as a collection of JSON files in the `pub` directory of this repo.

The published files can be downloaded at these URLs:

- https://raw.githubusercontent.com/TalismanSociety/chaindata/main/pub/v4/chaindata.json
-…

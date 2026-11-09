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
stars: 25
forks: 56
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 44
recentReleases: 0
createdAt: "2021-07-27T07:25:35Z"
lastCommitAt: "2026-11-09T00:55:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 77
maintainers: ["chaindata-ci-superuser[bot]", "0xKheops", "nol4lej"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d1159b9e5db6c0432f29aee4917555833c0b772ac37367f075549de66635ebf/TalismanSociety/chaindata"
---

# Chaindata

A **community controlled** index of networks, tokens and assets for the [Polkadot](https://polkadot.network/), Ethereum and Solana ecosystems.

The goals of this repo are:

1. Provide a community-managed index of networks and their connection information (RPCs, genesis hashes, metadata)
1. Provide a source of network and token logos across the ecosystem
1. Publish this information as JSON files that any project can consume

## Usage

The published files are consolidated JSON documents containing every network, token and Substrate miniMetadata:

- `https://raw.githubusercontent.com/TalismanSociety/chaindata/main/pub/<version>/chaindata.json`
- `https://raw.githubusercontent.com/TalismanSociety/chaindata/main/pub/<version>/chaindata.min.json`

`<version>` is the current `pub` version, `v15` at the time of writing.
It changes whenever the format of the published files breaks, see [Chaindata `pub` versions](#chaindata-pub-versions) below for the version list and how to find the latest one.

Their shape is `{ networks: Network[], tokens: Token[], miniMetadatas: MiniMetadata[] }`.
Types and Zod schemas for each object are exported by the `@talismn/chaindata-provider`…

---
repo: "solardev-xyz/freedom-browser"
name: "freedom-browser"
description: "Freedom Browser — decentralized web browsing with Swarm, IPFS, Radicle, ENS, and Tezos Domains"
readmeQualityOk: true
url: "https://github.com/solardev-xyz/freedom-browser"
homepage: "https://freedombrowser.eth.limo/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 163
forks: 30
openIssues: 53
closedIssues: 204
watchers: 2
contributors: 11
recentReleases: 10
createdAt: "2026-02-08T07:17:01Z"
lastCommitAt: "2026-10-07T10:30:53Z"
lastReleaseAt: "2026-09-23T15:29:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 39
maintainers: ["meinharrd", "xxxxxxxxxxxxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64c28a312f5a3c5298821acd1e490af341fa79ce51222f992f2a4aeb2e8863f/solardev-xyz/freedom-browser"
---

# Freedom Browser

Freedom is a browser for the decentralized web, with Swarm, IPFS, onchain applications, Radicle, ENS, and Tezos Domains as first-class protocols. Integrated Ant, freedom-ipfs, Radicle, experimental Myotis, and Tor components provide direct access to decentralized and onion networks without relying on centralized HTTP gateways.

## Download

Download the latest build for macOS, Linux, or Windows from the official download page at [freedom.baby](https://freedom.baby).

Radicle is available on macOS, Linux, and Windows (x64 and ARM64). The release workflow bundles the Tor (Arti) client for macOS arm64, Linux x64/arm64 and Windows x64. Windows x64 bundling landed in September 2026, so only releases cut after that carry Arti on Windows — an earlier Windows install has none, and updating to the latest build is the fix. No Windows ARM64 build is published at all, so `.onion` access is unavailable on that architecture.

## What Freedom supports

- Native `bzz://`, `ipfs://`, `ipns://`, `web3://`, and `rad://` navigation, plus optional `.onion` routing through Tor.
- Contract-hosted applications (draft ERC-8244) loaded straight from an Ethereum-compatible chain, with no…

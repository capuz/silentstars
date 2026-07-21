---
repo: "onflow/flow-evm-gateway"
name: "flow-evm-gateway"
description: "FlowEVM Gateway implements an Ethereum-equivalent JSON-RPC API for EVM clients to use"
readmeQualityOk: true
url: "https://github.com/onflow/flow-evm-gateway"
homepage: "https://developers.flow.com/evm/about"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [75, 24]
stars: 15
forks: 13
openIssues: 33
closedIssues: 308
watchers: 22
contributors: 38
recentReleases: 0
createdAt: "2023-10-24T16:10:15Z"
lastCommitAt: "2026-07-21T06:11:22Z"
lastReleaseAt: "2024-05-02T23:40:22Z"
status: "thriving"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: ["vishalchangrani", "m-Peter", "turbolent"]
openGraphImageUrl: "https://opengraph.githubassets.com/428ac5657bde57f030527e8f022945ca458831029adad382c19a8346f99e797a/onflow/flow-evm-gateway"
---

# EVM Gateway

## EVM Gateway enables seamless interaction with EVM on Flow, mirroring the experience of engaging with any other EVM blockchain

EVM Gateway implements the Ethereum JSON-RPC API for [EVM on Flow](https://developers.flow.com/evm/about) which conforms to the Ethereum [JSON-RPC specification](https://ethereum.github.io/execution-apis/api-documentation/). The EVM Gateway is tailored for integration with the EVM environment on the Flow blockchain. Rather than implementing the full `geth` stack, the JSON-RPC API available in EVM Gateway is a lightweight implementation that uses Flow's underlying consensus and smart contract language, [Cadence](https://cadence-lang.org/docs/), to handle calls received by the EVM Gateway. For those interested in the underlying implementation details, please refer to the [FLIP #243](https://github.com/onflow/flips/issues/243) (EVM Gateway) and [FLIP #223](https://github.com/onflow/flips/issues/223) (EVM on Flow Core) improvement proposals.

EVM Gateway is compatible with the majority of standard Ethereum JSON-RPC APIs allowing seamless integration with existing Ethereum-compatible web3 tools via HTTP. EVM Gateway honors Ethereum's JSON-RPC…

---
repo: "IntersectMBO/mithril"
name: "mithril"
description: "Stake-based threshold multi-signatures protocol"
readmeQualityOk: true
url: "https://github.com/IntersectMBO/mithril"
homepage: "https://mithril.network"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["blockchain", "cardano", "cardano-node", "mithril", "rust", "scalability", "multi-signature-aggregation", "multi-signatures", "multisig", "zero-knowledge"]
stars: 155
forks: 52
openIssues: 60
closedIssues: 1378
watchers: 30
contributors: 57
recentReleases: 0
createdAt: "2021-09-07T05:33:14Z"
lastCommitAt: "2026-10-30T11:02:23Z"
lastReleaseAt: "2022-12-15T10:12:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 46
maintainers: ["jpraynaud", "damrobi", "Alenar"]
openGraphImageUrl: "https://opengraph.githubassets.com/371259e95d759395763e458c206f382a880ad9600e5c67fd639fa15cd01501e8/IntersectMBO/mithril"
discussionCount: 12
---

# <p align="center">Mithril :shield:</p>

## :sunny: Introduction

**Mithril** is a research project the goal of which is to provide [stake-based threshold multi-signatures](https://iohk.io/en/research/library/papers/mithril-stake-based-threshold-multisignatures/)(STM) on top of the **Cardano network**.

In a nutshell, **Mithril** can be summarized as:

> A protocol that enables stakeholders in a proof-of-stake (PoS) blockchain network to individually sign messages, which are then aggregated into a multi-signature, guaranteeing that they represent a minimum share of the total stake.

In other words, an adversarial participant with less than this share of the total stake will be unable to produce valid multi-signatures. :closed_lock_with_key:.

The goal of the first implementation of the Mithril network protocol is to provide a way to quickly bootstrap a fully operating Cardano node in less than two hours, compared to the days it used to take before.

To unleash the power of Mithril and leverage new use cases, we have also implemented a framework in the Mithril network that allows the certification of multiple types of data, provided they can be computed deterministically.

##…

---
repo: "z0r0z/tacit"
name: "tacit"
description: "smart contracts on bitcoin"
readmeQualityOk: true
url: "https://github.com/z0r0z/tacit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [70]
stars: 44
forks: 14
openIssues: 6
closedIssues: 11
watchers: 1
contributors: 7
recentReleases: 8
createdAt: "2026-05-05T16:06:36Z"
lastCommitAt: "2026-10-23T12:03:30Z"
lastReleaseAt: "2026-09-29T14:19:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 43
maintainers: ["z0r0z", "nerderlyne"]
openGraphImageUrl: "https://opengraph.githubassets.com/3221558a75a688d791bd5990bb03e783151c18e3009f2cf1115f3e85de96da5f/z0r0z/tacit"
---

# tacit

**Tokenization and confidential DeFi on Bitcoin, with a zero-knowledge bridge to a confidential zone on
Ethereum.**

Live on Ethereum mainnet since 2026-09-18 ([contracts and addresses](https://github.com/z0r0z/tacit/blob/HEAD/docs/DEPLOYMENTS.md)). The first
Bitcoin-native AMM pool, founded directly on Bitcoin with no Ethereum contract, is live in the indexer as
of 2026-09-25 ([pool and reserves](https://github.com/z0r0z/tacit/blob/HEAD/docs/DEPLOYMENTS.md#bitcoin-native-amm-pool)).

Tacit is a Bitcoin metaprotocol. Assets are issued and transferred in Taproot envelopes. Amounts are
hidden by Pedersen commitments and range proofs, and any indexer running the spec reaches the same state
from the chain alone.

The same confidential note also lives in an immutable pool on Ethereum. There it can be:
- swapped, lent against, farmed or paid privately;
- relayed without gas;
- moved back to Bitcoin.

SP1 zero-knowledge proofs carry state between the two chains in both directions. No multisig, federation
or attestor set signs a bridge message.

- **App:** [tacit.finance](https://tacit.finance)
- **Spec:** [`SPEC.md`](https://github.com/z0r0z/tacit/blob/HEAD/SPEC.md), the…

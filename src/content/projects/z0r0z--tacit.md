---
repo: "z0r0z/tacit"
name: "tacit"
description: "smart contracts on bitcoin"
readmeQualityOk: true
url: "https://github.com/z0r0z/tacit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
stars: 40
forks: 12
openIssues: 8
closedIssues: 4
watchers: 1
contributors: 6
recentReleases: 9
createdAt: "2026-05-05T16:06:36Z"
lastCommitAt: "2026-09-23T08:46:04Z"
lastReleaseAt: "2026-09-13T11:40:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 40
maintainers: ["z0r0z"]
openGraphImageUrl: "https://opengraph.githubassets.com/45559637babe897f7ac7b15462f7e029fce14fb7d003bf73588812a79f6c8d2d/z0r0z/tacit"
---

</p>

# tacit

**Tokenization and confidential DeFi on Bitcoin, with a zero-knowledge bridge to a confidential zone on
Ethereum.**

Live on Ethereum mainnet since 2026-09-18 ([contracts and addresses](https://github.com/z0r0z/tacit/blob/HEAD/docs/DEPLOYMENTS.md)). The first
Bitcoin-native AMM pool, founded directly on Bitcoin with no Ethereum contract, went live 2026-09-22
([pool and reserves](https://github.com/z0r0z/tacit/blob/HEAD/docs/DEPLOYMENTS.md#bitcoin-native-amm-pool)).

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
- **Spec:** [`SPEC.md`](https://github.com/z0r0z/tacit/blob/HEAD/SPEC.md), the normative protocol
-…

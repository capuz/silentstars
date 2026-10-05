---
repo: "z0r0z/tacit"
name: "tacit"
description: "smart contracts on bitcoin"
readmeQualityOk: true
url: "https://github.com/z0r0z/tacit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [72]
stars: 41
forks: 14
openIssues: 10
closedIssues: 4
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-05-05T16:06:36Z"
lastCommitAt: "2026-10-05T10:46:40Z"
lastReleaseAt: "2026-09-29T14:19:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 39
maintainers: ["z0r0z"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1df55b9a9005838d08b45aff5a2f656bb18612ad5a568fa33e240ea139fb001/z0r0z/tacit"
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

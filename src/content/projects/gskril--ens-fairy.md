---
repo: "gskril/ens-fairy"
name: "ens-fairy"
description: "The easiest way to gift ENS names"
readmeQualityOk: true
url: "https://github.com/gskril/ens-fairy"
homepage: "https://ensfairy.xyz"
language: "TypeScript"
languages: ["TypeScript", "Solidity"]
languagePcts: [72, 25]
topics: ["ens"]
stars: 16
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-04T05:15:11Z"
lastCommitAt: "2026-10-31T09:54:02Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 75
undervaluedScore: 53
maintainers: ["gskril", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/45500a511685bd07dcc336d97fb6c80738a44b192d9e140d0a9f64d191589fc5/gskril/ens-fairy"
---

# ENS Fairy

Gift an ENS name: register a `.eth` name directly to someone else's wallet.

Built for ENSv2 with [ENSjs](https://github.com/ensdomains/ensjs), [wagmi](https://wagmi.sh), [zyzz](https://zyzz.style) for styling, and [Vite](https://vite.dev), deployed as a [Cloudflare Worker](https://developers.cloudflare.com/workers/).

## How gifting works

Registrations on the ENSv2 `.eth` registrar are paid in USDC or DAI. Every gifted name points at the shared [FairyResolver](#fairyresolver), which resolves the name to its owner until they set records, so a gift takes up to three transactions from the sender:

1. **Approve** the registrar to spend the token (skipped if the allowance is already enough).
2. **Commit** to the registration, which protects it from front-running.
3. **Register** the name to the recipient after the 60 second waiting period.

Wallets that support atomic batching ([EIP-5792](https://eips.ethereum.org/EIPS/eip-5792) `wallet_sendCalls`) get steps 1–2 as a single confirmation, so a gift takes two wallet interactions.

Before the first transaction, the whole sequence is simulated with `eth_simulateV1`, so a gift that would fail is caught before any gas is…

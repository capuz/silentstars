---
repo: "zpalmtree/seine"
name: "seine"
description: "The fastest Blocknet miner for CPUs and NVIDIA GPUs. Tunes itself while it mines, on Windows, macOS and Linux."
readmeQualityOk: true
url: "https://github.com/zpalmtree/seine"
homepage: "https://seineminer.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [77]
topics: ["argon2id", "blocknet", "cpu-mining", "cryptocurrency", "cuda", "gpu-mining", "miner", "mining", "privacy-coin"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-13T08:41:12Z"
lastCommitAt: "2026-11-01T22:59:47Z"
lastReleaseAt: "2026-02-22T05:26:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 70
maintainers: ["zpalmtree"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a181383fd4bf4ef873ff858375dd545f79e97a8b4cd5ab03c2d1f25bcfcdb64/zpalmtree/seine"
---

Tuned kernels for every modern CPU and NVIDIA GPU, zero configuration. Download, run, mine.

## Exchange deposits

For an exchange that requires a memo, use both its full deposit address and your
own deposit memo with a pool that supports memo payouts:

```sh
./seine --address 'EXCHANGE_ADDRESS' --payout-memo 'YOUR_DEPOSIT_MEMO'
```

Seine checks pool support before mining and shows the payout minimum when the
pool provides it. Known shared addresses require a memo; interactive startup
prompts for a missing memo, including for saved addresses. Unknown or rotated addresses can use `--payout-memo` too. Personal
wallets and ordinary Blocknet IDs need no new flag. Memo mining requires the full
address and is not supported in daemon mode or through Seine farm proxies.

Setup saves the memo with the address, preserving case and leading zeros. A memo
entered for a command-line address override is used only for that run. When
changing a saved exchange address, explicitly provide the new memo, or use
`--no-payout-memo` to switch to a personal wallet. A changed address or memo has a
separate pool balance. Command-line overrides apply to the current run; edit
`seine-data/seine.config.json`…

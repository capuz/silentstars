---
repo: "triamazikamno/railoxide"
name: "railoxide"
description: "Privacy-oriented RAILGUN wallet implemented in Rust"
readmeQualityOk: true
url: "https://github.com/triamazikamno/railoxide"
homepage: "https://railoxide.eth.link"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-06-03T09:21:17Z"
lastCommitAt: "2026-09-07T08:34:05Z"
lastReleaseAt: "2026-07-29T11:53:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 55
maintainers: ["triamazikamno", "f0ldspace"]
openGraphImageUrl: "https://opengraph.githubassets.com/206c96223485cb374d8533d2a47f9347d0cdc5249a1d8da93ac39c503462460c/triamazikamno/railoxide"
---

</p>

<h1 align="center">
</h1>

</p>

---

## Status

RailOxide is under active development. APIs, wallet storage formats, and UI flows may change before a stable release.

## Features

- Fully open source
- Zero telemetry, zero home calls
- First-class integrated Tor support
- Indexed POI tree support, prevents UTXO spend intent leaking to the poi proxy operator
- Hardware-derived wallets:
  - public accounts have full hardware wallet support.
  - 0zk accounts are derived deterministically by signing a hash with a hardware device, private keys are **not** stored in app, but for signing they are briefly exposed in memory.
    Full on-device 0zk signing support is to be added as soon as hardware wallet vendors add railgun-specific cryptography functions.
- Aggressive request batching to reduce rpc throttling
- Resilient public broadcaster network connection management
- Block-builder sponsored self-broadcasting mode (Mainnet only). This is a reliable and permissionless way to send private transactions using an empty/underfunded EOA without public broadcasters 
- Decentralized and leak-free pricing discovery via on-chain chainlink oracles. Used both for display and suspicious…

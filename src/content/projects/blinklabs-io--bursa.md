---
repo: "blinklabs-io/bursa"
name: "bursa"
description: "Programmatic Cardano Wallet"
readmeQualityOk: true
url: "https://github.com/blinklabs-io/bursa"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["blockchain", "cardano", "cardano-wallet", "go", "golang", "api", "cli", "library"]
stars: 10
forks: 7
openIssues: 50
closedIssues: 225
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2023-07-29T15:42:24Z"
lastCommitAt: "2026-11-06T13:20:21Z"
lastReleaseAt: "2024-03-14T04:36:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 80
maintainers: ["wcatz", "wolf31o2", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/672298889/f11ca7b9-ab06-4c56-bd8c-5882103f7d99"
---

# bursa

Programmatic Cardano Wallet

Bursa is two things that share one set of keys:

- **A Cardano wallet library and CLI** — BIP39 seeds, CIP-1852 derivation,
  addresses, certificates and native scripts, usable as a Go package or from the
  `bursa` command. That is what the rest of this README covers.
- **A full-node desktop wallet** — a single binary that embeds and supervises a
  [Dingo](https://github.com/blinklabs-io/dingo) node and serves a wallet
  interface over loopback, with hardware-wallet support, staking, Conway
  governance and stake-pool operations. It lives in [`ui/`](https://github.com/blinklabs-io/bursa/blob/HEAD/ui) and has
  [its own README](https://github.com/blinklabs-io/bursa/blob/HEAD/ui/README.md).

## Documentation

- [Bursa guides](https://docs.blinklabs.io/guides/bursa/001-bursa/) cover
  installation, configuration, wallet usage, and CLI commands.
- [Full-node wallet guide](https://github.com/blinklabs-io/bursa/blob/HEAD/ui/README.md) covers desktop setup and operation.
- [Signer documentation](https://github.com/blinklabs-io/bursa/blob/HEAD/docs/signer/README.md) and the
  [signer…

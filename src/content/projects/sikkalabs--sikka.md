---
repo: "sikkalabs/sikka"
name: "sikka"
description: "A next-generation digital currency built for humans, autonomous agents, and machine-to-machine payments."
readmeQualityOk: true
url: "https://github.com/sikkalabs/sikka"
homepage: "https://sikkalabs.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 7
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T23:34:13Z"
lastCommitAt: "2026-07-31T06:27:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 36
maintainers: ["besoeasy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef9707013f8b079cf305300c3c8daf4a9d824d08ad82404d0aa30b8cd78ca1b1/sikkalabs/sikka"
---

# SIKKA

The simplest cryptocurrency for humans, AI agents, and micropayments.

**0% fees. No transaction history. Private by default.**

Nodes keep balances, not ledgers of every payment. Consensus signs the state
root, then discards the transactions. Storage grows with accounts — not with
every transfer ever made.

[Website](https://sikkalabs.com/) ·
[Live node](https://1.sikkalabs.com/) ·
[Wallet](https://1.sikkalabs.com/wallet.html) ·
[Image](https://github.com/sikkalabs/sikka/pkgs/container/sikka)

---

## Features

- **Zero fees** — send any amount without paying gas. Validators earn from
  fixed **1.5%/year** inflation on bonded stake.
- **No history** — finalized payments are thrown away. Only balances and the
  latest checkpoint remain on-chain.
- **Private by default** — without a permanent tx log, past payments are not
  publicly reconstructable. **Tor is the peer mesh**: every node image publishes
  a v3 onion derived from its key; users still open any node over plain HTTP.
- **Built for micropayments** — feeless transfers and regenerating spam credits (+1/min, cap 100) make high-frequency, low-value payments practical. Fresh accounts start at 0 credits to prevent…

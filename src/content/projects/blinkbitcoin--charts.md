---
repo: "blinkbitcoin/charts"
name: "charts"
description: "Galoy helm charts"
readmeQualityOk: true
url: "https://github.com/blinkbitcoin/charts"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [32, 20]
topics: ["kubernetes", "helm"]
stars: 33
forks: 24
openIssues: 12
closedIssues: 46
watchers: 3
contributors: 28
recentReleases: 0
createdAt: "2021-02-21T13:13:01Z"
lastCommitAt: "2026-09-30T09:57:21Z"
lastReleaseAt: "2022-01-27T10:01:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 63
maintainers: ["blinkbitcoinapp[bot]", "blinkbitcoinbot", "openoms"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc165faec430e989d5b71bcefb1f92c7e3fbdf616bce3adab261476e6c948b84/blinkbitcoin/charts"
---

# Galoy Kubernetes Helm Charts

Galoy community banking application, launchable on Kubernetes using [Kubernetes Helm](https://github.com/helm/helm).

## Before you begin

### Setup a Kubernetes Cluster

These charts have been tested on top of the galoy infrastructure ([`blink-infra`](https://github.com/blinkbitcoin/blink-infra)).

### Install Helm
[Helm](https://helm.sh) must be installed to use the charts.
Please refer to Helm's [documentation](https://helm.sh/docs/) to get started.

## What's included

This repo includes charts for:
- [`galoy`](https://github.com/GaloyMoney/galoy) Our bitcoin banking application
  - [`galoy-pay`](https://github.com/GaloyMoney/galoy-pay)
  - [`admin-panel`](https://github.com/GaloyMoney/admin-panel)
  - [`price`](https://github.com/GaloyMoney/price)

- [`bitcoind`](https://github.com/bitcoin/bitcoin) Bitcoin full node

- [`lnd`](https://github.com/lightningnetwork/lnd) Lightning Network daemon & client

- [`specter`](https://github.com/cryptoadvance/specter-desktop) On-chain wallet and multisig co-ordinator

- `monitoring` Metrics dashboard
  - [`grafana`](https://github.com/grafana/grafana)
  -…

---
repo: "efdevcon/pretix-eth-payment-plugin"
name: "pretix-eth-payment-plugin"
description: "An etheruem payment provider plugin  for pretix"
readmeQualityOk: true
url: "https://github.com/efdevcon/pretix-eth-payment-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 47
forks: 24
openIssues: 27
closedIssues: 84
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2019-06-04T21:25:37Z"
lastCommitAt: "2026-10-31T19:00:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 41
maintainers: ["didierkrux"]
openGraphImageUrl: "https://opengraph.githubassets.com/9caffacccec82580f179272ca15db855ddc74444dcafbc84bf2a8b28eff5bb29/efdevcon/pretix-eth-payment-plugin"
---

# Pretix Crypto Payment Plugin

A payment plugin for [Pretix](https://github.com/pretix/pretix) that accepts crypto payments and layers per-item crypto-vs-card pricing on top of Pretix's fiat (Stripe) checkout. Crypto is paid via direct WalletConnect checkout (user pays gas), verified directly on-chain — no vendor dependency. A gasless x402 flow (relayer pays gas for USDC/USDT0) also exists in the code but is **currently disabled** (see [Status](#status)).

## Status

- **Active crypto flow:** WalletConnect direct-send (`/plugin/wc/*`). This is the crypto path used in production.
- **Fiat (card) payments:** handled by Pretix's own Stripe plugin; this plugin adds per-item crypto-vs-card pricing, a card-price markup, and dual-currency display in the shop/cart (see [Fiat (card) payments](#fiat-card-payments)).
- **x402 gasless flow:** fully implemented but **disabled** — the x402 *buyer* routes (purchase, payment-options, relayer, verify, settings) are commented out in `pretix_eth/urls.py` (`_x402_routes()`), so those paths 404 and no x402 buyer-payment view runs. The code is retained; re-enable by uncommenting the routes. The x402 sections below document the flow as it works when…

---
repo: "MaviLabArt/BoltCanvas"
name: "BoltCanvas"
description: "Opinionated React + Node gallery template for selling products over Lightning and Bitcoin "
readmeQualityOk: true
url: "https://github.com/MaviLabArt/BoltCanvas"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-27T08:59:54Z"
lastCommitAt: "2026-10-31T02:01:11Z"
status: "thriving"
tags: []
healthScore: 69
undervaluedScore: 35
maintainers: ["isolabellart"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1a3fc6eb3cec20938de46a3a1c5a3c622a81b2da8807da325d6d78c9f28a5b3/MaviLabArt/BoltCanvas"
---

# BoltCanvas ⚡

BoltCanvas is a small, opinionated shop template:

- A clean public gallery where people can browse your products.
- A simple admin area where you manage products, texts and orders.
- Bitcoin-only payments in **sats** (Blink, LND, BTCPay Server, Nostr Wallet Connect, or LNURL), with the option to let buyers pay **on-chain** while you still receive Lightning.
- **on-chain** payments can either:
  - settle via Lightning through **Boltz** (default),
  - settle **natively on-chain** via **BTCPay Server**, or
  - go straight to your own wallet via an **XPUB** (addresses derived from your xpub and tracked via mempool.space / Esplora).
- **extremely** lightweight.

Shops using this codebase: 
- [MaviLab](https://mavilab.art)
- [Isolabella](https://shop.isolabellart.it.com/)

---

## What it looks like

### Storefront

The homepage is a simple grid of artworks with large images and clear prices.

Visitors can click into a product to see details, more photos and the Lightning price.

The “About” page is fully editable from the admin: photo, text, contact note, Nostr identity and Lightning address.

---

### Paying with Lightning and on-chain

At checkout, buyers choose how…

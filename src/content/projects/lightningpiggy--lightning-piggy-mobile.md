---
repo: "LightningPiggy/lightning-piggy-mobile"
name: "lightning-piggy-mobile"
description: "Lightning Piggy — a family Bitcoin Lightning wallet and Nostr app for smart savers (React Native / Expo)."
readmeQualityOk: true
url: "https://github.com/LightningPiggy/lightning-piggy-mobile"
homepage: "https://lightningpiggy.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["android", "bitcoin", "expo", "family", "ios", "lightning-network", "marmot", "mls", "nostr", "nwc"]
stars: 16
forks: 5
openIssues: 171
closedIssues: 614
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-05-18T20:22:09Z"
lastCommitAt: "2026-10-14T08:58:11Z"
lastReleaseAt: "2026-05-25T00:37:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 71
maintainers: ["BenGWeeks"]
openGraphImageUrl: "https://opengraph.githubassets.com/4de293714237259e64d123e90bbb5b391ef7df767cb4fc5c669eeda86fdbaf49/LightningPiggy/lightning-piggy-mobile"
---

A mobile Bitcoin Lightning wallet for smart savers and their families, built with Expo/React Native, connecting via Nostr Wallet Connect (NWC) with Nostr social features.

## Features

**Wallets**

- Connect any Lightning wallet via NWC (Nostr Wallet Connect)
- On-chain Bitcoin wallets (watch-only via xpub, or hot wallets via mnemonic)
- **Wallets tab**: swipe between wallet cards, and each wallet's transactions appear instantly while fresh data loads in the background. Add, reorder, hide or remove wallets under Account → **Manage wallets**
- Transfer funds between wallets (LN-to-LN, LN-to-on-chain, on-chain-to-LN, on-chain-to-on-chain)
- Send payments by scanning QR codes or pasting invoices
- Send to lightning addresses (user@domain) via LNURL-pay
- Send to on-chain addresses (BIP-21 URI support with amount)
- NIP-57 zaps to Nostr contacts
- Receive payments with QR code generation (optional amount for BIP-21)
- Real-time balance display with fiat conversion

**Nostr identity and messaging**

- Nostr identity login: local `nsec`, Amber (NIP-55, Android), or a remote signer over NIP-46 / Nostr Connect (Clave on iOS, Aegis, nsec.app). Several accounts on one phone, each with its…

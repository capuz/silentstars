---
repo: "evefrontier/evevault"
name: "evevault"
description: "A Chrome extension and web browser wallet for Sui blockchain using zkLogin authentication. Implements the Sui Wallet Standard for seamless dApp integration with EVE Frontier FusionAuth OAuth support."
readmeQualityOk: true
url: "https://github.com/evefrontier/evevault"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 23
forks: 7
openIssues: 3
closedIssues: 21
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2025-12-18T14:46:29Z"
lastCommitAt: "2026-10-29T10:20:34Z"
lastReleaseAt: "2026-05-07T17:16:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 44
maintainers: ["fcsondheim"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfdfe7385b35bf405711c4e48ada75b820f052cb86733be7277971d9bc3df190/evefrontier/evevault"
---

# EVE Vault Wallet

EVE Vault Wallet is a Chrome and Firefox MV3 extension and web app built with WXT and React. It implements the Sui Wallet Standard to let dApps discover and connect to a user wallet. User authentication supports **EVE Frontier FusionAuth** via the browser's `identity` API. After login, a [Sui zkLogin](https://docs.sui.io/concepts/cryptography/zklogin) address is derived and exposed to dApps via the wallet standard.

## Features

- EVE Frontier OAuth (FusionAuth) with PKCE
- zkLogin address derivation
- Wallet Standard implementation for dApp discovery (Chrome & Firefox)
- PIN-protected vault — Argon2id (memory-hard) key derivation; decrypted keys held only in offscreen/in-process memory, never persisted
- Auto-lock 10 minutes after unlock (web + extension), with a PIN re-entry screen if the vault expires mid-approval
- Transaction simulation in the approval popup — projected balance changes, gas, object changes, events, and success/failure before signing
- Automatic zkLogin session recovery on epoch expiry (rotates keys, retries; address unchanged)
- Multi-network support (Mainnet, Devnet, Testnet, Localnet)
- Multi-tenant FusionAuth configuration
- Reports…

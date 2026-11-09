---
repo: "SovranBitcoin/Sovran"
name: "Sovran"
description: "A mobile Cashu wallet"
readmeQualityOk: true
url: "https://github.com/SovranBitcoin/Sovran"
homepage: "https://sovran.money"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["bitcoin", "cashu", "ecash", "lightning"]
stars: 25
forks: 4
openIssues: 12
closedIssues: 45
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2024-12-05T09:33:39Z"
lastCommitAt: "2026-11-09T03:30:57Z"
lastReleaseAt: "2026-09-12T18:44:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 66
maintainers: ["Kelbie"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d24f1cad9f0e878161bffa244e7961dfebf183bb45699806f9285ddc37f3e9b/SovranBitcoin/Sovran"
---

# Sovran

Monorepo for the Sovran Bitcoin wallet and its self-contained packages. Managed
with [Bun](https://bun.sh) workspaces — no inter-package publishing; everything
links directly.

## Layout

| Package    | Path      | What it is |
|------------|-----------|------------|
| **app**    | [`app/`](https://github.com/SovranBitcoin/Sovran/blob/HEAD/app/)       | The Expo / React Native application (the product). |
| **wallet** | [`wallet/`](https://github.com/SovranBitcoin/Sovran/blob/HEAD/wallet/) | Payment UX logic for Coco-based Cashu wallets — parsing, classification, routing, annotation, offline suggestions. UI- and navigation-agnostic. (Formerly the `colada` repo.) |
| **nostr**  | [`nostr/`](https://github.com/SovranBitcoin/Sovran/blob/HEAD/nostr/)   | Typed, UI-agnostic client helpers for the Nagg GraphQL / app-view APIs and the tiered Nostr data layer. (Formerly the `nagg-ts` repo.) |
| **docs**   | [`docs/`](https://github.com/SovranBitcoin/Sovran/blob/HEAD/docs/)     | The documentation site ([VitePress](https://vitepress.dev)). |
| **copy**   | [`copy/`](https://github.com/SovranBitcoin/Sovran/blob/HEAD/copy/)     | Dependency-free claims policy, onboarding copy and…

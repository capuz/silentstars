---
repo: "Farukest/Ctrl-ArcZ"
name: "Ctrl-ArcZ"
description: "Protected, Reversible & Private USDC Payments on Arc ( Web + SDK & Android App )"
readmeQualityOk: true
url: "https://github.com/Farukest/Ctrl-ArcZ"
homepage: "https://ctrlarcz.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["address-poisoning", "arc", "cctp", "circle", "erc-5564", "foundry", "payments", "sdk", "solidity", "stablecoin"]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-12T23:09:07Z"
lastCommitAt: "2026-08-29T10:20:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 60
maintainers: ["Farukest"]
openGraphImageUrl: "https://opengraph.githubassets.com/5418feb6279153d994ed95a91c9c2ed0c68efd14878ec776edf9092ce1f45b7d/Farukest/Ctrl-ArcZ"
---

# Ctrl+ArcZ

**Screened before it is signed. Recallable until it is claimed. Repeatable without handing over your wallet.**


USDC payments on Arc with the three things a plain transfer does not have: a firewall that refuses a bad recipient before anything is signed, a lock the sender can undo until the recipient proves the money was meant for them, and a bounded spend box that lets a merchant or an agent charge you again without ever touching your wallet. One SDK, one contract, no custody.

Three surfaces on one backend: **[ctrlarcz.xyz](https://ctrlarcz.xyz)** is the web app, **[`@ctrl-arcz/sdk`](https://www.npmjs.com/package/@ctrl-arcz/sdk)** is the engine behind it and is published on npm, and the **[Android app](https://play.google.com/store/apps/details?id=com.xyz.ctrlarcz)** is a native Kotlin client on Google Play. The Android app is fed by the same `apps/api` endpoints and the same deployed contracts the SDK drives, and `packages/sdk/parity-vectors.json` holds both implementations to one specification.

```bash
npm install @ctrl-arcz/sdk viem
```

[Turkish version](https://github.com/Farukest/Ctrl-ArcZ/blob/HEAD/README.tr.md)

## Contents

- [In one…

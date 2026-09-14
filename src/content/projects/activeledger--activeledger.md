---
repo: "activeledger/activeledger"
name: "activeledger"
description: "Activeledger is a powerful distributed ledger technology."
readmeQualityOk: true
url: "https://github.com/activeledger/activeledger"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["blockchain", "dlt", "distributed-ledger-technology", "smart-contracts", "ledger"]
stars: 20
forks: 8
openIssues: 6
closedIssues: 1
watchers: 8
contributors: 7
recentReleases: 10
createdAt: "2018-04-24T17:29:59Z"
lastCommitAt: "2026-09-14T09:13:10Z"
lastReleaseAt: "2026-08-31T23:37:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 81
undervaluedScore: 61
maintainers: ["AdmWalker", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec668105b493767f7a17d0824379356fb75cf71072836754ee438ebea75a41a8/activeledger/activeledger"
---

Activeledger is a distributed ledger technology. A network of permissioned nodes gossips transactions to each other, votes on them, and commits the ones that reach consensus — each node reaching its own conclusion by watching the same traffic, rather than waiting on a single leader. Application logic lives in smart contracts (TypeScript, executed in a per-transaction worker process and checked by a security scan at deploy time), and consensus is tracked per-stream rather than globally, so unrelated transactions can be voted on and committed concurrently.

## Requirements

**Node.js 24.x** (the current LTS line) is the recommended and actively-tested version — every workflow in `.github/workflows/` builds, tests and publishes on 24. The native HTTP/consensus transport ([uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)) ships prebuilt bindings for a specific set of Node majors at any given time; the pinned v20.67.0 carries ABI 127, 137 and 147, which is Node 22, 24 and 26, so 22.x also works today. If you hit an error like `This version of uWS.js (...) supports only Node.js versions ...` on a Node version you'd expect to work, check that `node_modules/uWebSockets.js`…

---
repo: "voku/AmysEcho"
name: "AmysEcho"
description: "This repository contains the development work for my little girl — to help her be understood, to help her learn, and to help others understand her world."
readmeQualityOk: true
url: "https://github.com/voku/AmysEcho"
homepage: "https://voku.github.io/AmysEcho/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 43]
stars: 15
forks: 0
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-13T21:24:41Z"
lastCommitAt: "2026-11-22T11:45:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 62
maintainers: ["voku", "renovate[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/491d6a13a1fbb00a886871036f2199c275f9757ea7672b021611965ed71fc0b2/voku/AmysEcho"
discussionCount: 0
---

# Amy's Echo NG

A local-first communication aid (AAC) for children with special needs. A child picks a
**communication concept** on a board, or makes a **personal gesture** that a caregiver has taught
the app, and the device shows and speaks the German message. It started for Amy, who has 22q11
deletion syndrome and communicates with signs based on Deutsche Gebärdensprache (DGS); it is built
so that every child profile uses its own gestures.

Product plan and gates: [#1176](https://github.com/voku/AmysEcho/issues/1176).
Product, device and privacy contract (draft): [docs/s0a-product-contract-v0.1.md](https://github.com/voku/AmysEcho/blob/HEAD/docs/s0a-product-contract-v0.1.md).

## Status

Early rebuild. What exists today:

- an offline concept board with five **synthetic, not caregiver-approved** example concepts,
  German text, bundled placeholder symbols and speech through a local German voice when the
  browser offers one;
- a service worker that pre-caches the local bundle.

Not built yet: child profiles, export/restore/delete, camera input and gesture recognition.
Nothing here has been verified on a physical device or with a child.

---
repo: "zbagdzevicius/tokentails"
name: "tokentails"
description: "Take care of your cat"
readmeQualityOk: true
url: "https://github.com/zbagdzevicius/tokentails"
homepage: "https://tokentails.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-07-29T18:04:45Z"
lastCommitAt: "2026-11-09T00:53:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 77
maintainers: ["zbagdzevicius", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2ace9f4c8ea38e89ba04cc40a5737c65711f359d69acd2b39a615b87ed7dcfe/zbagdzevicius/tokentails"
---

A Web3 and AI pet universe where rescued cats become collectible companions, game characters,
  and portraits, and where play funds real shelters.

---

## What it is

Token Tails links three loops. Shelters register rescued cats, and AI turns each one into a
collectible character. Players collect, feed, stake, and play with those cats across pixel
platformers, a match-3 mode and the 3D stealth game Catnip Heist, earning Tails (rescue points with no cash
value) and catnip. Anyone can buy an AI portrait of their
own pet or a card pack, and purchases flow back to shelter partners. Ownership is recorded as NFTs
on Stellar.

## Repository

| Path | What | Stack |
|---|---|---|
| [`backend/`](https://github.com/zbagdzevicius/tokentails/blob/HEAD/backend/) | REST API: auth, cats, blessings, shelters, games, payments, AI generation, cron | NestJS 9, MongoDB, Stripe, Stellar SDK, OpenAI, Gemini |
| [`client/`](https://github.com/zbagdzevicius/tokentails/blob/HEAD/client/) | Website, game shell, portrait funnel, feed, marketplace; also the mobile web bundle | Next.js 16, React 19, Phaser 4, Capacitor 7, Stellar Wallets Kit |
|…

---
repo: "fabrary/cards"
name: "cards"
description: "TypeScript representations of Flesh and Blood cards"
readmeQualityOk: true
url: "https://github.com/fabrary/cards"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["fabtcg", "flesh-and-blood-tcg"]
stars: 34
forks: 7
openIssues: 0
closedIssues: 17
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-04-27T03:24:50Z"
lastCommitAt: "2026-08-12T05:15:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 60
maintainers: ["manwaring"]
openGraphImageUrl: "https://opengraph.githubassets.com/b242d5eb65f1439d2e2427d4baac8cffe2a35c3c661c195f0e501fa200baa10f/fabrary/cards"
fundingLinks: ["CUSTOM:https://metafy.gg/@fabrary"]
---

# Flesh and Blood cards

A monorepo of **Flesh and Blood** card data and tooling, published as three packages and managed with
[lerna](https://lerna.js.org/) + [nx](https://nx.dev/) + npm workspaces. All three share a single
version (see `lerna.json`).

## Packages

| Package                                      | What it is                                                                       |
| -------------------------------------------- | -------------------------------------------------------------------------------- |
| [`@flesh-and-blood/types`](https://github.com/fabrary/cards/blob/HEAD/packages/types)   | Enums, interfaces, and helper functions (`getDefaultPrinting`, `getPrint`, etc.) |
| [`@flesh-and-blood/cards`](https://github.com/fabrary/cards/blob/HEAD/packages/cards)   | Every Flesh and Blood card as a single `cards: Card[]` export                    |
| [`@flesh-and-blood/search`](https://github.com/fabrary/cards/blob/HEAD/packages/search) | A [fuse.js](https://www.fusejs.io/)-based search engine                          |

All packages publish **dual ESM + CJS** for maximum compatibility.

## Quick start

Install the package(s) you need:

```bash
npm i…

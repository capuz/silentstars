---
repo: "lexifina/global-law"
name: "global-law"
description: "Git for Global Law: the law of every country as one git history, each country's record a submodule, every commit one law taking effect"
readmeQualityOk: true
url: "https://github.com/lexifina/global-law"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 264
forks: 14
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-10-28T13:34:16Z"
lastCommitAt: "2026-10-30T11:04:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b168e49be77f619b857a4cd550d10dd11c870b55a1c536bf9ebb2fb8a86d5231/lexifina/global-law"
---

# Git for Global Law

**The world's law in one git history. Every word traced to the law that wrote it for any country and any date.**

An expansion of the same for the US Code, [#1 on Hacker News (28/10/26)](https://news.ycombinator.com/item?id=50268380).
Semantic, searchable law on a global scale.

https://github.com/user-attachments/assets/f24f3411-24d9-416a-8c45-9cebc817c64e

**Free to use: [CC0](https://github.com/lexifina/global-law/blob/HEAD/LICENSE.md).** Fork it, build on it, ship it in a product: no permission or credit needed. The law text
sits in each country's repository, under that repository's own terms.

The law of many jurisdictions as one git history. Each jurisdiction's law is its own repository, where every commit
is one law taking effect, written by that law. This repository arranges those repositories by jurisdiction and
interleaves their histories in the order the changes took force, so a single commit here is the state of all of them on
one day.

```
global-law/
├── manifest.json            every corpus: path, source repo, coverage, which trailer holds the in-force date
├── jurisdiction.json        the world, and its children: 193 UN members, other…

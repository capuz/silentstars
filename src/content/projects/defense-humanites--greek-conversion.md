---
repo: "defense-humanites/greek-conversion"
name: "greek-conversion"
description: "A small, yet powerful, JavaScript library for converting both polytonic and monotonic Greek from/into many representations."
readmeQualityOk: true
url: "https://github.com/defense-humanites/greek-conversion"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["greek", "conversion", "betacode", "transliteration", "classics", "humanities", "romanization", "ala-lc", "bnf", "sbl"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-05-06T19:22:47Z"
lastCommitAt: "2026-09-26T08:47:25Z"
lastReleaseAt: "2024-03-26T11:21:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 70
maintainers: ["antoineboquet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/365015020/338afa2a-82fb-4ef2-ad1c-469eb68a2676"
discussionCount: 0
---

# greek-conversion

This library supports bidirectional conversion between Greek, Beta Code,
and scientific transliteration. It provides predictable output, named
standards-oriented presets, and diagnostics when a conversion loses
information. Unknown characters are preserved instead of being silently
discarded.

## Summary

1. [Installation](#installation)
2. [Quick start](#quick-start)
3. [Choose the right API](#choose-the-right-api)
4. [Use a preset](#use-a-preset)
   1. [Inspect effective defaults](#inspect-effective-defaults)
5. [Common recipes](#common-recipes)
   1. [Produce monotonic Greek](#produce-monotonic-greek)
   2. [Remove all or selected diacritics](#remove-all-or-selected-diacritics)
   3. [Fold Greek letter variants](#fold-greek-letter-variants)
   4. [Normalize case and whitespace](#normalize-case-and-whitespace)
   5. [Select transliteration spellings](#select-transliteration-spellings)
   6. [Control Greek Unicode output](#control-greek-unicode-output)
6. [Detect information loss](#detect-information-loss)
7. [Extend or restrict the character inventory](#extend-or-restrict-the-character-inventory)
8. [Guarantees and scope](#guarantees-and-scope)
9. [Advanced…

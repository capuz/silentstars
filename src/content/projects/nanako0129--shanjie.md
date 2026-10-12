---
repo: "Nanako0129/shanjie"
name: "shanjie"
description: "Shanjie (善解): an open-source macOS Zhuyin input method that puts choosing the correct homophone first (under development)"
originalDescription: "善解：以選對同音字為第一優先的開源 macOS 注音輸入法（開發中）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Nanako0129/shanjie"
homepage: "https://shanjie.nyanako.com"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [45, 30]
stars: 23
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T14:42:16Z"
lastCommitAt: "2026-10-12T11:16:02Z"
lastReleaseAt: "2026-10-08T12:16:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 40
maintainers: ["Nanako0129"]
openGraphImageUrl: "https://opengraph.githubassets.com/180d1f96dd6705a8c923357748af9ec0136fbdfd0ded8586b27621774980f9a8/Nanako0129/shanjie"
---

# shanjie (善解)

An open-source macOS Zhuyin input method that puts correct character selection first (under continuous development).

- Plan: `docs/PLAN.md`
- License: code under Apache-2.0 (`LICENSE`); data see `LICENSES/data.md`
- Want to contribute: see [`CONTRIBUTING.md`](https://github.com/Nanako0129/shanjie/blob/HEAD/CONTRIBUTING.md)

## Progress

For the latest release, see [Releases' Latest](https://github.com/Nanako0129/shanjie/releases/latest): a Zhuyin input method ready to install and use. Changes in each version are in the release notes (`docs/releases/`).
- Standard and Eten keyboard layouts; whole-sentence conversion (lexicon + bigram language model + part-of-speech fallback); Ministry of Education "一／不／法" pronunciation variants.
- Character selection using preceding text: reads the characters already committed before the cursor, then uses them to select the first word of this segment.
- Real-time prediction: type the first Zhuyin symbol of the next word, and the candidate window lists words that fit the preceding text (Tab enters selection; the menu can turn it off).
- Selection memory: learns from changing candidates in the candidate window and from selections in…

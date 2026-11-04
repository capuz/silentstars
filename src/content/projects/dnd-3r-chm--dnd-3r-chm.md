---
repo: "dnd-3r-chm/dnd-3r-chm"
name: "dnd-3r-chm"
description: "3R Expansion Compendium (Provisional Testing)"
originalDescription: "3R扩展大全(暂行测试)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dnd-3r-chm/dnd-3r-chm"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 38
forks: 10
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2024-08-22T03:11:29Z"
lastCommitAt: "2026-11-04T11:27:19Z"
lastReleaseAt: "2026-11-01T17:08:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["yls104", "Rechargeable-Leonardo", "PathfinderAna"]
openGraphImageUrl: "https://opengraph.githubassets.com/56e575dec91a79d216fe5f1ac5a9c2a2236733612b162b0ffe39f78fb0e85186/dnd-3r-chm/dnd-3r-chm"
---

# Dungeons & Dragons 3R Expansion Rules Compendium

In short, the 3rd edition expansion compendium has now also begun using GitHub for version control.

We recommend reading the [readme.md](https://github.com/DND5eChm/DND5e_chm/blob/main/README.md) of the 5th edition compendium.

Or, to learn related techniques, see the forum post ["How to Contribute to the 5e Compendium"](https://www.goddessfantasy.net/bbs/index.php?topic=151088.0) on the 5th edition discussion board of Goddess Fantasy (果园).

## Pages and CHM Project

This repository uses the `Contents.hhp` project, the `Contents.hhc` table of contents, and the `Index.hhk` index in the root directory. Open the project in HTML Help Workshop and compile it. New pages and resources should be registered under `[FILES]`, and the table of contents and index updated accordingly. Generated CHM files are not under version control.

HTML/HTM files and these three project files are kept in GBK encoding. Body characters that GBK cannot represent are written as HTML numeric entities to avoid losing characters. Page declarations must match the actual encoding, and internal site links use relative paths. New pages should retain this page's…

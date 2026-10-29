---
repo: "alexopenfan-xiaxin/jianxi-reader"
name: "jianxi-reader"
description: "Jianxi, a pure and clean mobile Markdown & HTML reader"
originalDescription: "简兮，一个纯粹简洁的移动端Markdown&HTML阅读器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/alexopenfan-xiaxin/jianxi-reader"
language: "Dart"
languages: ["Dart"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-04T10:53:13Z"
lastCommitAt: "2026-10-29T14:07:11Z"
lastReleaseAt: "2026-06-05T11:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 45
maintainers: ["alexopenfan-xiaxin"]
openGraphImageUrl: "https://opengraph.githubassets.com/baad029de33ebd886f71fe4ec6dbe7231fea906c35fb2cfeb86da35f031adada/alexopenfan-xiaxin/jianxi-reader"
---

# jianxi-reader

Jianxi, a pure and clean mobile Markdown / HTML reader.

No ads, no background sync, no account system. Open and read, finish and go. Document parsing and library data are kept on your device by default. Remote Markdown images, external HTML resources, and manual update checks may access the network, but the app does not track users.

## QQ Group

[Click to join the QQ group](https://qm.qq.com/q/IcQIMYOaQg)

## Background

With the popularity of codex and claude code, we now need to control things remotely from mobile devices. In daily work we have accumulated large numbers of Markdown notes and technical documents. Reading them on a phone doesn't work: browsers require scrolling through tables of contents, and note apps are too heavy. The goal of Jianxi Reader is just one thing: to turn your phone into a clean document browser.

## Design Principles

- **Local first**: all documents stay on your device and never pass through any server
- **Original format**: no format conversion, no file locking; it renders the `.md` and `.html` files you have directly
- **Predictable operations**: importing is referencing, renaming changes the file name, removing means deleting…

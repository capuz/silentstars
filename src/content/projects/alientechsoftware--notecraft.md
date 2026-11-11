---
repo: "AlienTechSoftware/notecraft"
name: "notecraft"
description: "Note taking and organization; an open-source, clean-room reimplementation of Microsoft OneNote, rebuilt in pure Rust"
readmeQualityOk: true
url: "https://github.com/AlienTechSoftware/notecraft"
homepage: "https://notecraft.cloud/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["artcraft", "notecraft", "productivity", "vibecoding", "onenote", "note", "notes", "office"]
stars: 160
forks: 17
openIssues: 21
closedIssues: 17
watchers: 2
contributors: 8
recentReleases: 9
createdAt: "2026-10-17T18:30:53Z"
lastCommitAt: "2026-11-11T19:47:34Z"
lastReleaseAt: "2026-11-08T04:06:19Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 32
maintainers: ["leifrossau", "mameen", "alientechsw"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1423627652/658ab523-7e56-4207-8db3-80712a50897d"
discussionCount: 0
---

NoteCraft is an open-source, clean-room recreation of the OneNote notebook experience, built around local files. Keep your notes on your device and sync or back them up with the tools you choose.

  NoteCraft is an open-source, clean-room recreation of the OneNote notebook experience. It keeps notebooks, sections, pages, pictures and attachments as ordinary folders and files on your device. You can choose how to sync and back them up, using tools you already trust, without a NoteCraft server or account.

## A tour

Every picture below is NoteCraft itself, drawn off screen by its own test harness
(`cargo xtask screenshots`), not a mock-up.

## Why NoteCraft

- **Your notes are files.** A notebook is a folder. A page is `index.html` or `index.md` with its
  pictures beside it. Open them in any editor, grep them, put them in git, or delete the app.
- **You can look inside.** A OneNote section is one binary file, and a text editor shows noise.
  NoteCraft's page source view lists every file a page owns and shows what is in each, the page's
  own text with its head, the drawing, the pictures, so you can check what your notes contain
  without taking anyone's word for it. See [Look…

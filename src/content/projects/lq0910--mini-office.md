---
repo: "lq0910/mini-office"
name: "mini-office"
description: "Mini Office: an extremely lightweight office experience. Say goodbye to bloated, slow software and start a new way of working."
originalDescription: "Mini Office 极致轻量的office体验，告别臃肿慢，开启全新办公新体验。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lq0910/mini-office"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 26
forks: 2
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-10-18T00:19:18Z"
lastCommitAt: "2026-11-05T14:04:40Z"
lastReleaseAt: "2026-11-01T00:56:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 44
maintainers: ["lq0910", "hou0"]
openGraphImageUrl: "https://opengraph.githubassets.com/638a09c78d48140f34bde6161d29666288c5e1a7070cbb4ed92d5fa53621804c/lq0910/mini-office"
---

# Mini Office

Current source version: **0.1.8** · [0.1.8 release notes](https://github.com/lq0910/mini-office/blob/HEAD/docs/releases/v0.1.8.md) · [Current features and verification status](https://github.com/lq0910/mini-office/blob/HEAD/docs/implementation-status.md)

Version 0.1.8 continues to improve Word and legacy DOC import, layout compatibility, and round-tripping of table properties, and adds configurable page crop marks. Pagination differences in the procurement sample remain unresolved.

> A lightweight, offline-first, cross-platform office suite. It keeps only the Office features you actually need.

Mini Office is a desktop office application built on **Rust + Tauri 2 + React + TypeScript** that handles three file types in one app: Microsoft Word (DOCX), Excel (XLSX/CSV), and PowerPoint (PPTX). It puts "real file compatibility" and "document safety" ahead of feature count. When a file is opened, it first runs a capability scan. Editability and save strategy are graded L0–L3, and unknown OOXML parts are never silently deleted.

## Implemented capabilities

| Module | Capabilities |
|---|---|
| Unified desktop shell | Multi-file tabs, recent files, command palette…

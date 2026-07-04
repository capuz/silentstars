---
repo: "trypsynth/paperback"
name: "paperback"
description: "An accessible, light-weight, cross-platform ebook and document reader."
readmeQualityOk: true
url: "https://github.com/trypsynth/paperback"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["accessibility", "blind", "cpp", "document", "ebook", "macos", "reader", "windows", "wwxwidgets"]
stars: 80
forks: 29
openIssues: 17
closedIssues: 256
watchers: 11
contributors: 19
recentReleases: 0
createdAt: "2025-05-19T15:47:38Z"
lastCommitAt: "2026-07-04T23:10:34Z"
lastReleaseAt: "2025-11-15T23:35:17Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 98
undervaluedScore: 50
maintainers: ["trypsynth", "aryanchoudharypro", "LeonarddeR"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e1ac7b39178741dabf02b97d6770f1621872c017537bdaa29ac493ea489523/trypsynth/paperback"
fundingLinks: ["GITHUB:https://github.com/trypsynth", "CUSTOM:https://paypal.me/tygillespie05"]
discussionCount: 58
---

# Paperback

[Paperback](https://paperback.dev) is a lightweight, fast, and accessible ebook and document reader for everyone, from casual readers to heavy power users. Designed for screen reader accessibility and a blazing fast bloat-free reading experience.

## Features

- Written entirely in Rust to ensure it's modern, fast, and memory-safe
- Supports many common document formats: HTML, EPUB, FB2, CHM, PDF, DOCX, PPTX, DOC, PPT, ODT, RTF, Markdown, and plain text
- Intuitive tabbed interface for managing multiple documents
- Full screen reader accessibility
- Robust find functionality for quick document searches
- Seamless navigation between EPUB sections, headings, pages, links, lists, images, figures, and tables via hotkeys similar to screen reader conventions
- Precise navigation to specific lines or percentages within documents
- Lightweight installer that automatically sets up file associations
- Translated into numerous languages

## Workspace layout

This is a Cargo workspace. The main crates are:

| Crate | Description |
|---|---|
| `paperback-core` | Core document parsing and reading logic (library) |
| `paperback` | The GUI application (wxWidgets via wxDragon) |
|…

---
repo: "ParticleLight/ParticleBook"
name: "ParticleBook"
description: "Full-featured e-book reader with built-in Z-Library | Z-Library Integrated All-In-One E-Book Reader"
originalDescription: "内置 Z-Library 的全功能电子书阅读器 | Z-Library Integrated All-In-One E-Book Reader"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ParticleLight/ParticleBook"
homepage: "https://github.com/ParticleLight/ParticleBook"
language: "JavaScript"
languages: ["JavaScript", "C++", "TypeScript"]
languagePcts: [39, 37, 22]
topics: ["ebook-reader", "electron", "epub", "pdf", "react", "zlibrary"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-08T08:48:29Z"
lastCommitAt: "2026-10-28T09:56:42Z"
lastReleaseAt: "2026-09-13T09:18:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 46
maintainers: ["ParticleLight"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b4a7bc9181bba2947c837c97888d91cf9674acec39f6d9971449dbc8af79970/ParticleLight/ParticleBook"
discussionCount: 1
---

# ParticleBook

**A lightweight e-book reader with built-in Z-Library**. It is a native C++ Win32 app with a WebView2 frontend, and the installer is only ~25MB (the Electron version is ~150MB). Current version: **v2.2.0**.

## Why Choose ParticleBook?

- **Extremely lightweight**: Native C++ compilation, 3x+ faster startup, and memory usage only 1/3 of the Electron version
- **Built-in Z-Library**: No browser needed. Browse, search, and download Z-Library books directly in the app, and import them to your bookshelf with one click
- **Full format coverage**: EPUB, PDF, MOBI, TXT, FB2, CBZ/CBR, HTML, Markdown
- **Full-book full-text search**: All 8 formats supported, with EPUB indexed across chapters and native text extraction for PDF
- **Security hardening**: Update downloads are verified with a full SHA-512 integrity check and a URL allowlist, and installation is aborted if the installer has been tampered with or replaced. External web pages cannot call local privileged methods. Reading content is uniformly sanitized to prevent malicious e-book injection

## Supported Formats

| Format | Engine | Notes |
|------|------|------|
| EPUB | epub.js | Table of contents, highlighting,…

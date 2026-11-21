---
repo: "BryanBradfo/mantispdf"
name: "mantispdf"
description: "Every PDF tool. Zero uploads. 28 tools (merge, edit, sign, redact, OCR, compare...) running 100% on your device, in the browser or as a desktop app."
readmeQualityOk: true
url: "https://github.com/BryanBradfo/mantispdf"
homepage: "https://mantispdf.bradfo.me"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [52, 46]
topics: ["pdf", "rust", "browser-tool", "privacy", "react", "webassembly"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-03-02T16:21:34Z"
lastCommitAt: "2026-11-21T11:15:05Z"
lastReleaseAt: "2026-11-20T22:17:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 65
maintainers: ["BryanBradfo"]
openGraphImageUrl: "https://opengraph.githubassets.com/911d4f9963981ef3d72f884a56682da477e5da99bf1ffea7248241fa65b2dd11/BryanBradfo/mantispdf"
discussionCount: 1
---

# MantisPDF

**MantisPDF** is a free, open-source PDF toolkit that runs entirely in your browser: 28 tools, from
merging and compressing to editing, filling forms, true redaction, OCR and comparing two PDFs. Every file is processed on
your device by a Rust engine compiled to WebAssembly. Nothing is uploaded.

---

## Why MantisPDF?

Most online PDF tools (iLovePDF, Smallpdf, ...) upload your files to their servers. MantisPDF does not.

- **No uploads.** Your PDFs never leave your device. Every request stays on the app's own origin,
  including the OCR engine and its language data, and the end-to-end tests check it.
- **No account.** Open the page and use it, online or as a desktop app.
- **Fast.** PDF work runs in a Web Worker, so the interface stays responsive on large files.
- **Open source.** MIT licensed: audit it, fork it, self-host it.

The hosted site uses Vercel's cookieless page-view analytics. Your documents are never part of it.

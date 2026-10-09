---
repo: "flash-tex/flashtex"
name: "flashtex"
description: "Blazing ⚡️ fast (La)TeX compiler + IDE written in Rust (HackCMU 2026 Winner)"
readmeQualityOk: true
url: "https://github.com/flash-tex/flashtex"
homepage: "https://flash-tex.github.io/flashtex/"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [61, 22]
topics: ["cmu", "compiler", "ide", "latex", "rust", "swift", "tex"]
stars: 81
forks: 3
openIssues: 58
closedIssues: 245
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-09-12T01:40:07Z"
lastCommitAt: "2026-10-09T09:49:37Z"
lastReleaseAt: "2026-09-17T10:55:33Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 39
maintainers: ["jay3332", "GoKubar"]
openGraphImageUrl: "https://opengraph.githubassets.com/458dedac3953c446987038a7b497d7ffad21158a057150e7cb5f12f118d700b8/flash-tex/flashtex"
---

FlashTeX is a blazing-fast (La)TeX engine written in Rust.
This project actually consists of two things:

- A _complete rewrite_ of the TeX compiler from scratch
  with modern features (incremental compilation, fancy diagnostics, etc.)
  
- A native, lightweight, and snappy TeX IDE with live (sub-10ms)
  previews, which pairs with a companion iPad app (FlashTeXPad)
  for inline LaTeX/TiKZ OCR (including diagrams).

**An incremental LaTeX engine with a command line, and a native macOS IDE
built on it — no TeX distribution required.**

FlashTeX is a Rust LaTeX engine. `flashtex build main.tex` lexes, lays out
and paints a document in tens of milliseconds, using the same TeX font
metrics as pdfLaTeX and the real Latin Modern faces (Computer Modern design;
New Computer Modern Math for the blackboard-bold and `amssymb` glyphs), and
writes the PDF with its own bundled writer — embedded font subsets, images,
links. The IDE, a Swift app for macOS, is a complementary project that links
nothing and drives the very same engine over a documented JSON Lines protocol
(`flashtex worker`): you type LaTeX and the page re-renders as you type. An
iPad companion (FlashTeXPad) turns Pencil sketches…

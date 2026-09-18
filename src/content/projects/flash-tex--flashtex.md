---
repo: "flash-tex/flashtex"
name: "flashtex"
description: "Blazing ⚡️ fast (La)TeX compiler + IDE written in Rust (HackCMU 2026 Winner)"
readmeQualityOk: true
url: "https://github.com/flash-tex/flashtex"
homepage: "https://flash-tex.github.io/flashtex/"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [57, 25]
topics: ["cmu", "compiler", "ide", "latex", "rust", "swift", "tex"]
stars: 62
forks: 3
openIssues: 79
closedIssues: 135
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-09-12T01:40:07Z"
lastCommitAt: "2026-09-18T14:02:40Z"
lastReleaseAt: "2026-09-17T10:55:33Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 40
maintainers: ["d-q222", "jay3332"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ff48d3c1344512ec13fbc233a9de057648ace70ceea8de176fa4b395e33a119/flash-tex/flashtex"
---

# FlashTeX

FlashTeX is a blazing ⚡️ fast (La)TeX engine written in Rust. 
This project actually consists of two things:

- A _complete rewrite_ of the TeX compiler from scratch
  with modern features (incremental compilation, fancy diagnostics, etc.)
  
- A native, lightweight, and snappy TeX IDE with live (sub-10ms)
  previews, which pairs with a companion iPad app (FlashTeXPad)
  for inline LaTeX/TiKZ OCR (including diagrams).

## See Also

- Landing page: https://flash-tex.github.io/flashtex
- Quickstart/setup: https://flash-tex.github.io/flashtex/download
- Discord server: https://discord.gg/J4kHDJmTrD

---

**An incremental LaTeX engine with a command line, and a native macOS IDE
built on it — no TeX distribution required.**

FlashTeX is a Rust LaTeX engine. `flashtex build main.tex` lexes, lays out
and paints a document in tens of milliseconds, using the same TeX font
metrics as pdfLaTeX and the real Latin Modern faces (Computer Modern design;
New Computer Modern Math for the blackboard-bold and `amssymb` glyphs), and
writes the PDF with its own bundled writer — embedded font subsets, images,
links. The IDE, a Swift app for macOS, is a complementary project that links…

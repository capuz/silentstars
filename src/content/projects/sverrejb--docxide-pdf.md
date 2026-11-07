---
repo: "sverrejb/docxide-pdf"
name: "docxide-pdf"
description: "Rust library and CLI for converting DOCX files to PDF, matching Microsoft Word's output as closely as possible."
readmeQualityOk: true
url: "https://github.com/sverrejb/docxide-pdf"
homepage: "https://docxide-demo.fly.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["docx", "microsoft", "msword", "pdf-converter", "word", "wordtopdf"]
stars: 21
forks: 9
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-05-09T13:19:22Z"
lastCommitAt: "2026-11-07T10:36:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 69
maintainers: ["sverrejb"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b781f16e757d5bdda8000567f0b09e56dc9774288363c88986ee267ff902673/sverrejb/docxide-pdf"
---

# docxide-pdf

Library and CLI for converting DOCX files to PDF, matching Microsoft Word's output as closely as possible.

[Try the demo!](https://docxide-demo.fly.dev/)

**🫶 Accessible:** Output PDFs should be just as accessible as Word's export, or better: tagged structure, reading order, language and metadata that pass the same PDF/UA checks.

**🎯 Accurate:** Given a `.docx` file, produce a `.pdf` that is visually identical to what Word would export.

**⚡️ Fast:** Typical conversions complete in under 100ms.

**🤏 Small files:** Output PDFs should be the same size or smaller than Word's export.

Reference PDFs are generated using Microsoft Word for Mac (16.106.1 and later). Most (173 of 234) use the "Best for electronic distribution and accessibility (uses Microsoft online service)" export option; the other 61 were made with "Best for printing", macOS's untagged print path.

## ⚠️ Work in progress.

This crate **might** work for your production case, do give it a try! The API, output quality, and supported features are all actively changing.

## Comparison with other converters

[Side-by-side comparison](https://sverrejb.github.io/docxide-pdf/)

[Score…

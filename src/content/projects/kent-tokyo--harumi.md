---
repo: "kent-tokyo/harumi"
name: "harumi"
description: "Rust-native PDF engine for layout-preserving CJK text replacement, OCR layers, and AI document workflows."
readmeQualityOk: true
url: "https://github.com/kent-tokyo/harumi"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["cjk", "ocr", "pdf", "rust", "tauri", "wasm"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 29
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-05-15T12:29:51Z"
lastCommitAt: "2026-10-25T09:01:42Z"
lastReleaseAt: "2026-10-25T07:43:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 56
maintainers: ["kent-tokyo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ce3621c241d813c635a37084c57c01ec9f019fca17a96382849a193bdc806b8/kent-tokyo/harumi"
---

# harumi

**Position-aware CJK PDF write-back in pure Rust.**

Current release: **1.23.5**. harumi reads existing PDFs, extracts positioned
text, and writes translated or replaced text back into inferred regions. It also
supports page operations, annotations, forms, vector drawing, images, SVG
conversion, and paginated HTML/report output.

[中文](https://github.com/kent-tokyo/harumi/blob/HEAD/README_zh.md) · [日本語](https://github.com/kent-tokyo/harumi/blob/HEAD/README_ja.md) · [한국어](https://github.com/kent-tokyo/harumi/blob/HEAD/README_kr.md)

> harumi is a PDF write-back library, not an OCR engine or PDF viewer.
> Overlay output is best-effort and should be rendered and reviewed for complex,
> rotated, vertical, or image-backed pages.

## Choose the right document

- Start here for installation and the product boundary.
- Use the [API guide](https://github.com/kent-tokyo/harumi/blob/HEAD/docs/API.md) for feature flags and signatures.
- Use the [examples](https://github.com/kent-tokyo/harumi/blob/HEAD/docs/EXAMPLES.md) for copyable code.
- Use the [feature list](https://github.com/kent-tokyo/harumi/blob/HEAD/docs/FEATURES.md) for capability discovery.
- Use the…

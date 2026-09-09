---
repo: "SynthGL/wolfxl-oss"
name: "wolfxl-oss"
description: "Openpyxl-compatible Excel I/O for Python, backed by Rust. Import-swap migration, up to 27x faster on committed benchmarks. MIT."
readmeQualityOk: true
url: "https://github.com/SynthGL/wolfxl-oss"
homepage: "https://wolfxl.com"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [62, 38]
topics: ["excel", "openpyxl", "python", "rust", "spreadsheet", "xlsx", "high-performance", "xlsx-parser", "xlsx-writer", "openxml"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-18T06:07:11Z"
lastCommitAt: "2026-09-09T08:20:58Z"
lastReleaseAt: "2026-08-18T07:16:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 53
maintainers: ["wolfiesch", "blacksmith-sh[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42abc20c8a801352b3f23c4fafcfec0d64a6e3e197e3940ca0bde73d30e41be1/SynthGL/wolfxl-oss"
---

# WolfXL

**High-performance, openpyxl-compatible Excel library for Python, backed by Rust.**

WolfXL is the fastest Python library to edit existing Excel (`.xlsx`, `.xlsm`) workbooks in place without rewriting from scratch. It is a drop-in openpyxl alternative designed to modify workbooks while preserving formatting, formulas, charts, drawing objects, and VBA macros without corrupting the workbook structure.

WolfXL Community is the maintained, MIT-licensed 2.0 release line for workbook creation, reading, writing, streaming exports, and template preservation. Most openpyxl code runs unchanged after a single import swap (`from wolfxl import load_workbook`). Native formula recalculation, headless PDF/image rendering, and format conversion ship separately in [WolfXL Commercial](https://wolfxl.com).

[Quick start](#quick-start) ·
[Migrating from openpyxl](#migrating-from-openpyxl) ·
[Benchmarks](#performance) ·
[Fidelity](#fidelity) ·
[Community vs Commercial](#community-and-commercial) ·
[wolfxl.com](https://wolfxl.com)

Median speedups over openpyxl 3.1.5 range from 2.6x on small in-place edits to
27x on styled row writes, with most reads and writes between 7x and 14x
(wolfxl 2.0.1…

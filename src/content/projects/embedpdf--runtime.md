---
repo: "embedpdf/runtime"
name: "runtime"
description: "The PDF engine behind EmbedPDF. PDFium, extended for editing and built to run anywhere."
readmeQualityOk: true
url: "https://github.com/embedpdf/runtime"
homepage: "https://www.embedpdf.com"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["pdf-viewer", "pdfium"]
stars: 20
forks: 17
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 174
recentReleases: 0
createdAt: "2025-07-08T11:22:51Z"
lastCommitAt: "2026-11-03T19:05:12Z"
lastReleaseAt: "2026-08-04T19:47:07Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 75
maintainers: ["bobsingor", "leizleiz", "tsepez"]
openGraphImageUrl: "https://opengraph.githubassets.com/de38016e63cfb4cdd34cbd727853198ed62d8c58941026353eaec26ee9172595/embedpdf/runtime"
fundingLinks: ["GITHUB:https://github.com/embedpdf"]
---

# PDFium

## Prerequisites

PDFium uses the same build tooling as Chromium. See the platform-specific
Chromium build instructions to get started, but replace Chromium's
"Get the code" instructions with [PDFium's](#get-the-code).

*   [Chromium Linux build instructions](https://chromium.googlesource.com/chromium/src/+/main/docs/linux/build_instructions.md)
*   [Chromium Mac build instructions](https://chromium.googlesource.com/chromium/src/+/main/docs/mac_build_instructions.md)
*   [Chromium Windows build instructions](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md)

### CPU Architectures supported

The default architecture for Windows, Linux, and Mac is "`x64`". On Windows,
"`x86`" is also supported. GN parameter "`target_cpu = "x86"`" can be used to
override the default value. If you specify Android build, the default CPU
architecture will be "`arm`".

It is expected that there are still some places lurking in the code which will
not function properly on big-endian architectures. Bugs and/or patches are
welcome, however providing this support is **not** a priority at this time.

### Compilers supported

PDFium aims to be compliant with…

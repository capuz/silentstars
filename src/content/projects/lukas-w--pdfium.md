---
repo: "lukas-w/pdfium"
name: "pdfium"
description: "PDFium Mirror, updated automatically"
url: "https://github.com/lukas-w/pdfium"
homepage: "https://pdfium.googlesource.com/pdfium/"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 28
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 155
recentReleases: 0
createdAt: "2017-08-10T16:21:10Z"
lastCommitAt: "2026-06-23T23:49:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 60
maintainers: ["tsepez", "hjanuschka", "leizleiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcfdd6b3552b0289290cc0f9536eda0f04666a3d785b40842c671eea0dbd71df/lukas-w/pdfium"
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

---
repo: "pleumann/pasta80"
name: "pasta80"
description: "Turbo Pascal 3.0-compatible compiler that generates machine code for classic and modern Z80 machines (currently CP/M, Sinclair ZX Spectrum 48K/128K/Next, and Agon Light/Console8)."
readmeQualityOk: true
url: "https://github.com/pleumann/pasta80"
language: "Pascal"
languages: ["Pascal", "Assembly"]
languagePcts: [71, 28]
stars: 202
forks: 12
openIssues: 20
closedIssues: 144
watchers: 14
contributors: 6
recentReleases: 0
createdAt: "2020-08-28T14:27:52Z"
lastCommitAt: "2026-10-24T08:20:06Z"
lastReleaseAt: "2026-07-03T16:45:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["pleumann"]
openGraphImageUrl: "https://opengraph.githubassets.com/a97dd2334a784a0461ee97de7f4a7471d673ca3df62500e3f930fc43d1b27148/pleumann/pasta80"
---

# PASTA/80 Compiler Manual

PASTA/80 is a simple [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) cross compiler targeting the [Z80](https://en.wikipedia.org/wiki/Zilog_Z80) microprocessor. It generates code for these classic and modern machines:

* [CP/M](https://en.wikipedia.org/wiki/CP/M)
* [ZX Spectrum 48K](https://en.wikipedia.org/wiki/Sinclair_ZX_Spectrum)
* [ZX Spectrum 128K](https://en.wikipedia.org/wiki/ZX_Spectrum#ZX_Spectrum_128)
* [ZX Spectrum Next](https://www.specnext.com)
* [Agon Light/Console8](https://agonplatform.github.io/agon-docs)

The compiler follows the single-pass recursive-descent approach championed by [Niklaus Wirth](https://de.wikipedia.org/wiki/Niklaus_Wirth), inventor of Pascal, in his books and lectures. It doesn't have an explicit syntax tree, but instead generates code on the fly during parsing. As a result, the compiler might not always generate the most efficient code possible (it definitely cannot compete with LLVM and doesn't try to), but it's very fast.

## Supported language elements

The supported Pascal dialect is an almost exact clone of the original [Turbo Pascal 3.0](https://en.wikipedia.org/wiki/Turbo_Pascal) for…

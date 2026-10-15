---
repo: "gyrovorbis/sh4zam"
name: "sh4zam"
description: "Fast linear algebra and math library for the Hitachi SuperH4 Processor (used by the Sega Dreamcast)."
readmeQualityOk: true
url: "https://github.com/gyrovorbis/sh4zam"
homepage: "http://sh4zam.com"
language: "C"
languages: ["C", "C++"]
languagePcts: [57, 40]
topics: ["assembly", "dreamcast", "hitachi", "matrices", "memcpy", "optimization", "renesas", "sh4", "superh", "vectors"]
stars: 237
forks: 34
openIssues: 1
closedIssues: 12
watchers: 12
contributors: 20
recentReleases: 3
createdAt: "2025-05-10T20:16:21Z"
lastCommitAt: "2026-10-15T08:32:21Z"
lastReleaseAt: "2026-09-25T20:10:43Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 46
maintainers: ["gyrovorbis", "Fancy2209", "aleios"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/981311142/8bc4b654-8849-4177-a6fd-4166137b5572"
---

Fast math library for the Sega Dreamcast's SH4 CPU
    Optimized
    ·
    Ergonomic
    ·
    Multiplatform

# Overview
`SH4ZAM` is a hand-optimized, general-purpose math and linear algebra library for harnessing the floating-point power of the SH4 processor in the Sega Dreamcast. It originally began as a collection of inline assembly routines developed specifically to accelerate the math in the Grand Theft Auto 3 and Vice City DC ports. These routines, along with many others from various contributors, have been separated and combined into a single standalone library, which can be leveraged to bring gainz to the Dreamcast and SuperH communities at large.

# Features
- Dual, modern, interoperable C17 and C++20 APIs
- Extra API features supported for C23 and C++23
- Ergonomic, overhead-free composition from either C or C++
- Clean header files, separating interface from implementation
- Constexpr evaluation handled for both C and C++
- Zero-cost conversion operators for interop with other APIs
- Meticulously optimized for latest SH-GCC version 16.x
- Rigorously unit tested and validated on physical hardware
- Heavily documented header files and external Doxygen site
- Software…

---
repo: "WeAreTommyBruh/Legaia2-Decomp"
name: "Legaia2-Decomp"
description: "A Work-In-Progress reverse engineering and asset viewer/extractor of Legaia 2: Duel Saga for the PlayStation 2 (PAL, SLES-50891)."
readmeQualityOk: true
url: "https://github.com/WeAreTommyBruh/Legaia2-Decomp"
homepage: "https://wearetommybruh.github.io/Legaia2-Decomp/"
language: "C"
languages: ["C"]
languagePcts: [76]
topics: ["decompilation", "legend-of-legaia", "playstation-2", "preservation", "ps2", "reverse-engineering", "matching-decompilation", "asset-extractor", "asset-viewer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-14T13:35:50Z"
lastCommitAt: "2026-11-07T13:57:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["WeAreTommyBruh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2686936aaa1e12943bb996889d0ea39d109a19700ca318c011cc11e56d5945c3/WeAreTommyBruh/Legaia2-Decomp"
discussionCount: 0
---

# Legaia 2: Duel Saga (PAL, SLES-50891) decompilation
This project aims to rebuild Legaia 2 code into readable C source code. The goal of this project is a byte-for-byte decomp that can reproduce the games executable.

Almost everything is C. The exceptions are the libvu0 routines (VU0 coprocessor code), which are written as file-scope assembly in `src/vu0_asm.c` (plus 25 other VU0/COP2 routines in `src/vu0_asm2.c`), and a few single hardware instructions (`syscall`, `sync`, `ei`, `mfc0`, ...) inline in otherwise normal C functions.

# Setup

Required Tools
- Python 3
- Clang
- LLD (ld.lld)
- EE-GCC 2.9-ee-991111-01
- Legaia 2: Duel Saga (PAL) disc image

You can get EE-GCC 2.9-ee-991111-01 through decomp.me

```bash
mkdir -p ~/tools/ee-gcc2.9-991111-01
```
```bash
curl -L https://github.com/decompme/compilers/releases/download/compilers/ee-gcc2.9-991111-01.tar.xz \
  | tar xJ -C ~/tools/ee-gcc2.9-991111-01
```
The compiler is a 32-bit linux executable. On 64-bit systems you need to install the 32-bit runtime libraries.
```bash
sudo dpkg --add-architecture i386
sudo [package manager] update
sudo [package manager] libc6:i386
```

```bash
git clone…

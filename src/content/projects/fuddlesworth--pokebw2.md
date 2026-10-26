---
repo: "fuddlesworth/pokebw2"
name: "pokebw2"
description: "Decompilation of Pokémon Black 2 and White 2"
readmeQualityOk: true
url: "https://github.com/fuddlesworth/pokebw2"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [61, 37]
stars: 57
forks: 19
openIssues: 5
closedIssues: 127
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-10-04T18:50:35Z"
lastCommitAt: "2026-10-26T02:55:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 39
maintainers: ["CallanCampos", "fuddlesworth"]
openGraphImageUrl: "https://opengraph.githubassets.com/8df7cefc1eb954b9be4fdea91721c80a5c4eca7b2f7c8f1de05b6fe36257a1f2/fuddlesworth/pokebw2"
---

# Pokémon Black 2 and White 2

A work-in-progress decompilation of Pokémon Black 2 and White 2, with a long-term goal of a native PC port.
Both USA/Europe ROMs rebuild byte for byte from the same source tree.

## Progress

Progress updates automatically from CI. [ByteMatch](https://bytematch.dev/fuddlesworth/pokebw2) shows it for each
version, for ARM9 main and the overlays, and for the game's code and each library.

## Build

Requires Linux, WSL or macOS, Python 3.11+, ninja, and LLVM (`clang` and `llvm-objcopy` on your `PATH`).

1. Place your own ROM dumps in `orig/`, using the filenames below.
2. Configure and build:

   ```sh
   python3 configure.py
   ninja
   ```

The first run downloads the remaining tools. Every available version is built and checked against its SHA1.
ROMs are not included or provided.

| ROM (USA/Europe, NDSi Enhanced) | Input file | SHA1 |
| --- | --- | --- |
| Black 2 | `orig/baserom_b2_us.nds` | `e51e6dfb8678a3d19dcd2a10691b96a569ca0abb` |
| White 2 | `orig/baserom_w2_us.nds` | `b5d7490be7b415b8f1e672a53e978a9cc667e56a` |

Output: `build/pokeblack2_us.nds` and/or `build/pokewhite2_us.nds`.
See [Build…

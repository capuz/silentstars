---
repo: "erensh27/Ravager"
name: "Ravager"
description: "A strong UCI chess engine written in C"
readmeQualityOk: true
url: "https://github.com/erensh27/Ravager"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 10
forks: 5
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-08-20T12:04:26Z"
lastCommitAt: "2026-11-27T16:29:43Z"
lastReleaseAt: "2026-10-22T15:50:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["erensh27", "shander3377"]
openGraphImageUrl: "https://opengraph.githubassets.com/b41bd909691dfd26587d23d6203999b1e118ddad8c18bb726d9a632675173274/erensh27/Ravager"
---

# Ravager 3

A UCI chess engine written in C11, pairing a modern alpha-beta search with an embedded NNUE and a tuned handcrafted evaluation fallback.

## Installation

Stable builds are published on the [releases page](https://github.com/erensh27/Ravager/releases).
Development builds of the current `main` branch (Linux and Windows, x86-64 with
AVX2, network embedded) are kept in [`dev-builds/`](https://github.com/erensh27/Ravager/blob/HEAD/dev-builds), rebuilt by
GitHub Actions on every change to the engine sources.

To build it yourself:

```bash
git clone https://github.com/erensh27/Ravager.git
cd Ravager
make            # native build for this machine: ./ravager
make release    # portable Linux build (x86-64-v3): ravager-linux-x64-avx2
make windows    # portable Windows build with MinGW-w64
```

The network is embedded into the binary at compile time (`EVALFILE`, default `nets/Ravager_NET.nnue`).

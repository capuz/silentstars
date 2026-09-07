---
repo: "nocturn9x/heimdall"
name: "heimdall"
description: "Github mirror of the Heimdall chess engine"
readmeQualityOk: true
url: "https://github.com/nocturn9x/heimdall"
language: "Nim"
languages: ["Nim"]
languagePcts: [92]
stars: 15
forks: 5
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-06-18T23:38:53Z"
lastCommitAt: "2026-09-07T08:34:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 71
maintainers: ["nocturn9x", "JonathanHallstrom"]
openGraphImageUrl: "https://opengraph.githubassets.com/f00199f43a40850602709f5a6bebe78a214cb021cb73b2d7d2727c852e179340/nocturn9x/heimdall"
---

# heimdall

Heimdall is a strong chess engine written in Nim. As far as I know, this is the strongest Nim engine that has ever been tested (please
let me know should that not be the case), sitting around the top 40 rank globally.

##### Logo by @kan, thank you!

## Building and Installation

**Note**: Do **not** run a bare `make` command! This will not update the neural networks submodule and is meant to be used by [OpenBench](https://gitbub.com/AndyGrant/OpenBench) only.

**Note 2**: To build from source, there's also a useful AI-generated guide you can find [here](https://deepwiki.com/nocturn9x/heimdall/2.1-building-from-source)

### Requirements
- The Nim compiler (2.2.6). See [here](https://codeberg.org/janAkali/grabnim) for more details
- The clang compiler (any reasonably modern version will do)
- The lld linker script (LLVM linker driver). This isn't installed on all systems even when clang is, so make sure it's there!
  Note: on MacOS, ld is used instead (because we need to set the stack size and lld ignores that option on MacOS for some reason??)
- Git LFS (see…

---
repo: "swiftwasm/swiftwasm-build"
name: "swiftwasm-build"
description: "Patches, build scripts, and CI configuration for the SwiftWasm toolchain"
readmeQualityOk: true
url: "https://github.com/swiftwasm/swiftwasm-build"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [61, 31]
stars: 26
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2023-06-20T14:43:55Z"
lastCommitAt: "2026-10-21T17:31:29Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 55
maintainers: ["swiftwasm-bot", "github-actions[bot]", "kateinoigakukun"]
openGraphImageUrl: "https://opengraph.githubassets.com/77624b0a85b091db82cb9f785535803c15f6a2c7461499df8c532dc3cb2a5f7a/swiftwasm/swiftwasm-build"
---

# SwiftWasm toolchain build

This repository contains the patches, build scripts, and CI configuration for the SwiftWasm toolchain.

## Building the toolchain

```
$ mkdir swiftwasm-source
$ cd swiftwasm-source
$ git clone https://github.com/swiftwasm/swiftwasm-build
$ cd swiftwasm-build
# Install WebAssembly specific dependencies into ../build-sdk
$ ./tools/build/install-build-sdk.sh main
# Checkout the Swift repositories in the parent directory (swiftwasm-source) and apply patches
$ ./tools/git-swift-workspace --scheme main
# Build the toolchain (this will take a while)
$ ./tools/build/build-toolchain main
```

See [SwiftWasm book](https://book.swiftwasm.org/contribution-guide/how-to-build-toolchain.html) for more details about dependencies you need to install and how to build on Docker.

## Project structure

- `schemes/<scheme>` - Scheme is the concept used in [Swift's `utils/update-checkout` script](https://github.com/apple/swift/blob/main/utils/update-checkout) to describe a set of build sources.
- `schemes/<scheme>/manifest.json` - The manifest file for the scheme, which describes the base source revisions to check out.
- `schemes/<scheme>/swift` - Patches to be applied on…

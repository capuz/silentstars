---
repo: "filecoin-project/filecoin-ffi"
name: "filecoin-ffi"
description: "C and CGO bindings for Filecoin's Rust libraries"
readmeQualityOk: true
url: "https://github.com/filecoin-project/filecoin-ffi"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [56, 38]
stars: 102
forks: 137
openIssues: 11
closedIssues: 78
watchers: 23
contributors: 41
recentReleases: 0
createdAt: "2019-11-21T16:51:37Z"
lastCommitAt: "2026-11-10T14:49:16Z"
lastReleaseAt: "2019-11-27T12:55:32Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 47
maintainers: ["rvagg", "rjan90", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/236146968fc57909b25f78dc3be4b9843af0c1aaf0f0c8ae57c5f814d6e765a6/filecoin-project/filecoin-ffi"
---

# Filecoin FFI

> C and CGO bindings for Filecoin's Rust libraries, i.e: [proofs](https://github.com/filecoin-project/rust-fil-proofs) and [ref-fvm](https://github.com/filecoin-project/ref-fvm). This repository is built to enable the reference implementation of Filecoin, [Lotus](https://github.com/filecoin-project/lotus), to consume the Rust libraries that are needed.

## Building

To build and install libfilcrypto, its header file and pkg-config manifest, run:

```shell
make
```

To optionally authenticate with GitHub for assets download (to increase API limits) set `GITHUB_TOKEN` to personal access token.

If no precompiled static library is available for your operating system, the build tooling will attempt to compile a static library from local Rust sources.

### Installation notes

By default, building this will download a pre-built binary of the ffi. The advantages for downloading it are faster build times, and not requiring a rust toolchain and build environment.

The disadvantage to downloading the pre-built binary is that it will not be optimized for your specific hardware. This means that if raw performance is of utmost importance to you, it's highly recommended that you…

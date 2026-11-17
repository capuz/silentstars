---
repo: "mrtnetwork/blockchain_utils"
name: "blockchain_utils"
description: "Comprehensive Crypto & Blockchain Toolkit: Pure Dart, Cross-Platform, Encoding, Cryptography, Addresses, Mnemonics, & More"
readmeQualityOk: true
url: "https://github.com/mrtnetwork/blockchain_utils"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["addresses", "bip32", "bip39", "bip49", "bip84", "bip86", "blockchain", "cardano", "cbor", "cryptocurrency"]
stars: 36
forks: 21
openIssues: 5
closedIssues: 9
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-09-27T06:34:37Z"
lastCommitAt: "2026-11-17T14:38:43Z"
lastReleaseAt: "2024-03-16T13:28:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 65
undervaluedScore: 38
maintainers: ["mrtnetwork"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc8dd6a305ad5749832c68fc3e687da5442b9df9c916f0237770f65a472a6b1/mrtnetwork/blockchain_utils"
---

# blockchain_utils

Pure-Dart cryptography + blockchain toolkit with an optional Rust backend behind one typed API.

- **Dual backend, one API:** pure Dart by default, Rust (`FFI` on VM, `WASM` in browser) for speed. Switch at runtime with `blockchainUtils.setRustApi()` / `setDartApi()`. All crypto goes through `blockchainUtils.api.*`.
- **Zero-dependency Rust core:** `no_std`-compatible, constant-time primitives, maintained at [mrtnetwork/blockchain-utils](https://github.com/mrtnetwork/blockchain-utils). Dart FFI and wasm-bindgen glue are generated from `blockchain_utils_connector` (`tool/build_backends.dart`).
- **Cross-platform:** iOS, Android, Web, Linux, Windows, macOS.
- **No external crypto dependencies** in the Dart core.

Inspired in part by [bip_utils](https://github.com/ebellocchia/bip_utils), [python-ecdsa](https://github.com/tlsfuzzer/python-ecdsa), [schnorrkel](https://github.com/w3f/schnorrkel), [stablelib](https://github.com/StableLib/stablelib), [strobe](https://github.com/rozbb/strobe-rs).

> Legacy docs/tests for the old pure-Dart-only releases live in git history and in
> [mrtnetwork/blockchain_utils](https://github.com/mrtnetwork/blockchain_utils) before the…

---
repo: "henrik242/kmp-zip"
name: "kmp-zip"
description: "Kotlin Multiplatform ZIP stream library for JVM, iOS, JS, native and Wasm targets."
readmeQualityOk: true
url: "https://github.com/henrik242/kmp-zip"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
topics: ["android", "ios", "kmp", "kotlin", "multiplatform", "zip"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-17T08:05:05Z"
lastCommitAt: "2026-09-14T09:11:28Z"
lastReleaseAt: "2026-07-24T16:46:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 43
maintainers: ["henrik242", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3856e2b8ecdfd2b210e8bb8d9722a14b0af5dcdafa6f07814ebb08c602b03768/henrik242/kmp-zip"
fundingLinks: ["GITHUB:https://github.com/henrik242"]
---

# kmp-zip

Kotlin Multiplatform ZIP and GZIP library for JVM, iOS, macOS, Linux, Windows, Kotlin/JS, and Kotlin/Wasm (wasmJs) targets, with encryption support.

Provides `ByteArrayInputStream`, `ByteArrayOutputStream`, `ZipInputStream`, `ZipOutputStream`, `GzipInputStream`, and `GzipOutputStream` with a common API across platforms. Supports reading and writing encrypted ZIP archives:
- **WinZip AES** (AES-128/192/256, AE-1 and AE-2 formats) — strong encryption, compatible with 7-Zip, WinRAR, etc.
- **PKWare traditional** (ZipCrypto) — legacy encryption compatible with all ZIP tools including macOS `zip` and Windows Explorer

All ZIP, GZIP, and crypto logic is implemented in common Kotlin. Platform-specific code is limited to thin wrappers around native primitives: `java.util.zip` + `javax.crypto` on JVM, `platform.zlib` + `CommonCrypto` on Apple targets, `platform.zlib` + a pure-Kotlin AES/HMAC/PBKDF2 fallback on Linux and Windows native targets, [pako](https://github.com/nodeca/pako) (MIT) + the same pure-Kotlin crypto on js and wasmJs.

## Modules

| Artifact | Description |
|----------|-------------|
| `no.synth:kmp-zip` | Core I/O, ZIP, and GZIP streams |
|…

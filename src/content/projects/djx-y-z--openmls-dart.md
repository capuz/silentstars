---
repo: "djx-y-z/openmls_dart"
name: "openmls_dart"
description: "Wrapper for OpenMLS, implementing the Messaging Layer Security (MLS) protocol (RFC 9420) for scalable end-to-end encrypted group messaging. Features TreeKEM key agreement, encrypted storage (SQLCipher/IndexedDB), and Web Crypto support. Optimized for Flutter and cross-platform applications (Android, iOS, Linux, macOS, Windows, Web). MIT Licensed."
readmeQualityOk: true
url: "https://github.com/djx-y-z/openmls_dart"
language: "Dart"
languages: ["Dart", "Rust"]
languagePcts: [63, 32]
topics: ["cross-platform", "cryptography", "dart", "encryption", "end-to-end-encryption", "flutter", "flutter-rust-bridge", "frb", "group-messaging", "messaging"]
stars: 9
forks: 7
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T17:27:26Z"
lastCommitAt: "2026-10-25T09:01:25Z"
lastReleaseAt: "2026-06-06T15:47:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 70
maintainers: ["djx-y-z", "openmls-dart-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f44305b4c63d1a1496e4fce554a6a49af43bee06c120e3e718e107e20bd23be/djx-y-z/openmls_dart"
---

# openmls - MLS Protocol for Dart

Dart bindings for [OpenMLS](https://github.com/openmls/openmls), providing a Rust implementation of the Messaging Layer Security (MLS) protocol ([RFC 9420](https://www.rfc-editor.org/rfc/rfc9420.html)) for secure group messaging.

## Platform Support

|             | Android | iOS   | macOS  | Linux      | Windows | Web |
|-------------|---------|-------|--------|------------|---------|-----|
| **Support** | SDK 24+ | 13.0+ | 10.15+ | arm64, x64 | x64     | WASM |
| **Arch**    | arm64, armv7, x64 | arm64, x64 (sim) | arm64, x64 | arm64, x64 | x64 | wasm32 |

## Features

- **MLS Protocol (RFC 9420)**: Secure group messaging with forward secrecy and post-compromise security
- **Group Key Agreement**: Efficient tree-based group key agreement (TreeKEM)
- **Post-Quantum (Experimental)**: Ten hybrid and pure post-quantum ciphersuites (X-Wing, ML-KEM-768/1024, ML-DSA-44/65/87) — see [Post-Quantum Support](#post-quantum-support-experimental)
- **Encrypted Storage**: All MLS state encrypted at rest — SQLCipher on native, Web Crypto AES-256-GCM on WASM
- **Basic & X.509 Credentials**: Support for both credential types
- **Flutter & CLI Support**: Works…

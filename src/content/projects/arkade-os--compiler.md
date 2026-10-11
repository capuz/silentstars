---
repo: "arkade-os/compiler"
name: "compiler"
description: "EXPERIMENTAL A high-level language that compiles to Arkade Script for building Bitcoin-native smart contracts on Arkade OS"
readmeQualityOk: true
url: "https://github.com/arkade-os/compiler"
homepage: "https://arkade-os.github.io/compiler"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 17
forks: 5
openIssues: 8
closedIssues: 5
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2025-02-25T00:26:33Z"
lastCommitAt: "2026-10-11T10:15:35Z"
lastReleaseAt: "2026-10-05T10:23:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 67
maintainers: ["msinkec", "d4rp4t", "tiero"]
openGraphImageUrl: "https://opengraph.githubassets.com/de041f60b8b7d93ca4bbaaf4e09147969eb5cfbdb1c8944d6817cf000b9b24ea/arkade-os/compiler"
---

# Arkade Compiler

Arkade Language is a contract language for Bitcoin. You write a contract as a set of spend functions over constructor state. The compiler, `arkadec`, turns it into a JSON artifact with two kinds of script: Arkade covenants, which the Arkade VM executes offchain, and L1 tapscript leaves, which give every party a unilateral exit on Bitcoin. Arkade libraries consume the artifact directly, and `arkade-bindgen` turns it into typed TypeScript or Go stubs.

The language covers signature and multisig checks, absolute and relative timelocks, transaction introspection, Arkade Assets and asset groups, byte-string parsing, fixed-size arrays, structs, and recursive contract instantiation with `new`.

## Try it in the browser

**[arkade-os.github.io/compiler](https://arkade-os.github.io/compiler)**

The playground runs the real compiler as WebAssembly. Nothing is installed and nothing leaves your browser. Pick a contract from the Explorer, edit it, and press **Ctrl+Enter** (or **Ctrl+S**). The right panel shows four tabs:

| Tab | What you get |
|---|---|
| JSON Output | The full artifact, the same bytes `arkadec` writes to disk |
| Assembly | Every spend group: the Arkade…

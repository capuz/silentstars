---
repo: "1-3-7/disrobe"
name: "disrobe"
description: "Decompile, deobfuscate, and unpack almost anything: a universal, deterministic, single-binary reverse-engineering toolkit in Rust for Python, JVM/Android, .NET, WebAssembly, JS, Go, and native packers (UPX/PyArmor/PyInstaller/Nuitka) and 20+ more. Built for malware analysis, CTFs, and security research."
url: "https://github.com/1-3-7/disrobe"
homepage: "https://1-3-7.github.io/disrobe/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["binary-analysis", "decompiler", "malware-analysis", "pyarmor", "pyinstaller", "reverse-engineering", "android", "nuitka", "static-analysis", "wasm"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-05-27T12:04:13Z"
lastCommitAt: "2026-06-27T06:21:09Z"
lastReleaseAt: "2026-06-19T15:26:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["1-3-7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1251262935/b39d7970-18a9-4a77-9554-5835d9df606f"
---

# disrobe

One static Rust binary that decompiles, deobfuscates, and unpacks compiled, frozen, packed, and obfuscated software across 20+ ecosystems, deterministically, and proves what it recovered against an independent oracle. Built for malware analysis, CTFs, IP recovery, and security research.

`disrobe` never executes the sample on its default path, runs no model, and installs no JVM, Python, or Docker runtime. Recovered Python is recompiled and diffed opcode-for-opcode in CI; unpacked bytes are byte-compared to the original; recovered Android, WebAssembly, and Lua are re-run through the real JVM verifier, wasmtime, and `lua`. Identical input yields identical output on every machine, and any lossy result carries a measured score that is never rounded in the tool's favor.

Try it in your browser: [1-3-7.github.io/disrobe/playground](https://1-3-7.github.io/disrobe/playground/). The analysis passes are compiled to WebAssembly and run client-side; nothing is uploaded.

## Table of contents

- [Install](#install)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Anti-analysis defeat](#anti-analysis-defeat)
- [Benchmarks](#benchmarks)
- [Capabilities by…

---
repo: "1-3-7/disrobe"
name: "disrobe"
description: "Decompile, deobfuscate, and unpack almost anything: a universal, deterministic, single-binary reverse-engineering toolkit in Rust for Python, JVM/Android, .NET, WebAssembly, JS, Go, and native packers (UPX/PyArmor/PyInstaller/Nuitka) and 20+ more. Built for malware analysis, CTFs, and security research."
readmeQualityOk: true
url: "https://github.com/1-3-7/disrobe"
homepage: "https://1-3-7.github.io/disrobe/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["binary-analysis", "decompiler", "malware-analysis", "pyarmor", "pyinstaller", "reverse-engineering", "android", "nuitka", "static-analysis", "wasm"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2026-05-27T12:04:13Z"
lastCommitAt: "2026-07-13T05:38:49Z"
lastReleaseAt: "2026-07-04T05:26:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["1-3-7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1251262935/39505637-8abc-4867-a78e-49fcd6c3a7ad"
---

# `disrobe`

One static Rust binary that decompiles, deobfuscates, and unpacks software across 20+ ecosystems and proves what it recovered against an independent oracle. Deterministic, no execution of the sample, no model. Built for malware analysis, CTFs, IP recovery, and security research.

The differentiator is the pipeline, not any single pass: one deterministic chain runner carries every input end to end, and every recovered output is persisted as a content-addressed `.dr` envelope with its own provenance and oracle grade, so a result is never a bare score with no trail back to how it was produced.

`disrobe` never executes the sample on its default path, runs no model, and installs no JVM, Python, or Docker runtime. Recovered Python is recompiled and diffed opcode-for-opcode in CI; unpacked bytes are byte-compared to the original; recovered Android, WebAssembly, and Lua are re-run through the real JVM verifier, wasmtime, and `lua`. Identical input yields identical output on every machine.

Try it in your browser: [`1-3-7.github.io/disrobe/playground`](https://1-3-7.github.io/disrobe/playground/). The analysis passes are compiled to WebAssembly and run client-side; nothing is…

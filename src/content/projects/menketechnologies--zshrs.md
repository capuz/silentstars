---
repo: "MenkeTechnologies/zshrs"
name: "zshrs"
description: "zshrs => zsh Superset"
readmeQualityOk: true
url: "https://github.com/MenkeTechnologies/zshrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 15
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-25T00:57:41Z"
lastCommitAt: "2026-09-13T08:29:34Z"
lastReleaseAt: "2026-06-10T05:17:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["MenkeTechnologies"]
openGraphImageUrl: "https://opengraph.githubassets.com/4949a8b3bceef0e5f76fda3f623d430025276a73a23f8215e5af63b05f0bbdae/MenkeTechnologies/zshrs"
---

```
 ███████╗███████╗██╗  ██╗██████╗ ███████╗
 ╚══███╔╝██╔════╝██║  ██║██╔══██╗██╔════╝
   ███╔╝ ███████╗███████║██████╔╝███████╗
  ███╔╝  ╚════██║██╔══██║██╔══██╗╚════██║
 ███████╗███████║██║  ██║██║  ██║███████║
 ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
```

### `[THE FIRST JIT-COMPILED UNIX SHELL]`

> *"No fork, no problems."*

The first Unix shell to JIT-compile to native machine code. Bytecode alone is no longer a first: Nushell's IR compiler and evaluator landed in 0.96.0 and became its default evaluator in 0.98.0 — but that IR is interpreted, compiled per parse, and discarded at process exit. zshrs compiles every command (interactive, script, function, sourced file) to fusevm bytecode with fused superinstructions, hands hot blocks to a tiered Cranelift JIT that emits x86-64/aarch64 machine code, and persists the bytecode across processes in rkyv images. No shell before it ran shell source as native code. A drop-in zsh replacement written in Rust — **915k lines, 861 source files** across a 4-crate workspace (`zshrs` runtime + `zshrs-daemon` + `znative`, the published plugin-ABI SDK, + `zshrs-runtime`, a 16-line crate whose only job is to emit `libzsh.a` for AOT linking…

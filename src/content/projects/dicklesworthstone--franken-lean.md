---
repo: "Dicklesworthstone/franken_lean"
name: "franken_lean"
description: "A ground-up, native-Rust reimplementation of the entire Lean 4 toolchain — drop-in at the binary surfaces (.olean, C ABI, LSP, CLI), deterministic under parallelism, declaration-granular incremental, with a ≤12 KLOC dual-engine kernel that ships receipts."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_lean"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 17
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-07-21T15:21:17Z"
lastCommitAt: "2026-09-18T14:03:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Dicklesworthstone", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/430a30c378b74c48d936687ccfb799876bd25b0dcc7326c955e79c4778400d05/Dicklesworthstone/franken_lean"
---

# franken_lean

**A ground-up, native-Rust reimplementation of the entire Lean 4 toolchain — parser, macro engine, elaborator, trusted kernel, metaprogram compiler and VM, runtime/ABI twin, build system, and language server — that is a drop-in replacement at the binary surfaces (`.olean`, the `lean_object` C ABI, the LSP wire dialect, the `lean`/`leanc`/`lake` CLIs) and deliberately better underneath: deterministic under parallelism, declaration-granular incremental, memory-shared, provenance-transparent, with a ≤ 12 KLOC dual-engine kernel that ships receipts.**

</div>

> **A note on tense (read this first).** This README is written in the **present tense, as if the entire design in [`COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKEN_LEAN.md`](https://github.com/Dicklesworthstone/franken_lean/blob/HEAD/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKEN_LEAN.md) is fully realized**: the 1.0 target state where every performance gate is green and every subsystem is live. This is a deliberate choice. It lets the document describe the *finished* system so it gets **trued-up in place as milestones land** (§22's gates G0→G6) rather than rewritten from scratch later. Where the plan itself stages…

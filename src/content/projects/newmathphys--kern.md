---
repo: "newmathphys/kern"
name: "kern"
description: "Zero-trust L0–L5 verification gateway in Zig 0.17: native Z3 proof-DAG checker (trusted: 0), Belnap B4 & UNSAT-core CLI, 147 Lean 4 theorems (0 sorry), 8-lane SIMD BLAKE3 (.kimg) & AI MCP server (9 tools)."
readmeQualityOk: true
url: "https://github.com/newmathphys/kern"
homepage: "https://newmathphys.github.io/kern/"
language: "Python"
languages: ["Python", "Zig"]
languagePcts: [63, 26]
topics: ["formal-verification", "lean4", "proof-carrying-code", "smt", "static-analysis", "zig", "belnap-logic", "ai-safety", "blake3", "mcp-server"]
stars: 13
forks: 3
openIssues: 3
closedIssues: 21
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-10T23:42:35Z"
lastCommitAt: "2026-11-24T14:09:11Z"
lastReleaseAt: "2026-10-23T15:09:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 59
maintainers: ["newmathphys"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e8dc370ebe756027b8acdadbb22f965044e293f6756f82bcbaf939aa4bcdbe6/newmathphys/kern"
discussionCount: 1
---

# KERN — a zero-trust verification gateway for AI-generated code

> **Try it in your browser, offline, right now:** [`docs/playground/`](https://github.com/newmathphys/kern/blob/HEAD/docs/playground/) —
> the real `kernc.wasm` (wasm32-freestanding, no syscalls) executing JOIN_K, the
> Fourier–Motzkin solver, the Hamming code and `verifyProof` on a genuine Z3
> certificate — then **sabotage one byte of the proof** and watch it get rejected.
> Live: <https://newmathphys.github.io/kern/playground/>

**Three ways in:** an MCP guardrail while the agent writes code · zero-annotation
`--xray` / `--xray-none` / `--heal` before the commit · `kernc prove` with a proof DAG
re-checked by the Zig kernel (`trusted: 0 | holes: 0`) in production.

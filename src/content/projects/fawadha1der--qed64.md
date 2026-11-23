---
repo: "FawadHa1der/QED64"
name: "QED64"
description: "complete client side lean4 proof editing/generation and verification with mathlib in wasm64/memory64"
readmeQualityOk: true
url: "https://github.com/FawadHa1der/QED64"
homepage: "https://qed64.fawadworkaddress.workers.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 39]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-24T15:24:31Z"
lastCommitAt: "2026-11-21T16:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 54
maintainers: ["FawadHa1der"]
openGraphImageUrl: "https://opengraph.githubassets.com/805cb662ef5a07505ab30f625ab850ac70bb5abda90a6750b7d51c06eaa0fb51/FawadHa1der/QED64"
---

# QED64: Lean 4 in your browser, 64-bit

QED64 is a Lean 4 editor in the spirit of
[live.lean-lang.org](https://live.lean-lang.org), with one difference: **no
server checks your proofs**. The real Lean 4 compiler and language server run
in a Web Worker as **WebAssembly Memory64** (64-bit pointers, shared memory,
pthreads). Lean's core library and a 4,526-module **Mathlib** environment are
loaded from verified, content-addressed environment snapshots. The page is lean4monaco
(Monaco plus the vscode-lean4 InfoView) over that in-browser LSP. It serves
Lean 4.36.0 and Mathlib v4.36.0 ([docs/PROVENANCE.md](https://github.com/FawadHa1der/QED64/blob/HEAD/docs/PROVENANCE.md)).

Live: **https://qed64.fawadworkaddress.workers.dev/**

---
repo: "maci0/rebrew"
name: "rebrew"
description: "Compiler-in-the-loop decompilation workbench for binary-matching game reversing."
readmeQualityOk: true
url: "https://github.com/maci0/rebrew"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["decompilation", "ghidra", "reverse-engineering", "binary-matching"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2026-02-23T05:08:01Z"
lastCommitAt: "2026-11-09T00:55:20Z"
lastReleaseAt: "2026-09-26T01:55:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["maci0"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeef61ea82041d91a973c4e21df46cad72d8f7dc2fdcd548330f3301c763f1c1/maci0/rebrew"
---

# Rebrew

**Compiler-in-the-loop decompilation workbench for binary-matching game reversing.**

Rebrew recompiles your C with the compiler that built the target and compares the bytes against the target, function by function; a function is done when they are identical (EXACT, or RELOC after masking relocations). One Python CLI carries the compile-compare loop, a genetic-algorithm matcher, the function metadata store, and the verifier.

## What it covers

- Function authoring, byte diffs, compiler flag search, GA matching, and bounded symbolic proofs.
- Library identification, globals/types, data layout, and whole-binary verification.
- Prioritized work and separate file, executable-byte, and stored data-verdict accounting.
- BinSync field reconciliation and provenance, plus live Ghidra structural operations.
- Symbol exports: splat `symbol_addrs`, and a synthetic PDB stamped with the target's own debug-record GUID/age (`rebrew export pdb`, needs `llvm-pdbutil`).
- Config-driven toolchains, compile caching, and six packaged agent workflows.

See the [documentation index](https://github.com/maci0/rebrew/blob/main/docs/README.md)
for guides, reference contracts, and integrations. The…

---
repo: "oasys-works/oecs"
name: "oecs"
description: "A Full Feature ECS for Typescript"
readmeQualityOk: true
url: "https://github.com/oasys-works/oecs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ecs", "javascript", "typescript"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-02-16T02:13:42Z"
lastCommitAt: "2026-07-08T05:31:09Z"
lastReleaseAt: "2026-07-08T05:45:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 46
maintainers: ["2khan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b02f7b75ba477c641b2d8999432df15c57455c3b087bf5a92906b83ee8f5b393/oasys-works/oecs"
---

# oecs

**A full-featured, archetype-based Entity Component System for TypeScript.**

`@oasys/oecs` is a complete ECS — not just storage-and-queries, but the whole toolkit you expect from a
mature engine: observers, relations with wildcards, sparse storage, system sets and run conditions,
entity enable/disable, templates, deterministic hashing with snapshot/restore, a typed host→ECS write
seam, and an optional reactive UI bridge. It is **pure TypeScript and zero-dependency by default** — it
runs over a plain resizable `ArrayBuffer`, so it needs no `SharedArrayBuffer` and no cross-origin
isolation (COOP/COEP). An opt-in shared-memory profile swaps in a `SharedArrayBuffer` for worker offload
or a WASM compute backend; both profiles share one core and agree, byte-for-byte, on `stateHash`.

- **Fast** — struct-of-arrays column storage grouped by archetype; iteration is a tight loop over typed
  arrays with no per-entity object allocation.
- **Type-safe** — component handles are callable defs with stable numeric ids at runtime and fully-typed schemas at compile time;
  misspelled fields are compile errors.
- **Deterministic** — an opt-in mode gives a backing-agnostic `stateHash` plus…

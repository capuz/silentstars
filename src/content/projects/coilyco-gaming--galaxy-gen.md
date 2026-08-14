---
repo: "coilyco-gaming/galaxy-gen"
name: "galaxy-gen"
description: "Procedural galaxy simulation - Rust compiled to WASM, rendered in the browser. Live at https://galaxy-gen.coilysiren.me"
readmeQualityOk: true
url: "https://github.com/coilyco-gaming/galaxy-gen"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 36]
topics: ["rust-wasm", "procedural-galaxy-simulation", "rust", "webassembly"]
stars: 33
forks: 2
openIssues: 0
closedIssues: 48
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-04-23T04:45:56Z"
lastCommitAt: "2026-08-14T05:07:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 59
maintainers: ["coilyco-ops[bot]", "coilysiren"]
openGraphImageUrl: "https://opengraph.githubassets.com/265440bf18149526d570e58052319d16646a5a65a291580c506c3ec8d4f5814f/coilyco-gaming/galaxy-gen"
---

# galaxy-gen

`{ rust → wasm → js }` living-galaxy simulation. Gravitational physics,
star birth and death, planetary nebulae, Type Ia and core-collapse supernovae,
neutron-star mergers, stellar-halo phase mixing,
black-hole evolution, conserved chemical enrichment, and a cycling cold/hot gas reservoir are computed in
Rust, compiled to WebAssembly via
[wasm-pack](https://github.com/rustwasm/wasm-pack), and rendered on a browser
canvas with React.

Heavy elements move with gas and stars through the full lifecycle. Supernovae
enrich later generations, while local composition controls the rendered dust
lanes and shock-swept [OIII] glow.

## Quick start

```bash
ward exec install
ward exec dev
ward exec test
```

See [.ward/ward.yaml](https://github.com/coilyco-gaming/galaxy-gen/blob/HEAD/.ward/ward.yaml) for the full command catalog and
[AGENTS.md](https://github.com/coilyco-gaming/galaxy-gen/blob/HEAD/AGENTS.md) for the conventions.

## Architecture

- `src/rust/galaxy.rs` - core gas, stellar, black-hole, event, seeding, and
  tick simulation. Unit tests live in `mod tests_*` blocks at the bottom.
- `src/rust/lib.rs` - crate root that re-exports `galaxy`.
- `pkg/` - `wasm-pack`…

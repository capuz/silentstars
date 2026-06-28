---
repo: "spglib/moyo"
name: "moyo"
description: "Library for Crystal Symmetry in Rust"
url: "https://github.com/spglib/moyo"
homepage: "https://spglib.github.io/moyo/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["crystallography", "python", "rust", "materials-science", "symmetry", "clanguage", "fortran", "wasm"]
stars: 75
forks: 3
openIssues: 9
closedIssues: 37
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-10-29T01:07:47Z"
lastCommitAt: "2026-06-28T01:33:23Z"
lastReleaseAt: "2025-05-05T00:15:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 50
maintainers: ["lan496", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/897bdf03de1c59c6de8d319d9890858992bd641a4eba2fa88aadde89ee042565/spglib/moyo"
discussionCount: 0
---

# <img src="./logo.svg" alt="moyo" width=450>

</div>

A fast and robust crystal symmetry finder, written in Rust.

<figure>
    <figcaption><a href="bench/mp/analysis.ipynb">Several times faster symmetry detection than Spglib for Materials Project dataset</a></figcaption>
</figure>

## Interfaces

Each interface has its own README with installation, usage, and development
instructions:

- [Rust (`moyo`)](moyo/README.md): core implementation
  ([crates.io](https://crates.io/crates/moyo),
  [docs](https://docs.rs/moyo/latest/moyo/))
- [Python (`moyopy`)](moyopy/README.md): Python binding
  ([PyPI](https://pypi.org/project/moyopy/),
  [docs](https://spglib.github.io/moyo/python/))
- [C (`moyoc`)](moyoc/README.md): C binding, built and consumed with CMake
  ([docs](https://spglib.github.io/moyo/c/))
- [Fortran](moyoc/README.md#fortran-interface): Fortran interface on top of
  the C binding (optional `moyo::moyof` CMake target)
- [JavaScript (`moyo-wasm`)](moyo-wasm/README.md): JavaScript and WebAssembly
  binding ([npm](https://www.npmjs.com/package/@spglib/moyo-wasm))
- [Web viewer](apps/web/README.md): browse the 230 space groups, 80 layer
  groups, and 1651 magnetic space groups…

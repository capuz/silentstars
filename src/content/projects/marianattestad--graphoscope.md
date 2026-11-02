---
repo: "MariaNattestad/graphoscope"
name: "graphoscope"
description: "Interactive, browser-based viewer for HPRC pangenome graphs at the locus level"
readmeQualityOk: true
url: "https://github.com/MariaNattestad/graphoscope"
homepage: "https://marianattestad.github.io/graphoscope/"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [50, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-12T19:30:17Z"
lastCommitAt: "2026-11-02T15:17:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 32
maintainers: ["MariaNattestad"]
openGraphImageUrl: "https://opengraph.githubassets.com/805796439a2e4fd45a03ec3b84cedda4894dc6d5c1e8157fbb1fada934aec58f/MariaNattestad/graphoscope"
---

# Graphoscope

Explore an HPRC human pangenome graph at any locus, straight from the browser. Pick a region to see the subgraph for that locus, visualized with a few early prototypes designed to highlight major graph patterns relative to the reference.

Two HPRC **Release 2 (v2.1)** Minigraph-Cactus graphs are built in, switchable in
the UI:

- **GRCh38-based** (`hprc-v2.1-mc-grch38.gbz.db`, reference `GRCh38`)
- **CHM13-based / T2T** (`hprc-v2.1-mc-chm13.gbz.db`, reference `CHM13`)

Both are read directly from the public `human-pangenomics` S3 bucket (see
[Data hosting](#data-hosting)); nothing is downloaded up front.

## How it works

- **`.gbz.db`** files are [GBZ-base](https://github.com/jltsiren/gbz-base)'s
  random-access SQLite form of a `.gbz` graph (its `gbz2db` tool). The HPRC
  publishes them alongside the v2.1 graphs (~10 GB for GRCh38-based, ~11.6 GB
  for CHM13-based, roughly 1.8× the `.gbz`, with topology + sequences re-stored
  so they're seekable).
- **`query.wasm`** is this repo's own Rust program (`crates/reduce`, see
  [The locus query](#the-locus-query-cratesreduce)) compiled to `wasm32-wasip1`.
  It uses the GBZ-base library, unmodified, for the…

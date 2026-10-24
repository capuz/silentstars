---
repo: "COMBINE-lab/spearfish"
name: "spearfish"
description: "Fast long-read RNA-seq mapping to a transcriptome with locally consistent parsing"
readmeQualityOk: true
url: "https://github.com/COMBINE-lab/spearfish"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-13T13:33:47Z"
lastCommitAt: "2026-10-24T00:15:10Z"
lastReleaseAt: "2026-10-23T22:34:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["rob-p"]
openGraphImageUrl: "https://opengraph.githubassets.com/480cf2366d5ac43b1c9be49800b15324e02fe0770b2d90ef6e3d3d2d368348f6/COMBINE-lab/spearfish"
---

# spearfish

Fast long-read RNA-seq mapping to a transcriptome with locally consistent parsing (LCP).

For each read (ONT cDNA, ONT direct RNA, PacBio Kinnex/Iso-Seq), spearfish performs *delta
mapping*: it reports every compatible transcript, the read's position on it, and its score
difference from the best candidate, for downstream EM quantification. LCP cores are collapsed
into a transcriptome *core graph* that factors out splicing and paralog redundancy, chaining
computes exact per-transcript chain scores while sharing work across isoforms, and base-level
alignment is restricted to the read segments where tied isoforms differ.

Documentation: https://combine-lab.github.io/spearfish/ (source in `website/`; preview locally
with `cd website && npm install && npm run dev`).

**Status:** 0.1.0, the first release. Interfaces may change before 1.0; see
[CHANGELOG.md](https://github.com/COMBINE-lab/spearfish/blob/HEAD/CHANGELOG.md).

## Install

With Rust 1.89 or newer ([rustup](https://rustup.rs)), from crates.io or from a checkout:

```sh
cargo install --locked spearfish-cli              # or: cargo install --locked --path crates/spearfish-cli
spearfish doctor          # build, CPU,…

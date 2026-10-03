---
repo: "HPCBio/dada2-rs"
name: "dada2-rs"
description: "DADA2, reimplemented in Rust"
readmeQualityOk: true
url: "https://github.com/HPCBio/dada2-rs"
homepage: "https://dada2-rs.readthedocs.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["16s-rrna", "amplicon-sequencing", "microbiome", "microbiome-workflow"]
stars: 7
forks: 2
openIssues: 36
closedIssues: 79
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-09T00:29:22Z"
lastCommitAt: "2026-10-03T22:04:20Z"
lastReleaseAt: "2026-07-07T03:24:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 58
maintainers: ["cjfields"]
openGraphImageUrl: "https://opengraph.githubassets.com/c20b7168aed0289a1094f8e24d22edaf66b2edafac9a7bd3af601aabfec43de8/HPCBio/dada2-rs"
---

# dada2-rs

📖 **Documentation:** [dada2-rs.readthedocs.io](https://dada2-rs.readthedocs.io) — installation, Illumina/PacBio walkthroughs, and the performance/benchmarking reference.

An experimental implementation of DADA2 in Rust, using Claude Code (specically Sonnet 4.6 and Opus 4.6/4.7/4.8) for the bulk of the work. 

## Implementations

Rust ports of:

  | Step | DADA2 (R) | dada2-rs |
  |---|---|---|
  | Filter/trimming FASTQ | `filterAndTrim` | `filter-and-trim` |
  | Filter/trimming FASTQ (PacBio) | `removePrimers`,`filterAndTrim` | `remove-primers` (one step) |
  | Dereplication | `derepFastq` | `derep` |
  | Error models | `learnErrors` | `learn-errors` |
  | Denoising | `dada` | `dada` |
  | Merging | `mergePairs` | `merge-pairs` |
  | Chimera removal | `removeBimeraDenovo` | `remove-bimera-denovo` |
  | RDP taxonomic classifier | `assignTaxonomy` + `assignSpecies` | `assign-taxonomy` + `assign-species` |
  | Merging sequence tables | `mergeSequenceTables` | `make-sequence-table` (accepts multiple inputs) |
  | Making sequence tables from multiple inputs | `makeSequenceTable` | `make-sequence-table` |

- Current error models:
  - `loessErrfun`
  - `PacBioErrfun`
  -…

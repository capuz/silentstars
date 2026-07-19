---
repo: "d-laub/genoray"
name: "genoray"
description: "Sparse variant file format for training biological sequence models"
readmeQualityOk: true
url: "https://github.com/d-laub/genoray"
homepage: "https://genoray.readthedocs.io/en/latest/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 46]
topics: ["bioinformatics", "genomics", "numpy"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-03T20:41:54Z"
lastCommitAt: "2026-07-19T06:11:08Z"
lastReleaseAt: "2026-02-06T06:32:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 86
maintainers: ["d-laub", "github-actions[bot]", "bschilder"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b45ebf0f4d97023abbcffa9417d52fe7ef4dda8e3819e1f18fb52c521db54d0/d-laub/genoray"
discussionCount: 1
---

# `genoray`

If you want to use NumPy with genetic variant data, `genoray` is for you! `genoray` enables ergonomic and efficient range queries of genotypes and dosages from VCF and PGEN (PLINK 2.0) files. `genoray` is also fully type-safe and has minimal dependencies.

# Summary

The `genoray` API more-or-less boils down to just two classes and up to five methods:

- `VCF` and `PGEN` classes for reading VCF and PGEN files, respectively.
- `read` read variants for a single range.
- `chunk` read variants for a single range in chunks.
- `read_ranges` read multiple ranges of variants at once.
- `chunk_ranges` read multiple ranges of variants in chunks.
- `set_samples` subset and/or re-order the samples.

The other important arguments to know are `mode` (and `phasing` for VCF) to set the return type and `max_mem` for chunking. The modes that are available for each file format are always accessible from the class itself, e.g. `VCF.Genos16`, `PGEN.GenosDosages`, etc. You can also filter variants on the fly using the `filter` argument to class constructors.

Also included:

- `SparseVar` and `SparseVar2` sparse variant stores for compact, range-queryable on-disk representations of…

---
repo: "d-laub/genoray"
name: "genoray"
description: "Fast, type-safe I/O of genotypes as NumPy arrays"
url: "https://github.com/d-laub/genoray"
homepage: "https://genoray.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bioinformatics", "genomics", "numpy"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-04-03T20:41:54Z"
lastCommitAt: "2026-06-25T01:39:37Z"
lastReleaseAt: "2026-02-06T06:32:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 85
maintainers: ["d-laub", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/576467710f0a4cac28c516819ea544fd9b57e29f7ebe9e439b52679057936c22/d-laub/genoray"
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

# Examples

## VCF

We work with VCFs using the (you guessed it) VCF class:

```python
from genoray import VCF

vcf =…

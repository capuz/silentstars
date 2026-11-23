---
repo: "dnncha/turbo-picard"
name: "turbo-picard"
description: "Picard-compatible Rust tools for faster SAM/BAM/CRAM, VCF, duplicate-marking and sequencing-QC workflows."
readmeQualityOk: true
url: "https://github.com/dnncha/turbo-picard"
homepage: "https://turbo-picard.readthedocs.io/en/latest/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [49, 39]
topics: ["bam", "bioinformatics", "cram", "genomics", "nextflow", "picard", "rust", "sam", "duplicate-marking", "sequencing-qc"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T17:50:54Z"
lastCommitAt: "2026-11-23T12:25:20Z"
lastReleaseAt: "2026-07-17T12:07:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["dnncha"]
openGraphImageUrl: "https://opengraph.githubassets.com/48ff5fc8add2dd9bf4ee023d0ee5783de8e5261bf6b7672fae83bc3ce7df7793/dnncha/turbo-picard"
---

# Turbo Picard

**Native Rust implementations of 35 Picard commands, plus 6 Turbo Picard utilities, with Picard-checked outputs, `KEY=VALUE` flags, and transparent fallback to upstream Picard for the remaining 86 commands.**

[Documentation](https://turbo-picard.readthedocs.io/en/latest/) · [Command coverage](https://github.com/dnncha/turbo-picard/blob/HEAD/docs/commands.rst) · [Compare alternatives](https://turbo-picard.readthedocs.io/en/latest/compare/) · [Evaluate on your data](https://github.com/dnncha/turbo-picard/blob/HEAD/docs/real-data-evaluation.rst) · [Bunsen](https://bunsen.science)

---

## How fast is Turbo Picard?

Most bioinformatics pipelines pay a heavy tax in **JVM startup**, **Java heap bloat**, and **repeated BAM/CRAM decompression passes**. Turbo Picard removes the JVM on native paths, streams directly through HTSlib/libdeflate, uses bounded external sorting, and validates outputs against Picard 3.4.0 and 3.5.0 in CI.

**Bold** marks the #1 result in each benchmark group below.

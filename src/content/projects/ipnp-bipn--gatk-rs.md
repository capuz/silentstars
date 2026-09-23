---
repo: "IPNP-BIPN/gatk-rs"
name: "gatk-rs"
description: "Native Rust reimplementation of GATK 4.6.2.0, byte-identical target. Work in progress. Not the official GATK."
readmeQualityOk: true
url: "https://github.com/IPNP-BIPN/gatk-rs"
language: "Rust"
languages: ["Rust", "Java"]
languagePcts: [79, 20]
stars: 12
forks: 1
openIssues: 84
closedIssues: 381
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-21T10:20:09Z"
lastCommitAt: "2026-09-23T08:47:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 47
maintainers: ["BenjaminDEMAILLE"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec9175159a5975596b107cc606bea9f9cd88a1a0c69d11a207b97f310dfbd02d/IPNP-BIPN/gatk-rs"
---

# gatk-rs

Native Rust reimplementation of the Broad Institute's
[GATK](https://github.com/broadinstitute/gatk), targeting **byte-identical** output against a
pinned reference build. Work in progress.

> **This is not the official GATK.** It is an independent reimplementation, not affiliated
> with or endorsed by the Broad Institute.

## Reference version

Ported from GATK `4.6.2.0`, commit `76edc75c26504da94bbaee66584e107e76ee15de`, which pins:

| Dependency | Version |
|---|---|
| Picard | 3.4.0 |
| htsjdk | 4.2.0 |
| Barclay | 5.0.0 |
| Intel GKL | 0.8.11 |

All three ports in this program use those exact pins, so they are mutually coherent by
construction.

GATK 4.7.0.0 (htsjdk 5.0.0, Picard 3.5.0) was released on 2026-08-18, and the target deliberately
stays at 4.6.2.0: 414 conformance suites are oracle-backed against it across the three
repositories (278 here, 66 in picard-rs, 70 in htsjdk-rs), and the three ports move together or
not at all. The delta, and the order the move has to happen in, are recorded in ROADMAP.md.

## Origin

This grows out of [broadinstitute/gatk#9384](https://github.com/broadinstitute/gatk/pull/9384)
("Native Apple Silicon (arm64) support for…

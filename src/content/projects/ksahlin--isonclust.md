---
repo: "ksahlin/isONclust"
name: "isONclust"
description: "De novo clustering of long transcript reads into genes"
readmeQualityOk: true
url: "https://github.com/ksahlin/isONclust"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["clustering", "transcriptome", "oxford-nanopore", "pacbio-iso-seq", "bioinformatics"]
stars: 80
forks: 9
openIssues: 7
closedIssues: 18
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2018-10-26T00:56:33Z"
lastCommitAt: "2026-09-06T08:03:28Z"
lastReleaseAt: "2019-02-28T14:56:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 40
maintainers: ["ksahlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a620f0ad31487307902956e85433f8cbe58d7159cdb412bcaf1d7e9bbcfa1967/ksahlin/isONclust"
---

### isONclust has been re-implemented in Rust and is 2–5x faster than the Python version, with byte-identical output.

The Rust port produces exactly the same clusters as the Python implementation —
verified byte-for-byte across 27 parameter settings on four corpora — while
running 1.9–5.3x faster. Peak RSS is lower than the reference on ONT data
(119 MB against 235 MB on SIRV, 525 MB against 704 MB on Drosophila at `--t 1`)
and about level on PacBio; at `--t 8` on PacBio the port uses more, because its
batches are resident threads rather than separate processes. See
[Port-benchmark.md](https://github.com/ksahlin/isONclust/blob/HEAD/Port-benchmark.md) for the full comparison, which also
measures isONclust against [isONclust3](https://github.com/aljpetri/isONclust3)
on accuracy, speed and memory.

**On isONclust3.** It is a different algorithm with its own paper, and it is
faster again. On transcriptome-scale Drosophila data the two are close in quality
(V-measure 0.990 against 0.981); on the SIRV spike-in isONclust remains
noticeably more accurate, mostly because isONclust3 merges distinct genes into
large clusters there. That gap looks addressable rather than fundamental — see…

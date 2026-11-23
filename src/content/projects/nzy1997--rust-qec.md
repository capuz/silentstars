---
repo: "nzy1997/rust-qec"
name: "rust-qec"
description: "RustQEC: a Rust workspace for quantum error correction simulation, decoding, and reproducible benchmarks."
readmeQualityOk: true
url: "https://github.com/nzy1997/rust-qec"
homepage: "https://nzy1997.github.io/rust-qec/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [72, 26]
topics: ["decoding", "qec", "quantum-error-correction", "rust", "stim"]
stars: 11
forks: 3
openIssues: 14
closedIssues: 599
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-02-06T10:38:58Z"
lastCommitAt: "2026-11-23T10:14:20Z"
lastReleaseAt: "2026-11-18T07:37:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 76
maintainers: ["nzy1997"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c641ee7923f2fc58eb18bcdb5bd7c6f6ad02eae7f4d98e1978e7971f6df938/nzy1997/rust-qec"
---

# RustQEC

RustQEC is a Rust workspace for quantum error correction. It brings together
the `rstim` Stim-like circuit simulator and CLI, code-construction tools,
decoder experiments, and reproducible benchmark evidence.

## Benchmarked Documentation Site

The [benchmarked documentation site](https://nzy1997.github.io/rust-qec/)
is the broad repository reference: workspace walkthroughs, benchmark evidence,
checked results, methodology and claims limits, plus the QP101 schema browser
and gallery that used to be the whole Pages surface.

Build and check the same Pages tree locally:

```sh
make build-site
python3 tools/check_site_build.py _site
```

Generated evidence bundles, documentation test reports and other large site
artifacts live in the companion [`rust-qec-docs`](https://github.com/nzy1997/rust-qec-docs)
repository. `make build-site` and the evidence workflow fetch the pinned
artifact revision automatically; use `make fetch-doc-artifacts` when running
those checks directly.

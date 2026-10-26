---
repo: "nzy1997/rust-qec"
name: "rust-qec"
description: "RustQEC: a Rust workspace for quantum error correction simulation, decoding, and reproducible benchmarks."
readmeQualityOk: true
url: "https://github.com/nzy1997/rust-qec"
homepage: "https://nzy1997.github.io/rust-qec/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [68, 29]
topics: ["decoding", "qec", "quantum-error-correction", "rust", "stim"]
stars: 9
forks: 3
openIssues: 161
closedIssues: 423
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-02-06T10:38:58Z"
lastCommitAt: "2026-10-26T03:02:39Z"
lastReleaseAt: "2026-09-18T06:28:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 72
maintainers: ["nzy1997"]
openGraphImageUrl: "https://opengraph.githubassets.com/11547a287f5d82bbad37054ebc6c310674ecf6b312d2d7fe80705c54282bf8db/nzy1997/rust-qec"
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

The site follows `master`; [Get started](https://nzy1997.github.io/rust-qec/get-started/)
pins the native CLI examples to v0.3.3. `make build-site` stages the canonical
QP101 and support contracts into…

---
repo: "GBeurier/nirs4all-methods"
name: "nirs4all-methods"
description: "A portable Partial Least Squares engine in C++17 with a stable C ABI and first-class bindings for Python, R, MATLAB, JavaScript/WASM and Android. NIRS / chemometrics / omics / process monitoring. AOM-PLS & POP-PLS."
readmeQualityOk: true
url: "https://github.com/GBeurier/nirs4all-methods"
homepage: "https://methods.nirs4all.org/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [38, 28]
stars: 22
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-13T22:35:10Z"
lastCommitAt: "2026-11-16T04:27:52Z"
lastReleaseAt: "2026-07-06T10:27:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["GBeurier"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7edc5658d166e093d03c9a59089cf14e4dd0c7f33d687415b734a1ef207e2cc/GBeurier/nirs4all-methods"
---

# nirs4all-methods (n4m)

> A portable PLS / NIRS engine in **C++17** with a stable **C ABI**
> (`libn4m`) and thin first-class bindings for the **current target
> languages**: **Python, R, MATLAB / Octave**, and **JS / WebAssembly**.
> Archived PoC bindings (Julia, JNI / Android, Go, Rust, .NET, Ruby,
> Lua, Nim) live under `bindings/_archive/` and are revived only by an
> explicit binding request.

The same numerical core powers every active binding: a model trained in
Python, R, MATLAB / Octave, or the browser is checked against the same
C++ parity contract and tolerance policy. Cross-checked against
scikit-learn, R `pls`, `ropls`, `mixOmics`, `ikpls`, and Octave
`plsregress`.

Part of the [open-source NIRS tools](https://nirs4all.org/open-source-nirs-tools.html)
ecosystem: file readers, datasets, methods, browser modelling, reproducible pipelines,
papers, benchmarks, and release dashboards for near-infrared spectroscopy.

> **Status**: V1 release line. See
> [developer documentation](https://github.com/GBeurier/nirs4all-methods/blob/HEAD/docs/dev/documentation.md) for current contracts
> and the private historical archive policy. `pls4all` is now
> a packaging subset name…

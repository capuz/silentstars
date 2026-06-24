---
repo: "the-omega-institute/newmath"
name: "newmath"
description: "BEDC: Binary Emission Discovery Calculus (mathlib-free Lean 4 + LaTeX paper)"
url: "https://github.com/the-omega-institute/newmath"
homepage: "https://the-omega-institute.github.io/newmath/visualization.html"
language: "TeX"
languages: ["TeX", "Lean"]
languagePcts: [49, 38]
topics: ["formal-verification", "lean4", "math"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 472
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-29T20:47:09Z"
lastCommitAt: "2026-06-24T23:38:45Z"
lastReleaseAt: "2026-05-13T17:50:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["loning", "AlyciaBHZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fb036981734ef4c1ee0c77bff6c73faf3df177c3cc7b4835b3443927660d895/the-omega-institute/newmath"
---

# newmath — BEDC Active Theory Repository

`newmath` is the active theory repository for the Binary Emission Discovery Calculus (BEDC), combining a Lean 4 formalization with a LaTeX paper track.

The repository is mathlib-free by design. Formalization starts from first principles rather than importing Mathlib as a proof substrate.

## Repository Layout

- `papers/bedc/` — LaTeX manuscript for BEDC
- `lean4/` — Lean 4 formalization
- `tools/` — auxiliary scripts and audit helpers when present

## Build

The operational build and verification contract is maintained in `CLAUDE.md`.
Toolchain and dependency facts are read from the files that drive the build.

```bash
cd lean4 && lake build
cd papers/bedc && make
```

## License

GPOL

## Reference

Chinese version: [README.zh-CN.md](README.zh-CN.md)

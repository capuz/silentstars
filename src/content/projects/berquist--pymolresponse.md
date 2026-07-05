---
repo: "berquist/pymolresponse"
name: "pymolresponse"
description: "Molecular frequency-dependent response properties for arbitrary operators"
readmeQualityOk: true
url: "https://github.com/berquist/pymolresponse"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["python", "quantum-chemistry", "computational-chemistry", "python-chemistry"]
stars: 12
forks: 3
openIssues: 31
closedIssues: 8
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2017-02-26T16:19:45Z"
lastCommitAt: "2026-07-05T20:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 82
undervaluedScore: 60
maintainers: ["renovate[bot]", "berquist"]
openGraphImageUrl: "https://opengraph.githubassets.com/f56b72d7948b32ae4f2c6cb3831c013816c0f6c388011cf2f7cd57cb5d6a56a9/berquist/pymolresponse"
discussionCount: 0
---

# pymolresponse

Molecular frequency-dependent response properties for arbitrary operators.

For documentation, go to https://berquist.github.io/pymolresponse/.

Currently, the goal is to provide:

1. a pedagogical example of a working molecular orbital response program as an almost direct translation from equations to code,
2. an implementation that gives "exact" results for testing, and
3. an example of testing and documenting scientific code using modern software development tools.

## Installation

To set up a conda environment with all dependencies for running, testing, and building the documentation, look under `devtools`.

## Requirements

* Python >= 3.9 (because of type annotations)
* [pyscf](https://github.com/pyscf/pyscf)
* [Psi4](https://psicode.org/)

## Testing

```bash
just test
```

## Caveats

* RHF and UHF references only; no ROHF yet.
* Hartree-Fock and DFT only; no post-HF methods yet.
* Real orbitals only; no complex or generalized orbitals yet.
* Because the dimensioning of all arrays is based around the ov/vo space, methods that have non-zero contributions from the oo space (specifically derivatives of GIAOs/London orbitals w.r.t. the B-field) are not…

---
repo: "thelfer/MFrontGenericInterfaceSupport"
name: "MFrontGenericInterfaceSupport"
description: "This project aims at providing support for MFront generic behaviours. This project can be embedded in open-source and propriary sofware"
readmeQualityOk: true
url: "https://github.com/thelfer/MFrontGenericInterfaceSupport"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 42
forks: 36
openIssues: 32
closedIssues: 231
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2018-06-20T12:41:49Z"
lastCommitAt: "2026-11-04T13:05:19Z"
lastReleaseAt: "2025-12-12T15:33:53Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 61
maintainers: ["trsxvz", "thelfer"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3cb84667b443fd859c72d0b333cdad5f0ec0373996ee5c50b525016f2d425c8/thelfer/MFrontGenericInterfaceSupport"
discussionCount: 15
---

# MFrontGenericInterfaceSupport

This project aims at providing tools (functions, classes, bindings,
etc...) to handle behaviours written using the
[`MFront`](https://thelfer.github.io/tfel/web/index.html) generic interface.

Those tools are meant to be used by (`FEM`, `FFT`, etc.) solver
developers. Permissive licences have been chosen to allow integration in
open-source and proprietary codes: `MGIS` is distributed under either
the `LGPL` v3 licence or the `CeCILL-C` licence.

By default, `MGIS` looks for the `TFEL` libraries and, if they are
found, is linked to the `TFELMath` and `TFELMFrontDatabase` libraries,
which provide the `TFEL/Math` objects of `MGIS/Function` and the
`MFront` database (`mgis::getDatabase` and
`mgis::behaviour::loadFromDatabase`). Those libraries are distributed
under either the `GPL` licence with a linking exception or the
`CeCILL-A` licence. Passing `-Ddisable-tfel=ON` to `cmake` builds a
library independent of `TFEL`.

The goal and features of MGIS are described in its
[JOSS paper](https://doi.org/10.21105/joss.02003).

The official website can be found here:
<https://thelfer.github.io/mgis/web/index.html>.

## The `MFrontGenericInterface` `C++`…

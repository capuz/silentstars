---
repo: "ballistics-lab/bclibc"
name: "bclibc"
description: "Pure C++ Ballistic Solver Engine"
readmeQualityOk: true
url: "https://github.com/ballistics-lab/bclibc"
language: "C++"
languages: ["C++", "C"]
languagePcts: [67, 22]
topics: ["ballistic-solver", "ballistics", "py-ballisticcalc", "bclibc"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-23T14:56:07Z"
lastCommitAt: "2026-11-19T11:57:45Z"
lastReleaseAt: "2026-06-24T23:34:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["o-murphy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/280098197b1266d1ebc864986b1dd67f6f3c682af4cb9ffd419c32791f259fa2/ballistics-lab/bclibc"
---

# bclibc — Ballistic Solver Engine

High-performance ballistic trajectory solver with RK4, Euler, Velocity Verlet, and adaptive Cash-Karp / Dormand-Prince / Tsitouras RK45 integration, Ridder's method for zero-finding, PCHIP drag curves, Coriolis, and spin drift.

`BCLIBC_integrateDormandPrince` and `BCLIBC_integrateTsitouras` provide two
structurally-identical 7-stage FSAL 5(4) pairs with SciPy RK45-style component
scaling and adaptive controller behavior. Cash--Karp keeps its own
compatibility controller. All three use the compile-time embedded-RK core.

![Linux] ![Windows] ![macOS] ![WebAssembly]

---

## Part of the Ballistics Lab ecosystem

`bclibc` is the shared C++/C99 physics core behind the [**Ballistics Lab**][ballistics-lab] ecosystem —
one engine, bound natively into [py-ballisticcalc][py-ballisticcalc] (Python/Cython),
[js-ballistics][js-ballistics] (TypeScript, on the bare WASM module), [dart-bclibc][dart-bclibc]
(Dart FFI natively, and the bare WASM module on web — see [WASM build](#wasm-build)), and
[micropython-bclibc][micropython-bclibc] (MCUs via the bundled `tiny_bclibc` C99 subset).

---

## Coverage

`bclibc` is tested here and by the projects that use it.

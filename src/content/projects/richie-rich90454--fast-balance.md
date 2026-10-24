---
repo: "richie-rich90454/fast-balance"
name: "fast-balance"
description: "An exact-arithmetic stoichiometric equation balancer for JavaScript and TypeScript available as an npm package for both CJS and ESM imports."
readmeQualityOk: true
url: "https://github.com/richie-rich90454/fast-balance"
homepage: "https://richie-rich90454.github.io/fast-balance/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["balancer", "chemistry-formulas", "chemistry-solver", "commonjs", "es-module", "npm-package", "science-research", "typescript", "awesome-tools", "cjs"]
stars: 0
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-04-26T13:08:52Z"
lastCommitAt: "2026-10-04T00:49:44Z"
lastReleaseAt: "2026-10-24T01:10:17Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 70
maintainers: ["richie-rich90454"]
openGraphImageUrl: "https://opengraph.githubassets.com/05b22959d2949b3586812c661bb8e3f22f0acd0f2b0d3db8716f4a481dd9dc1b/richie-rich90454/fast-balance"
promoted: true
postedAt: "2026-10-24T00:21:33.516Z"
---

# fast-balance

> Exact, fast stoichiometric equation balancing for JavaScript and TypeScript.  
> Conservation of mass and charge are solved with BigInt rational arithmetic — no floating-point discrepancy, ever.

---

## Features

- **Exact arithmetic** — the balancing kernel uses BigInt rationals, so results are always the smallest exact integer coefficients.
- **Linear-time core** — element symbols are validated against a fixed set, so elimination is `O(m²·n)` with `m = O(1)`: linear in the number of species.
- **Real chemistry** — nested `()`/`[]`, ionic charges, hydrates, state symbols, isotopes, nuclear mode, functional groups and common abbreviations.
- **Spectator species** — a species on both sides is balanced, not rejected (`C3H8 + O2 + N2 -> CO2 + H2O + N2`).
- **Underdetermined systems** — the minimal positive solution is returned and flagged; `balanceAll` returns every independent balance.
- **Honest errors** — typed `BalanceError` with stable codes; unknown elements, ambiguous input and unbalanceable equations are reported explicitly.
- **Small and tree-shakeable** — zero runtime dependencies, dual ESM/CommonJS build, TypeScript types, and `"sideEffects": false` so…

---
repo: "QEDGen/solana-skills"
name: "solana-skills"
description: "Ship without fear. Proofs, not promises."
readmeQualityOk: true
url: "https://github.com/QEDGen/solana-skills"
homepage: "https://qedgen.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 65
forks: 7
openIssues: 5
closedIssues: 118
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-25T09:10:11Z"
lastCommitAt: "2026-07-20T06:33:35Z"
lastReleaseAt: "2026-04-18T17:10:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 38
maintainers: ["abishekk92", "saicharanpogul"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf402c569343a4c4d91fefefed14a416639c9b42b7f9a7e74da2343ba053a7ea/QEDGen/solana-skills"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo-light.png">
  </picture>
</p>

<h3 align="center">Proofs, not promises.</h3>

</p>

</p>

---

Write what your Solana program must guarantee in a `.qedspec` file. QEDGen validates the spec, finds bugs your tests miss, then generates the verification artifacts and implementation scaffold needed to keep them fixed: **property tests**, **Kani harnesses**, **Lean 4 proofs**, **agent-fill program scaffolds**, and **CI workflows** — all from a single source of truth. Frameworks: **Anchor**, **Quasar**, and **Pinocchio** (greenfield scaffold via `qedgen init --target ...`), plus **sBPF assembly** through the dedicated Lean/qedsvm proof path. Brownfield source audit covers **Anchor / Quasar / Pinocchio / native Rust** via `qedgen probe` (with Miri-backed UB detection for Pinocchio) and lifts findings into a ratifiable spec. The auditor does not audit sBPF assembly; use `qedgen asm2lean` or a `.qedspec` for that target.

> **Alpha:** expect bugs and breaking API changes while the project evolves.

```bash
npx skills add…

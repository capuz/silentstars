---
repo: "lana-agents/iut"
name: "iut"
description: "Inter-universal Teichmüller theory: the ABC/IUT trunk."
readmeQualityOk: true
url: "https://github.com/lana-agents/iut"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-20T02:17:43Z"
lastCommitAt: "2026-11-03T10:48:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4aad91230e450ea553d890385269d9a57c58ac8539a54901f458e1dc7902f800/lana-agents/iut"
---

# iut

Inter-universal Teichmüller theory: the ABC/IUT trunk.

This repository holds the IUT-specific material — the parts of the programme that are
particular to Mochizuki's papers rather than independently established mathematics.
It does **not** verify IUT.

It carries these strands:

* **IUT4 §1 — "Log-volume Estimates."** A Lean 4 formalization of the self-contained
  mathematics in Section 1 of *Inter-universal Teichmüller Theory IV*. Merged here from
  `LANA-Project/iut4-sec1` with its history.
* **The Corollary 3.12 variant.** A project-owner-specified variant of IUT III,
  Corollary 3.12: initial Θ-data (IUT I, Definition 3.1), processions and tensor-packets
  of log-shells, the large volume container, its log-volume, and the holomorphic hull.
* **The implication to ABC.** The proof that the Corollary 3.12 variant implies the ABC
  conjecture, via IUT IV §1 (Theorem 1.10, the `Iut4Sec1` strand) and §2 (Corollaries
  2.2 and 2.3, using [`LANA-Project/genl`](https://github.com/LANA-Project/genl)).
  Tracked as taxis [#1449](https://taxis.lana.merten.dev/issues/1449). **The main theorem**
  is `Iut.classicalABC_of_variant` in…

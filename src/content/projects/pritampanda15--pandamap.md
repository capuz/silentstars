---
repo: "pritampanda15/PandaMap"
name: "PandaMap"
description: "Ligand-Protein Interaction Mapping"
readmeQualityOk: true
url: "https://github.com/pritampanda15/PandaMap"
homepage: "https://www.biorxiv.org/content/10.64898/2026.08.06.743421v1"
language: "HTML"
languages: ["HTML"]
languagePcts: [85]
topics: ["protein-ligand-interactions", "visualization", "pandamap"]
stars: 97
forks: 16
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2025-03-28T20:27:47Z"
lastCommitAt: "2026-11-12T05:36:43Z"
lastReleaseAt: "2026-11-12T05:39:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 31
maintainers: ["pritampanda15"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8c07148c947c8dca85bfe0430dc76e94f46eca051494dfd40100200e49dbcc/pritampanda15/PandaMap"
---

# PandaMap: A Python Package for Visualizing Protein–Ligand Interactions

**P**rotein **AND** lig**A**nd interaction **MAP**per — comprehensive detection, visualization, and empirical binding affinity estimation for protein–ligand complexes.

---

## What's New in v4.3

Correctness release. Several fixes change **which interactions are detected** and
**what ΔG is reported** — see [Upgrading from 4.2](#upgrading-from-42).

| Change | Description |
|---|---|
| **Halogen bonds now detect Cl, Br and I** | The donor test was case-sensitive against BioPython's upper-cased element symbols (`'BR'`), so only fluorine was ever matched. Bromine, chlorine and iodine halogen bonds were undetectable |
| **No more ΔG double-counting** | Each ionic contact was scored as both `ionic` (−1.80) and `salt_bridge` (−1.50); `cation_pi` and `pi_cation` overlapped and scored one contact twice |
| **Carboxylate salt bridges detected** | Ligand anion perception excluded every carboxylate — the commonest anionic group in drug-like ligands |
| **D–H···A angular criterion** | With explicit hydrogens the true donor angle is measured and must exceed 100° (PLIP's threshold) |
| **Metal coordination no longer…

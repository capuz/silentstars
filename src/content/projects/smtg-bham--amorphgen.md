---
repo: "SMTG-Bham/AmorphGen"
name: "AmorphGen"
description: "A Python package for amorphous structure generation by melt-quench simulation and random placement."
readmeQualityOk: true
url: "https://github.com/SMTG-Bham/AmorphGen"
homepage: "https://smtg-bham.github.io/AmorphGen/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["amorphous", "amorphous-materials", "ase", "chgnet", "computational-chemistry", "mace", "machine-learning", "materials", "materials-science", "molecular-dynamics"]
stars: 14
forks: 3
openIssues: 14
closedIssues: 50
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-03-12T11:50:22Z"
lastCommitAt: "2026-11-05T11:24:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 56
maintainers: ["LouieSlocombe", "cywkmc21", "alex-manche"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ed55e4fd5d2c15f5746a41e7aedeca0e4e8ecd424a1de4e0cd69b410721757f/SMTG-Bham/AmorphGen"
---

Documentation: <a href="https://smtg-bham.github.io/AmorphGen/">smtg-bham.github.io/AmorphGen</a>

---

AmorphGen exposes three workflows. Pick the one that matches your starting point:

| # | Workflow | CLI flag | Starting point |
|---|----------|----------|----------------|
| 1 | **Random generation** | `--random-gen` | Composition only |
| 2 | **Melt-quench (MQ)** | (default) or `--mq-ensemble` | Crystalline input |
| 3 | **Hybrid** | `--hybrid-ensemble` | Directory of disordered structures |

### 1. Random generation (`--random-gen`)

```
Composition  (e.g. "In2O3*16"  or  In=32,O=48)
                           │
   ┌───────────────────────▼────────────────────────┐
   │     Auto-derive  minsep, density, target CN    │
   └───────────────────────┬────────────────────────┘
   ┌───────────────────────▼────────────────────────┐
   │                   Random atoms                 │
   └───────────────────────┬────────────────────────┘
   ┌───────────────────────▼────────────────────────┐
   │          Optional relax  (--relax)             │
   └───────────────────────┬────────────────────────┘
       N amorphous structures  (.xyz / .vasp / .cif)

```

### 2. Melt-quench (MQ)

```…

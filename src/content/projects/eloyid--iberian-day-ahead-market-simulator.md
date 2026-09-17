---
repo: "EloyID/iberian-day-ahead-market-simulator"
name: "iberian-day-ahead-market-simulator"
description: "MIBEL market simulator"
readmeQualityOk: true
url: "https://github.com/EloyID/iberian-day-ahead-market-simulator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-13T15:32:56Z"
lastCommitAt: "2026-09-17T08:50:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 39
maintainers: ["EloyID"]
openGraphImageUrl: "https://opengraph.githubassets.com/5510cd9e6bf5a4f1e162f09dfc321abaa8745098917303798f1aab6455a99e33/EloyID/iberian-day-ahead-market-simulator"
---

# iberian-day-ahead-market-simulator

A Python simulator for the **MIBEL** (Mercado Ibérico de Electricidad) Iberian day-ahead electricity market clearing process.

The package replicates the OMIE/MIBEL market-clearing algorithm, including:
- Simple and complex bid orders
- Paradoxical order inclusion and removal
- Spain–Portugal interconnection capacity constraints
- France exchange integration

## Requirements

### Solver support

The simulator uses Pyomo `SolverFactory`, so you can choose the solver with `solver_factory_type`.

- Recommended/default: **Gurobi** (`solver_factory_type="gurobi"`)
- Also possible: **HiGHS** (`solver_factory_type="highs"`), or any solver plugin available in your Pyomo environment

> Note: model performance and feasibility behavior can vary by solver. Gurobi is the most tested option in this project.

If you use Gurobi, install `gurobipy` and configure your licence:
```bash
pip install gurobipy
```

If you use HiGHS, install `highspy`:
```bash
pip install highspy
```

If you use other solvers, install the corresponding solver binaries in your system and use the appropriate `solver_factory_type`.

## Installation

```bash
pip install…

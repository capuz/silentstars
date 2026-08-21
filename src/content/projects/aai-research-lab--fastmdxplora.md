---
repo: "aai-research-lab/FastMDXplora"
name: "FastMDXplora"
description: "Software for automated molecular dynamics exploration"
readmeQualityOk: true
url: "https://github.com/aai-research-lab/FastMDXplora"
homepage: "https://github.com/aai-research-lab/fastmdxplora"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["molecular-dynamics", "fastmdxplora", "md-analysis", "md-simulation"]
stars: 130
forks: 24
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2025-04-12T17:04:20Z"
lastCommitAt: "2026-08-21T04:12:06Z"
lastReleaseAt: "2026-08-18T18:45:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 50
maintainers: ["ainaadekunle"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fae2b4023e0e199563bd2fe4c33d92d2d914378ec2d6fd49ad71cf054897ad1/aai-research-lab/FastMDXplora"
---

# FastMDXplora

**Molecular dynamics from a PDB code to a finished study — in one command.**

[**Documentation**](https://fastmdxplora.readthedocs.io) ·
[**Quick start**](https://fastmdxplora.readthedocs.io/en/latest/getting_started.html) ·
[**GUI**](https://fastmdxplora.readthedocs.io/en/latest/gui.html) ·
[**Cite**](#citation)

</div>

---

```bash
fastmdx explore --system 181L
```

```
setup  →  simulation  →  analysis  →  report
```

Four characters of PDB ID as input. FastMDXplora fetches T4 lysozyme,
parameterises the benzene bound in its cavity, runs the dynamics, analyses the
trajectory, works out which residues hold the ligand in place, and writes the
whole study up as a PDF.

Or configure the whole MD study in the GUI:

```bash
fastmdx gui
```

## Install

```bash
conda create -n fastmdxplora -c conda-forge fastmdxplora
conda activate fastmdxplora
```

`fastmdx info` lists every backend and how to get anything missing:

```bash
fastmdx info
```

## What you can study

| | |
|---|---|
| **A protein on its own** | Fold, flexibility, secondary structure, native contacts, conformational clustering — from a PDB code. Fluctuations can be set against the crystal's own…

---
repo: "aai-research-lab/FastMDXplora"
name: "FastMDXplora"
description: "Software for automated molecular dynamics studies"
readmeQualityOk: true
url: "https://github.com/aai-research-lab/FastMDXplora"
homepage: "https://github.com/aai-research-lab/fastmdxplora"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["molecular-dynamics", "fastmdxplora", "md-analysis", "md-simulation"]
stars: 117
forks: 21
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 2
createdAt: "2025-04-12T17:04:20Z"
lastCommitAt: "2026-08-05T06:08:03Z"
lastReleaseAt: "2026-08-01T20:01:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 49
maintainers: ["ainaadekunle", "Paradoxicaly", "princeote"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab54070b1d6307f0c3a23db2b0ba864228f443459fdecb74226425855061a60/aai-research-lab/FastMDXplora"
---

# FastMDXplora

> **F**ully **A**utomated **Sy**s**T**em for **M**olecular **D**ynamics e**Xplora**tion

---

**FastMDXplora** explores a protein's behavior end to end from a single
command. Given a structure (or just a PDB ID) it performs molecular dynamics
exploration all the way through setup, simulation, analysis, and reporting,
then hands back publication-ready results.

```
  setup  →  simulation  →  analysis  →  report
```

## Highlights

- Explore a protein's full dynamics with a single command, covering setup, simulation, analysis, and reporting
- Build a protein-ligand system from a PDB identifier alone: the ligand is identified, its chemistry retrieved, and its protonation settled in the binding site, with a refusal rather than a guess where the structure is ambiguous
- Probe protein-ligand binding automatically with analyses for pose stability, contacts, and protein-ligand hydrogen bonds
- Reach beyond plain MD with built-in PLUMED enhanced sampling (metadynamics, umbrella sampling, steered MD)
- Design, start, watch, and review an exploration from a browser, with a 3D viewer and live telemetry
- Analyse a trajectory you already have, from any engine, without running…

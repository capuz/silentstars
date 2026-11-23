---
repo: "pquarterman17/quantized"
name: "quantized"
description: "Scientific toolbox for common thin film characterization -- X-ray scattering, magnetometry, SIMS, etc. Handle OriginPro projects"
readmeQualityOk: true
url: "https://github.com/pquarterman17/quantized"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [71, 27]
topics: ["originpro", "originpro-data-visualization", "originpro-scientific-analysis", "scientific-calculator", "scientific-research", "scientific-visualization"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T14:24:38Z"
lastCommitAt: "2026-11-23T12:23:10Z"
lastReleaseAt: "2026-07-05T22:36:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["pquarterman17"]
openGraphImageUrl: "https://opengraph.githubassets.com/4859183d51fa2f5cb1e219c19ae711923e97a11097d79f53a5b19714eb3efa39/pquarterman17/quantized"
---

# quantized

  

**Plot, analyze, and publish lab data — magnetometry, X-ray/neutron
diffraction & reflectometry, transport — in one fast, reproducible app.**

A clean-architecture Python (FastAPI) + React application, born as a port
of the `quantized_matlab` scientific toolbox and grown into a full
OriginPro-class daily driver. Backend math is **golden-verified** against
the MATLAB original; the GUI is a ground-up revamp.

> **Install:** `pip install quantized-lab` → run `qz`
> (the PyPI name is `quantized-lab`; the package you import and the
> commands you run are plain `quantized` / `qz`)

## What it does

**Import instrument data** — Quantum Design VSM/PPMS/MPMS, Lake Shore VSM,
PANalytical XRDML (1-D scans *and* 2-D reciprocal-space maps with Q-space),
Rigaku, NCNR reflectometry/PNR, refl1d, SIMS, generic CSV, Excel
(`.xlsx` and legacy `.xls`) — with
content sniffing for ambiguous extensions, drag-drop, paste, guided import
wizard, and one-click re-import when the source file changes.

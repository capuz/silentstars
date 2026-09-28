---
repo: "gdsfactory/quantum-rf-pdk"
name: "quantum-rf-pdk"
description: "Sample PDK for Superconducting RF Quantum Circuits"
readmeQualityOk: true
url: "https://github.com/gdsfactory/quantum-rf-pdk"
homepage: "https://gdsfactory.github.io/quantum-rf-pdk/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [49, 49]
topics: ["gdsfactory", "pdk", "open-source", "rf", "chip-design", "circuit-simulation", "cpw", "gdsii", "jax", "klayout"]
stars: 33
forks: 14
openIssues: 22
closedIssues: 147
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-08-13T03:58:24Z"
lastCommitAt: "2026-09-28T10:05:50Z"
lastReleaseAt: "2026-03-25T16:16:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 64
maintainers: ["nikosavola", "jackgdsf", "joamatab"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1037091385/d3db1308-7689-4698-aa5f-172dd4c55456"
discussionCount: 2
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/_static/qpdk_logo_dark.svg">
</picture>

______________________________________________________________________

**QPDK** is an open-source process design kit (PDK) for superconducting quantum RF applications built on
[gdsfactory](https://gdsfactory.github.io/gdsfactory/). It provides a library of parametric quantum circuit components
(transmon qubits, CPW resonators, Josephson junctions, etc.), analytical S-parameter models, routing utilities, and
test-chip examples.

QPDK gives researchers, engineers, and students a scriptable, version-controlled foundation to go from concept to GDSII
in minutes.

## Key Features

- **Rich component library** — Transmons, fluxonium, unimon qubits, CPW resonators, interdigital capacitors, SQUID
  junctions, launchers, bump bonds, TSVs, and more.
- **Parametric & composable** — Combine Python functions (`@gf.cell`) into hierarchical designs or define full chips in
  YAML.
- **Analytical circuit models** — Fast, differentiable S-parameter simulations powered by
  [SAX](https://gdsfactory.github.io/sax/) and [JAX](https://github.com/jax-ml/jax).
- **Automated routing** — CPW-aware…

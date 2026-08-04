---
repo: "clay-good/anvilate"
name: "anvilate"
description: "Anvilate is an open-source, local-first design agent for mechanical engineers. Describe a part in plain English and receive a physics-validated, parametric STEP or DXF file that drops straight into CATIA, SolidWorks, NX, or AutoCAD, alongside the editable Python source code. "
readmeQualityOk: true
url: "https://github.com/clay-good/anvilate"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-design-agent", "automated-validation", "build123d", "calculix", "dfm", "dxf", "fea", "generative-design", "gmsh", "industrial-engineering"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T20:36:11Z"
lastCommitAt: "2026-08-04T06:11:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["clay-good"]
openGraphImageUrl: "https://opengraph.githubassets.com/afc0a38fde0a919e6b06d303a81c57c09ef3209299d1d00c8a0fbdee9762a3bf/clay-good/anvilate"
---

# Anvilate

*anvil + validate* — describe a mechanical part, get back a physics-validated pass/fail where **every check cites the code it came from**.

Anvilate is a **local-first, open-source** design tool for mechanical, structural, and industrial engineers. It runs the analytical screens you'd otherwise do by hand in a spreadsheet — bending, deflection, buckling, resonance, bolted and welded connections, contact, thick-wall pressure, tolerance stack-ups — and rolls them into one scorecard that **won't hand you a silent green**. No cloud, no LLM required, no account.

> **Status: pre-alpha (v0.0.1).** The deterministic engineering core is real, tested, and runnable today. The natural-language front end, 3D geometry, FEA, and STEP export described under [Where this is going](#where-this-is-going) are still being built.

## Quickstart

Python 3.11+.

```bash
git clone https://github.com/clay-good/anvilate.git
cd anvilate
python -m venv .venv && source .venv/bin/activate
pip install -e ".[export]"      # drop [export] if you don't need DXF output
```

Run any of the worked examples — each is self-contained, needs no network, and prints a scorecard:

```bash
python…

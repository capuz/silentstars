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
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T20:36:11Z"
lastCommitAt: "2026-09-19T01:16:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["clay-good"]
openGraphImageUrl: "https://opengraph.githubassets.com/8418f88a7c346447087d3bb9a913ee101e4015b5e333313a2d4a1e10233d8760/clay-good/anvilate"
---

# Anvilate

*anvil + validate* — describe a mechanical part, get back a physics-validated pass/fail where **every check cites the code it came from**.

Anvilate is a **local-first, open-source** design tool for mechanical, structural, and industrial engineers. It runs the analytical screens you'd otherwise do by hand in a spreadsheet — bending, deflection, buckling, resonance, bolted and welded connections, contact, thick-wall pressure, tolerance stack-ups — and rolls them into one scorecard that **won't hand you a silent green**. No cloud, no LLM required, no account.

> **Status: pre-alpha (v0.0.1).** The deterministic engineering core is real, tested, and runnable today. Audited base-plate, cover-plate, and solid transmission-shaft patterns build valid B-Reps, write and verify validation-gated AP242 STEP with import-integrity properties, render deterministic SVG viewport images, export validation-gated plate DXF cut profiles locally, and expose kernel measurements over MCP. Local mating-STEP inspection detects planar faces and regular through-hole patterns without an LLM. The wider geometry catalog, natural-language front end, FEA, and semantic PMI described under [Where this…

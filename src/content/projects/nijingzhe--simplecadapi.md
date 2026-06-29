---
repo: "NiJingzhe/SimpleCADAPI"
name: "SimpleCADAPI"
description: "A command style api to build CAD model, LLM friendly"
url: "https://github.com/NiJingzhe/SimpleCADAPI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-06-30T18:30:09Z"
lastCommitAt: "2026-06-29T07:22:58Z"
lastReleaseAt: "2026-06-02T17:34:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 77
maintainers: ["NiJingzhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc1496c9fbf91340e2e7bf4223d54ef6ee83cf1619fac48f18ed83be2a39da20/NiJingzhe/SimpleCADAPI"
---

# SimpleCADAPI

SimpleCADAPI is an OCP-native Python SDK for building CAD models with clear,
functional operations and replayable model graphs. It wraps OpenCascade geometry
in a compact public API for creating solids, applying features, tagging semantic
intent, querying topology, exporting manufacturing files, and translating recorded
models into FreeCAD workflows.

Current beta: `simplecadapi==2.0.1b1`.

## What It Provides

- OCP-native shape types: `Vertex`, `Edge`, `Wire`, `Face`, and `Solid`.
- Functional modeling operations for primitives, profiles, extrude, revolve,
  loft, sweep, booleans, transforms, patterns, fillets, chamfers, and shells.
- Replayable modeling with `GraphSession`, `export_model_json(...)`,
  `import_model_json(...)`, and `replay_model_json(...)`.
- Expression parameters with `var(...)`, arithmetic expressions, and serialized
  expression graphs.
- QL selectors for geometry grounding, topology queries, and stable feature
  selections.
- Semantic tags through `apply_tag(shape, tag)` and `list_tags(shape)`.
- STEP/STL export and FreeCAD translation helpers for script or `.FCStd` output.

## Install

```bash
pip install simplecadapi
```

With `uv`:…

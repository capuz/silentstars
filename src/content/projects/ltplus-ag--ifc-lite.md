---
repo: "LTplus-AG/ifc-lite"
name: "ifc-lite"
description: "Parse, view, query, edit, validate and export building models. Browser-first WebGPU viewer, TypeScript SDK, CLI, MCP server and Rust/WASM core with dual exact-arithmetic & SMlib geometry kernels."
readmeQualityOk: true
url: "https://github.com/LTplus-AG/ifc-lite"
homepage: "https://ifclite.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [69, 21]
topics: ["3d-viewer", "columnar", "ifc", "rust", "webgpu", "cli", "ifc-parser", "script-editor", "bcf", "ids"]
stars: 470
forks: 125
openIssues: 20
closedIssues: 2503
watchers: 5
contributors: 37
recentReleases: 0
createdAt: "2026-01-10T16:00:00Z"
lastCommitAt: "2026-11-10T14:49:26Z"
lastReleaseAt: "2026-01-19T06:22:48Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 100
undervaluedScore: 34
maintainers: ["louistrue", "bruadam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131742715/4840b56c-fb4a-498b-8ac0-5efa03694953"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/louistrue"]
discussionCount: 34
---

IFC data and geometry tools for developers.

---

# IFClite

Parse, view, query, edit, validate, and export IFC files, entirely client-side. A Rust core compiled to WASM does the parsing and geometry, a WebGPU renderer puts it on screen, and modular npm packages let you pick the pieces you need. Geometry runs on an exact-arithmetic CSG kernel, verified element-by-element against IfcOpenShell across the public benchmark corpus.

Works with **IFC2X3**, **IFC4 / IFC4X3** and **IFC5 (IFCX)**. Beside IFC, the web viewer opens glTF/GLB, LandXML, point clouds (LAS/LAZ, E57, PLY, PCD, PTS, XYZ) and [Gaussian splat captures](https://ifclite.dev/docs/guide/gaussian-captures/) (Gaussian PLY, `.splat`). Live demo at [ifclite.com](https://www.ifclite.com/) and more info at [ifclite.dev](https://www.ifclite.dev/).

## Get Started

For data automation, start with the headless SDK or CLI:

```bash
npm install @ifc-lite/sdk
```

```typescript
import { readFile } from 'node:fs/promises';
import { openModel } from '@ifc-lite/sdk/headless';

const model = await openModel(await readFile('model.ifc'));
try {
  if (model.report.completeness !== 'complete') throw new Error('Incomplete or unknown record…

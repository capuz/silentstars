---
repo: "LTplus-AG/ifc-lite"
name: "ifc-lite"
description: "Parse, view, query, edit, and export IFC, IDS, BCF, pointclouds and more AEC stuff. In the browser, server or desktop. "
url: "https://github.com/LTplus-AG/ifc-lite"
homepage: "https://ifclite.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["3d-viewer", "columnar", "ifc", "rust", "webgpu", "cli", "ifc-parser", "script-editor", "bcf", "ids"]
stars: 256
forks: 70
openIssues: 8
closedIssues: 239
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2026-01-10T16:00:00Z"
lastCommitAt: "2026-06-26T06:46:13Z"
lastReleaseAt: "2026-01-19T06:22:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 99
undervaluedScore: 31
maintainers: ["louistrue", "dependabot[bot]", "Blogbotana"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131742715/4840b56c-fb4a-498b-8ac0-5efa03694953"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/louistrue"]
discussionCount: 8
---

<table align="center">
<tr>
<td valign="top">
<h1>
</h1>
Open, view, and work with IFC files. Right in the browser.
</td>
<td width="120" align="center" valign="middle">
</td>
</tr>
</table>

</p>

</p>

---

# IFClite

Parse, view, query, edit, and export IFC files in the browser. Rust + WASM core, WebGPU rendering, ~260 KB gzipped, 5× faster geometry than the next best option.

Works with **IFC2X3**, **IFC4 / IFC4X3** and **IFC5 (IFCX)**. Live demo at [ifclite.com](https://www.ifclite.com/) and more info here: [ifclite.dev](https://www.ifclite.dev/).

## Get Started

```bash
npx create-ifc-lite my-viewer --template react
cd my-viewer && npm install && npm run dev
```

That gets you a working WebGPU IFC viewer with drag-and-drop, hierarchy, properties, and 2D drawings. Other templates: `basic`, `threejs`, `babylonjs`, `server`, `server-native`.

To add IFClite to an existing project:

```bash
npm install @ifc-lite/parser @ifc-lite/geometry @ifc-lite/renderer
```

## Parse an IFC file

```typescript
import { IfcParser } from '@ifc-lite/parser';

const parser = new IfcParser();
const buffer = await fetch('model.ifc').then(r => r.arrayBuffer());
const t0 = performance.now();
const…

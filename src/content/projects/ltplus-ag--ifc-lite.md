---
repo: "LTplus-AG/ifc-lite"
name: "ifc-lite"
description: "Parse, view, query, edit, and export IFC, IDS, BCF, pointclouds and more AEC stuff. In the browser, server or desktop. "
readmeQualityOk: true
url: "https://github.com/LTplus-AG/ifc-lite"
homepage: "https://ifclite.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["3d-viewer", "columnar", "ifc", "rust", "webgpu", "cli", "ifc-parser", "script-editor", "bcf", "ids"]
stars: 263
forks: 77
openIssues: 3
closedIssues: 298
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2026-01-10T16:00:00Z"
lastCommitAt: "2026-07-11T05:57:52Z"
lastReleaseAt: "2026-01-19T06:22:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
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

Parse, view, query, edit, validate, and export IFC files, entirely client-side. A Rust core compiled to WASM does the parsing and geometry, a WebGPU renderer puts it on screen, and 36 npm packages let you pick exactly the pieces you need. Geometry processing is up to 5x faster than web-ifc (median ~2.2x across the benchmark corpus).

Works with **IFC2X3**, **IFC4 / IFC4X3** and **IFC5 (IFCX)**. Live demo at [ifclite.com](https://www.ifclite.com/) and more info at [ifclite.dev](https://www.ifclite.dev/).

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

Prefer the terminal? The whole toolkit is also a…

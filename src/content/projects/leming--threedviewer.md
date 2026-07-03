---
repo: "LEMing/ThreeDViewer"
name: "ThreeDViewer"
description: "An alternative viewer component "
url: "https://github.com/LEMing/ThreeDViewer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2024-08-20T10:22:35Z"
lastCommitAt: "2026-07-03T12:21:37Z"
lastReleaseAt: "2026-07-02T13:04:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 70
maintainers: ["LEMing", "romanrguez192", "debajit13"]
openGraphImageUrl: "https://opengraph.githubassets.com/292a21a464037a49763ebe2025a4f5168bdaa29ff769e032135402eaca5dd2fc/LEMing/ThreeDViewer"
---

# threedviewer

**The batteries-included React 3D viewer — any GLB looks studio-shot in one line.**

```tsx
<SimpleViewer object="/model.glb" />
```

Balanced studio lighting, a glossy glass floor with a contact shadow, auto-framing, compressed-asset decoders — all on by default, zero configuration, zero external CDN requests.

**▶ [Live playground](https://leming.github.io/ThreeDViewer/)** — drag & drop your own `.glb`, switch presets live, click the model to pin hotspots, download a still.

## Install

```bash
npm install threedviewer
```

Peer dependencies: `react` / `react-dom` `>=18 <20`, `three` `>=0.177 <0.186`.

## Quick start

```tsx
import { SimpleViewer } from 'threedviewer';

function App() {
  return (
      <SimpleViewer object="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" />
    </div>
  );
}
```

A `THREE.Object3D` works too:

```tsx
<SimpleViewer object={new THREE.Mesh(geometry, material)} />
```

DRACO, KTX2/Basis and Meshopt compressed assets load out of the box — the decoders are wired in and fetched lazily only when an asset actually needs them.

## Visual presets

One word sets a cohesive look — background, tone mapping, environment…

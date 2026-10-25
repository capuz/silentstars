---
repo: "Glass-HQ/liquid-glass"
name: "liquid-glass"
description: "Liquid Glass materials for web and Electron, built with vgpu."
readmeQualityOk: true
url: "https://github.com/Glass-HQ/liquid-glass"
homepage: "https://liquid-glass.glassapp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 479
forks: 23
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-10-06T00:23:48Z"
lastCommitAt: "2026-10-25T08:39:59Z"
lastReleaseAt: "2026-10-10T01:36:21Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 13
maintainers: ["naaiyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef4765a9aa1f218a5d283d52232356f3fb35a6197cfc40945fa412cfe3703c3c/Glass-HQ/liquid-glass"
---

# Liquid Glass

Glass surfaces and controls for React, the web, and Electron. Clear and Regular materials support light and dark appearances and refract live content.

[Examples](https://liquid-glass.glassapp.dev/#examples) · [Usage and API](https://github.com/Glass-HQ/liquid-glass/blob/HEAD/packages/liquid-glass/README.md)

https://github.com/user-attachments/assets/42b3ebff-2fef-4380-a173-2320d5d0651f

## Install

```sh
npm install @glass-sdk/liquid-glass@~0.0.2
```

```tsx
import { GlassScene, GlassContent, GlassButton } from "@glass-sdk/liquid-glass";
import "@glass-sdk/liquid-glass/styles.css";

<GlassScene style={{ height: 240 }}>
  <GlassContent>
    <img src="/landscape.jpg" alt="Mountain lake"
      style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </GlassContent>
  <GlassButton material="regular" style={{ position: "absolute", left: 24, top: 24 }}>
    Get started
  </GlassButton>
</GlassScene>
```

React components require React 19+. Rendering requires HTTPS or localhost and an available WebGPU adapter. Safari has known rendering issues; see [requirements and…

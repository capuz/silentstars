---
repo: "microsoft/flipcard"
name: "flipcard"
description: "Adaptive compostable UI element for schema driven adaptive design"
readmeQualityOk: true
url: "https://github.com/microsoft/flipcard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 6
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T07:32:23Z"
lastCommitAt: "2026-11-03T19:05:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["dayour", "dependabot[bot]", "danfiedler-msft"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7eeb04625b14357259949b4f54826957f516e73dcb2f5c57d45887a25b9fe6b/microsoft/flipcard"
---

# 🎴 flipcard

**The first primitive in an adaptive, manifest schema-driven, composable UI system.**

> Front = rendered design. Back = schema / manifest. Click to flip.  
> FlipCard separates **design ⟂ schema ⟂ workflow** so each can evolve independently.

## Vision

Inspired by Adaptive Cards, but generalized. Any UI element — a button, a dashboard tile, an OS shell pane — can be a flipcard. The schema is portable; the design is swappable; the workflow is independent.

FlipCard starts with a simple idea:

- **Front**: the designed experience people use
- **Back**: the manifest, schema, or system representation
- **Flip**: the bridge between what users see and what systems understand

That makes FlipCard a primitive for composable interfaces, adaptive surfaces, and eventually full UI shells built from schema-aware cards.

## Quickstart

### React

```tsx
import { FlipCard } from '@microsoft/flipcard-react';
import '@microsoft/flipcard-themes/base.css';
import '@microsoft/flipcard-themes/light.css';

<FlipCard front={<div>Hello</div>} backJson={{ id: 'demo', schema: 'v0.1' }} category="teal" />;
```

### Vanilla Web Component

```html
<script type="module">
  import…

---
repo: "zakisheriff/Liquid-Glass"
name: "Liquid-Glass"
description: "Apple's iOS 26/27 Liquid Glass for Website (React/Next js)"
readmeQualityOk: true
url: "https://github.com/zakisheriff/Liquid-Glass"
homepage: "https://liquidglass.theatom.lk"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [80, 20]
topics: ["apple", "glassmorphism", "ios", "ios26", "ios26-liquid-glass", "liquid", "liquid-glass", "apple-liquid-glass", "ios27", "liquid-glass-website"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-31T15:02:23Z"
lastCommitAt: "2026-10-29T10:20:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 45
maintainers: ["zakisheriff"]
openGraphImageUrl: "https://opengraph.githubassets.com/792270ac13751bcb65eb71a045467d2f34c5dc0d9fbe061d47d52cb39d5f781e/zakisheriff/Liquid-Glass"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/theoneatom"]
---

# <div align="center">@zakisheriff/liquid-glass</div>

**[▶ Click to watch the demo video](https://liquidglass.theatom.lk/docs#demo)**

---

Glass that bends light rather than just blurring it. Every surface ray-traces its own Snell's-law refraction map through a curved bevel. Lenses magnify and split colour at the rim. Every touch swells, stretches and settles with a jelly wobble, tuned frame by frame against iOS 26 screen recordings.

## Install

```bash
npm i @zakisheriff/liquid-glass
```

```tsx
import { useState } from 'react';
import { GlassSwitch } from '@zakisheriff/liquid-glass';
import '@zakisheriff/liquid-glass/styles.css';

export function Settings() {
  const [on, setOn] = useState(true);
  return <GlassSwitch checked={on} onChange={setOn} aria-label="Wi-Fi" />;
}
```

Works with Next.js (the bundle is marked `"use client"`), Vite and CRA.

## Components

| Component | Import | What it does |
| --- | --- | --- |
| [Button](#button--glassbutton) | `GlassButton` | Pill or circle. Swells, leans toward a drag, wobbles on release. |
| [Toggle switch](#toggle-switch--glassswitch) | `GlassSwitch` | The knob lifts into a clear lens that refracts the track. Tap, or drag with…

---
repo: "colorjs/color-space"
name: "color-space"
description: "Open collection of color spaces"
readmeQualityOk: true
url: "https://github.com/colorjs/color-space"
homepage: "http://color-space.io/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [61, 38]
topics: ["color", "colorjs", "aces", "cam16", "color-conversion", "color-science", "color-space", "css-color", "hdr", "lut"]
stars: 393
forks: 31
openIssues: 0
closedIssues: 34
watchers: 9
contributors: 24
recentReleases: 3
createdAt: "2014-11-23T13:39:15Z"
lastCommitAt: "2026-11-06T02:43:48Z"
lastReleaseAt: "2026-10-20T02:50:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 43
maintainers: ["dy", "lulunac27a"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/27033552/be8f5697-af18-4274-a235-9d0562c9c71b"
fundingLinks: ["GITHUB:https://github.com/colorjs"]
---

# color-space [](https://github.com/colorjs/color-space/actions/workflows/test.yml) [](https://npmjs.org/color-space) [](https://bundlephobia.com/package/color-space) [](https://marketplace.visualstudio.com/items?itemName=colorjs.color-spaces)

**Open collection of color spaces.** <br/>
* Formulas tested against cited sources
* Conventional ranges
* JS with TypeScript types / WASM / GLSL / LUT / ICC / OCIO

**[Atlas →](https://color-space.io/)**

## Use

```js
import space from 'color-space';

space.rgb.oklch(255, 128, 0);        // → [0.732, 0.186, 53] — modern CSS
space.slog3.rec2020(0.5, 0.5, 0.5);  // camera log → UHD wide gamut
space.rgb.xyz(300, -10, 0);          // → [59.7, 30.6, 2.8] — out-of-range in, unclamped out

// batch
space.rgb.oklch([255, 128, 0,  0, 255, 128]); // [0.732, 0.186, 53,  0.875, 0.234, 151]

// meta
space.lab.range;                     // [[0, 100], [-125, 125], [-125, 125]]
```

Individual spaces:

```js
import oklch from 'color-space/oklch.js';
oklch.rgb(0.65, 0.25, 180);          // matches CSS oklch(0.65 0.25 180)
```

## Imports

* `color-space` – All 221 interconnected spaces. 70 kB gzip
* `color-space/<name>.js` – One standalone space
*…

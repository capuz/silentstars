---
repo: "pmndrs/glyph"
name: "glyph"
description: "♠️ Complete text rendering for the web"
readmeQualityOk: true
url: "https://github.com/pmndrs/glyph"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [46, 37]
stars: 135
forks: 3
openIssues: 22
closedIssues: 9
watchers: 0
contributors: 36
recentReleases: 0
createdAt: "2026-07-22T13:35:06Z"
lastCommitAt: "2026-09-17T08:51:02Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 24
maintainers: ["thejustinwalsh", "krispya"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e89401fabb7aadad3443923ac3d3938d5f3fc05767f4e582b41d17772a0707/pmndrs/glyph"
---

# Glyph

Portable font baking, Unicode shaping, paragraph layout, and batched text rendering for every Canvas.

```ts
import { glyph, msdf } from '@pmndrs/glyph';
import { ThreeConfig } from '@pmndrs/glyph/three';

await glyph.init();
const three = glyph.handle('main', ThreeConfig);

const Inter = await glyph.fontFace('/fonts/Inter.font.glb', { format: msdf }).load();

const label = three.createText({
  font: Inter,
  text: 'Hello Glyph',
  style: { fontSize: 32, lineHeight: 1.2, color: '#f4f7ff' },
  layout: { align: 'center' },
});

scene.add(label);

glyph.shape();

renderer.render(scene, camera);
```

## Bake fonts

The `glyph` CLI bakes fonts into glb files containing bitmap, msdf, and/or slug font data.
While glyph supports runtime and offline baking, baked fonts require minimal additional processing and load quickly.

```sh
pnpm exec glyph bake --input Inter-Regular.ttf --output Inter.font.glb --bitmap 32 --msdf --slug
```

Subset a font with `--unicodes U+0020-007E` to bake only a fixed range or specific glyphs for smaller font assets.  
For an icon font, `--glyph-map <path>` outputs a JSON table keyed by the glyph name in an icon font like Font Awesome or Lucide.

##…

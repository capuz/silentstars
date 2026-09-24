---
repo: "openclaw/rastermill"
name: "rastermill"
description: "Fast, portable image processing for Node agents."
readmeQualityOk: true
url: "https://github.com/openclaw/rastermill"
homepage: "https://rastermill.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 38
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 8
recentReleases: 2
createdAt: "2026-05-25T14:46:29Z"
lastCommitAt: "2026-09-24T08:41:09Z"
lastReleaseAt: "2026-09-05T19:50:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 36
maintainers: ["steipete", "vincentkoc", "SebTardif"]
openGraphImageUrl: "https://opengraph.githubassets.com/9661d12a02b883756fcbcbc9ea79d5e7f90027e704f5573f3d27ac5743f250aa/openclaw/rastermill"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# Rastermill

Fast, portable image processing for Node agents.

Rastermill provides a small image-processing API for server-side Node code. It uses
Photon for fast in-process image work and can fall back to native tools such as
`sips`, ImageMagick, GraphicsMagick, or ffmpeg for formats that need external
codec support.

Docs: <https://rastermill.com/>

```ts
import { createRastermill } from "rastermill";

const rastermill = createRastermill({
  execution: "auto",
  limits: {
    inputPixels: 25_000_000,
    outputPixels: 25_000_000,
  },
});

const info = await rastermill.probe(imageBuffer);
const jpeg = await rastermill.encode(imageBuffer, {
  format: "jpeg",
  resize: { maxSide: 1600 },
  quality: 85,
});
// => { data, format: "jpeg", mimeType: "image/jpeg", width, height, bytes, metadata: "stripped", resized, chosen }
```

## API

```ts
const rastermill = createRastermill(options);
```

The API is three methods:

- `probe(input)` — read `format`, `width`, `height`, `bytes`, `hasAlpha`, and `orientation` from the header, without a full decode.
- `transparency(input)` — decode common raster formats and report `hasAlphaChannel` separately from `hasTransparentPixels`.
-…

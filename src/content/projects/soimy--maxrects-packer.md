---
repo: "soimy/maxrects-packer"
name: "maxrects-packer"
description: "A max rectangle 2d bin packer npm-module for packing glyphs or images into multiple sprite-sheet/atlas"
readmeQualityOk: true
url: "https://github.com/soimy/maxrects-packer"
homepage: "https://soimy.github.io/maxrects-packer/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [74, 26]
topics: ["npm-module", "nodejs", "atlas", "spritesheet-packing-algorithm", "spritesheet", "maxrects", "packing-algorithm", "packer", "packing-glyphs", "max-rectangle-algorithm"]
stars: 248
forks: 40
openIssues: 2
closedIssues: 45
watchers: 5
contributors: 5
recentReleases: 1
createdAt: "2017-08-12T06:28:09Z"
lastCommitAt: "2026-10-15T08:32:20Z"
lastReleaseAt: "2026-10-15T08:12:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 44
maintainers: ["soimy", "Jah-yee"]
openGraphImageUrl: "https://opengraph.githubassets.com/424cb42a5acc081a7f6f535cde8ca8c5b438134411e65fa1f03e892f71f76551/soimy/maxrects-packer"
discussionCount: 6
---

#  Max Rects Packer

A max rectangle 2D bin packing algorithm for packing glyphs or images into multiple sprite sheets or
atlases. Minimalist, with no runtime dependency.

It differs from most packing libraries by what it optimizes: instead of creating one output image of
minimum size, it aims for a **small number of images under a maximum size**. That avoids the single
massive image that is not browser-friendly, and suits WebGL games where the GPU benefits from sprite
sheets close to power-of-two sizes.

It is an evolved version of [Multi-Bin-Packer](https://github.com/marekventur/multi-bin-packer) that
keeps the same interfaces and method names, so migrating usually means changing the import.

## Install

```bash
npm install maxrects-packer --save
```

## Usage

```js
import { MaxRectsPacker } from "maxrects-packer";

const options = {
    smart: true,          // grow bins to the smallest size that fits
    pot: true,            // round grown bins up to a power of two
    square: false,
    allowRotation: true,
    border: 5
};
const packer = new MaxRectsPacker(1024, 1024, 2, options); // width, height, padding, options

const input = [
    { width: 600, height: 20, name:…

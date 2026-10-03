---
repo: "BioNGFF/ome-zarr.js"
name: "ome-zarr.js"
description: "Some JavaScript utils for simple rendering of OME-Zarr images"
readmeQualityOk: true
url: "https://github.com/BioNGFF/ome-zarr.js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 7
forks: 8
openIssues: 6
closedIssues: 15
watchers: 1
contributors: 11
recentReleases: 1
createdAt: "2025-02-05T14:38:10Z"
lastCommitAt: "2026-10-03T22:04:48Z"
lastReleaseAt: "2026-09-30T11:06:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 84
maintainers: ["will-moore", "jwindhager", "mkitti"]
openGraphImageUrl: "https://opengraph.githubassets.com/d59430e5037e495409b101450f3312a0ef80165fbc1f1ee19728dfe7b38d84fd/BioNGFF/ome-zarr.js"
---

# ome-zarr.js
Some JavaScript utils for simple rendering of OME-Zarr images.

## About

See the [Documentation pages](https://biongff.github.io/ome-zarr.js/)
for more details and demos.

To test thumbnail rendering of a sample image, the easiest option is to try
https://ome.github.io/ome-ngff-validator/ which uses `ome-zarr.js` to display
a thumbnail.

We use https://github.com/manzt/zarrita.js for loading zarr data.

Supports all versions of OME-Zarr v0.1 -> v0.5.

The URL must point to a `multiscales` image (not a `plate` or `bioformats2raw.layout` group).

## Usage

`render()` uses rendering settings from the `omero` metadata if the zarr image has it
and the lowest resolution of the multiscales pyramid by default:

```javascript
import * as omezarr from "https://cdn.jsdelivr.net/npm/ome-zarr.js@latest/+esm";

const url = "https://livingobjects.ebi.ac.uk/idr/zarr/v0.4/idr0062A/6001240.zarr";
let src = await omezarr.render(url);
document.getElementById("thumbnail").src = src;
```

We can choose to use different resolutions of the multiscales pyramid, to apply rendering settings
and to render a smaller region of the image. See docs above for more details.

## Demo and Development…

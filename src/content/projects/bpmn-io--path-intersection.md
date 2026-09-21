---
repo: "bpmn-io/path-intersection"
name: "path-intersection"
description: "Computes the intersection between two SVG paths."
readmeQualityOk: true
url: "https://github.com/bpmn-io/path-intersection"
homepage: "https://www.npmjs.com/package/path-intersection"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["svg", "path-intersection", "intersection"]
stars: 121
forks: 10
openIssues: 1
closedIssues: 12
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2017-12-13T08:58:07Z"
lastCommitAt: "2026-09-21T09:13:25Z"
lastReleaseAt: "2026-01-21T19:28:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 28
maintainers: ["nikku"]
openGraphImageUrl: "https://opengraph.githubassets.com/085ad59e9ca7265433396686da906d4bd986b3dbb8d89422d573577308f822bc/bpmn-io/path-intersection"
---

# path-intersection

Computes the intersection between two SVG paths.

## Examples

Execute `npm run dev` and navigate to [`http://localhost:9876/debug.html`](http://localhost:9876/debug.html) to see more examples.

## Usage

```javascript
import intersect from 'path-intersection';

const path0 = 'M30,100L270,20';
const path1 = 'M150,150m0,-18a18,18,0,1,1,0,36a18,18,0,1,1,0,-36z';

const intersection = intersect(path0, path1);
// [ { x: ..., y: ..., segment1: ..., segment2: ... }, ... ]
```

Results are approximate, as we use [bezier clipping](https://math.stackexchange.com/questions/118937) to find intersections.

## Path Caching

Where performance matters, you can pre-parse paths and cache them:

```javascript
import intersect, { parsePath } from 'path-intersection';

// parse paths once
const path1 = parsePath('M0,0L100,100');
const path2 = parsePath('M0,100L100,0');

// they won't be re-parsed during intersection checking
const result1 = intersect(path1, path2);
const result2 = intersect(path2, path2);
```

For repeated calculations, this optimization can result in substantial performance improvements.

## Building the Project

```
# install dependencies
npm install

# build…

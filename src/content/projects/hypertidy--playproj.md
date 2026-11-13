---
repo: "hypertidy/playproj"
name: "playproj"
description: "Illustrate projections"
readmeQualityOk: true
url: "https://github.com/hypertidy/playproj"
homepage: "http://hypertidy.github.io/playproj/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-09-18T10:31:21Z"
lastCommitAt: "2026-11-13T05:43:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 82
maintainers: ["claude", "mdsumner", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7f43c854aa15ecf40fae4f2ea544db40c01a827be3759d994b2c76b290344b7/hypertidy/playproj"
---

# playproj

Map projections drawn the way they are built: a point of light, a sphere and
a plane. Each map point is where a ray from the light, through a point on the
sphere, lands on the plane. Move the light, the plane or the camera and watch
the projection change.

This continues the 2016 post
[Three projections](https://mdsumner.github.io/2016/01/26/Three_Projections.html)
and the R package `pproj` that tried to generalise it (now in
[`legacy/pproj`](https://github.com/hypertidy/playproj/blob/HEAD/legacy/pproj)).

**For exploration and illustration only.** playproj is a sketchbook for
looking at spatial data and how it is built. Nothing in it is survey,
engineering, planning or regulatory data, and its pictures are not evidence
for a submission or a decision: go to the primary sources for that.

## What is here

The first page covers the azimuthal perspective family. One slider moves the
light along the axis through the sphere:

| Light                   | Projection              | PROJ                     |
|-------------------------|-------------------------|--------------------------|
| at the antipode         | stereographic           | `+proj=stere`            |
| at the…

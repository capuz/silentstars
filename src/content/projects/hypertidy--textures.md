---
repo: "hypertidy/textures"
name: "textures"
description: "simple texture plot"
readmeQualityOk: true
url: "https://github.com/hypertidy/textures"
language: "HTML"
languages: ["HTML", "R"]
languagePcts: [68, 29]
stars: 11
forks: 0
openIssues: 9
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-05-20T07:29:55Z"
lastCommitAt: "2026-07-11T05:58:16Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 28
maintainers: ["mdsumner"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dd1b9c4364d87fc437321f07ea2fb2c58dc0f4a91fba1105370635ba5f735c6/hypertidy/textures"
---

# textures

status](https://github.com/hypertidy/textures/workflows/R-CMD-check/badge.svg)](https://github.com/hypertidy/textures/actions)

The goal of textures is to utilize texture mapping in rgl to work with
images in different coordinate systems and mapped onto arbitrary shapes.

We aim to illustrate texture mapping capability in rgl with *core
techniques familiar to R users*, and with minimal *resort to specialist
code*. When specialist code is required it will be brought out
explicitly and explained in a single-step.

## Design

Current functions are:

-   **png_plot3d()** - plots a PNG file in a 3D scene
-   **quad()** create a simple mesh3d object with 1 or more quad
    primitives
-   **quad_texture()** create a mesh3d object with 1 or more quads, and
    the texture coordinates and file path to a PNG file
-   **set_scene()** a convenience wrapper to rgl scene settings, it
    makes the scene look “straight-down” and locks pan and tilt so the
    rgl device like a zoom-in/zoom-out 2D displaye
-   **break_mesh()** break the topology of a mesh (so that primitives
    can be free-floating, not tied to their neighbour’s vertices)

See [design…

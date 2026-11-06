---
repo: "Krande/adapy"
name: "adapy"
description: "A python library for structural analysis and design"
readmeQualityOk: true
url: "https://github.com/Krande/adapy"
homepage: "https://krande.github.io/adapy"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [65, 34]
topics: ["ifc", "code-aster", "abaqus", "calculix", "finite-elements", "sesam", "step", "procedural-modeling"]
stars: 113
forks: 22
openIssues: 7
closedIssues: 47
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-03-19T10:33:47Z"
lastCommitAt: "2026-11-06T11:23:41Z"
lastReleaseAt: "2021-11-15T17:24:17Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 48
maintainers: ["Krande", "oleandor"]
openGraphImageUrl: "https://opengraph.githubassets.com/40a2f1f784b987a45f08e13c3a834b7122174af3e8d724ee361cc5a03a7a2c97/Krande/adapy"
fundingLinks: ["GITHUB:https://github.com/Krande"]
discussionCount: 5
---

# ADA - Advanced Design & Analysis

A python library for working with structural analysis and design. This library should be considered as experimental.

The recommended way of installing ada-py is with [pixi](https://pixi.sh), in an isolated project
environment:

```
pixi init my-project
cd my-project
pixi add ada-py
```

To only use the `ada` command line tool, install it globally instead:

```
pixi global install ada-py
```

Here are some of the goals with `ada-py`:

* Support reading, writing and modifying FE models and post-processing FE results
* Support open source and commercial FE packages (based on what I use/would like to use regularly)
* Support scriptable FE meshing
* Support reading/writing CAD/BIM formats (STEP/IFC) & mesh formats (GLTF)
* Use a CSG (Constructive Solid Geometry) core primitives library for boolean operations based on the IFC/STEP standards
* Provide the building blocks for advanced parametric and procedural 3d model design and simulation workflows
* The library should always strive for user ergonomics.

## Quick Links

* Feel free to start/join any informal topic related to adapy [here](https://github.com/Krande/adapy/discussions).
* Issues related…

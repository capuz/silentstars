---
repo: "Krande/adapy"
name: "adapy"
description: "A python library for structural analysis and design"
readmeQualityOk: true
url: "https://github.com/Krande/adapy"
homepage: "https://krande.github.io/adapy"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 28]
topics: ["ifc", "code-aster", "abaqus", "calculix", "finite-elements"]
stars: 110
forks: 23
openIssues: 5
closedIssues: 40
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-03-19T10:33:47Z"
lastCommitAt: "2026-09-03T08:12:39Z"
lastReleaseAt: "2021-11-15T17:24:17Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 49
maintainers: ["Krande", "oleandor", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36eec493ed8e6195d70f9cfc4161c3771c523588a0c4333328120e908d19e273/Krande/adapy"
fundingLinks: ["GITHUB:https://github.com/Krande"]
discussionCount: 5
---

# ADA - Assembly for Design & Analysis

A python library for working with structural analysis and design. This library should be considered as experimental.

The recommended way of installing ada-py is by creating a new isolated environment for the installation like so:

```
mamba create -n adaenv ada-py
```

Here are some of the goals with `ada-py`:

* Support reading, writing and modifying FE models and post-processing FE results
* Support open source and commercial FE packages (based on what I use/would like to use regularly)
* Support scriptable FE meshing
* Support reading/writing CAD/BIM formats (STEP/IFC) & mesh formats (GLTF)
* Use a CSG (Constructive Solid Geometry) core primitives library for boolean operations based on the IFC/STEP standards
* Provide the building blocks for advanced parametric and procedural 3d model design and simulation workflows
* The library should always strive for user ergonomics.

## Command line

Installing the package also installs a console script. Note that the distribution is named `ada-py`
but the command is `ada` — there is no `ada-py` command:

```
ada --help
```

| Command | What it does |
| --- | --- |
| `ada convert` | Convert a model…

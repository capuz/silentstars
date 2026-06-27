---
repo: "rds1983/DigitalRiseModel"
name: "DigitalRiseModel"
description: "MonoGame/FNA library that provides alternative API to XNA's 3D modelling"
url: "https://github.com/rds1983/DigitalRiseModel"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-09-17T09:02:00Z"
lastCommitAt: "2026-06-27T00:46:27Z"
lastReleaseAt: "2026-05-16T06:17:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 67
maintainers: ["rds1983", "janfokke"]
openGraphImageUrl: "https://opengraph.githubassets.com/304e406ec9cb2b6a49b23a6738ecda41707bdb93540b7c54846a871227c8b175/rds1983/DigitalRiseModel"
fundingLinks: ["CUSTOM:https://boosty.to/rds1983", "CUSTOM:https://t.me/rds1983"]
---

### Overview
DigitalRiseModel is a MonoGame/FNA library that provides an alternative API to XNA's 3D model handling.
DigitalRiseModel has the following features (that XNA lacks):
* Construct 3D models in code
* Load 3D models from GLTF/GLB at runtime
* Skeletal animation
* Create 3D primitives (boxes, spheres, toruses, etc.) at runtime

It is important to note that DigitalRiseModel does not include rendering functionality. That is the responsibility of the developer. 

However, the [Character sample](Samples/DigitalRiseModel.Samples.Character) demonstrates how this can be done, implementing a third-person character controller with skeletal animation.

### Adding Reference For MonoGame
https://www.nuget.org/packages/DigitalRiseModel.MonoGame

### Adding Reference For FNA
Clone the following projects in one folder:
Link|Description
----|-----------
https://github.com/FNA-XNA/FNA|FNA
https://github.com/rds1983/XNAssets|Assets management library
this repo|

Now add each required project's .FNA.Core.csproj to your project

### Usage
Models are loaded through [XNAssets](https://github.com/rds1983/XNAssets).

#### Creating an AssetManager

First, create the AssetManager:
```c#…

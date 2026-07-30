---
repo: "neka-nat/three-usd-robot"
name: "three-usd-robot"
description: "Robotics USD importer and exporter for three.js"
readmeQualityOk: true
url: "https://github.com/neka-nat/three-usd-robot"
homepage: "https://three-usd-robot.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["robotics", "threejs", "usd", "isaac-sim", "isaaclab", "robot"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2023-01-04T05:59:11Z"
lastCommitAt: "2026-07-30T05:53:51Z"
lastReleaseAt: "2026-07-30T06:08:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 69
maintainers: ["neka-nat"]
openGraphImageUrl: "https://opengraph.githubassets.com/b59ac0f462e72c32cc6030a9197cc66ca7e940f785b9181847006ff93ee92445/neka-nat/three-usd-robot"
---

# three-usd-robot

> **Kinematic OpenUSD robot loader — and exporter — for Three.js.**
> Load Isaac Sim / OpenUSD robot assets, control their joints in the browser,
> and write scenes back out as USD. No physics engine, no OpenUSD/WASM
> dependency.

Think of it as a **USD version of [`urdf-loader`](https://www.npmjs.com/package/urdf-loader)**:
it reads the link / joint / xform / mesh structure out of `UsdPhysics` assets
and drives forward kinematics on a Three.js `Object3D` hierarchy.

**[▶ Live demo](https://three-usd-robot.vercel.app)** — stock Isaac Sim robots
streamed from NVIDIA's asset CDN, joints driven from a slider panel, and
exported back to `.usda` / `.usdz` in the browser.

## Features

- **Formats** — ASCII `.usda`, binary `.usdc` / `.usd`, and `.usdz`, auto-detected.
  Multi-file assets (references / payloads / sublayers), variant selections and
  instanceable prims are composed for you.
- **Robots** — links, joints (fixed / revolute / continuous / prismatic), limits,
  drives and the initial pose become a `setJointValue`-able hierarchy.
- **Rendering** — meshes, solid gprims (`Cube` / `Sphere` / `Cylinder` /
  `Capsule` / `Cone`), point clouds (`Points`) and curves…

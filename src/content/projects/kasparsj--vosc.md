---
repo: "kasparsj/vosc"
name: "vosc"
description: "2D/3D OSC VJing software built on openFrameworks"
readmeQualityOk: true
url: "https://github.com/kasparsj/vosc"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [49, 40]
topics: ["openframeworks", "osc", "vj", "vjing", "supercollider", "visuals"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2022-03-30T01:13:54Z"
lastCommitAt: "2026-11-27T12:59:23Z"
lastReleaseAt: "2026-11-23T16:04:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["kasparsj"]
openGraphImageUrl: "https://opengraph.githubassets.com/44f1267a1f6c42c0a315c25819cc72efb61a3532b7a355633969c6eaae19e519/kasparsj/vosc"
---

# vosc

**This is work in progress!**

vosc is a real-time 2D/3D visuals engine for OSC-driven performance and installations.

At a high level, vosc gives you:
- a render runtime (layers, textures, geometry, shaders, camera, post effects),
- an OSC command surface to control that runtime live,
- a workflow where your music/livecoding environment drives visuals over the network.

It is mainly used from SuperCollider / TidalCycles, but any OSC client can drive it.

See [docs/Home.md](https://github.com/kasparsj/vosc/blob/HEAD/docs/Home.md) for full docs, [Examples](https://github.com/kasparsj/vosc/blob/HEAD/examples/README.md) for runnable sketches, and the [changelog](https://github.com/kasparsj/vosc/blob/HEAD/CHANGELOG.md) for recent changes.

## macOS quick start

1. Download the signed macOS disk image, `vosc-macos-universal.dmg`, from **Assets** on [GitHub Releases](https://github.com/kasparsj/vosc/releases/tag/v0.2.1).
2. Open the disk image and launch `vosc.app`. You can also drag `vosc.app` into Applications and open it from there.
3. Press **O**, then choose **Browse → Examples → Organic Trails → Load Example** to start rendering Organic Trails.

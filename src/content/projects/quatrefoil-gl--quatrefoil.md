---
repo: "Quatrefoil-GL/quatrefoil"
name: "quatrefoil"
description: "a three.js wrapper in calcit-js"
originalDescription: "a three.js wrapper in calcit-js"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Quatrefoil-GL/quatrefoil"
homepage: "http://r.tiye.me/Quatrefoil-GL/quatrefoil/"
language: "Cirru"
languages: ["Cirru"]
languagePcts: [98]
topics: ["threejs"]
stars: 5
forks: 1
openIssues: 9
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2021-05-03T04:29:46Z"
lastCommitAt: "2026-11-07T16:12:19Z"
lastReleaseAt: "2022-03-14T18:10:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 70
maintainers: ["tiye", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc214110dcab5bc479c32946f90323437bd2c929161c9223363131e8cb655410/Quatrefoil-GL/quatrefoil"
discussionCount: 1
---

# Quatrefoil

## 0.3.4 Candidate: Calcit 0.37.0

Paired with the official Calcit CLI / `@calcit/procs` **0.37.0**, Touch Control 0.0.39, Pointed Prompt 0.0.27, Quaternion 0.2.23, with transitive JS-FFI kept at 0.2.13. `edit format` changes the rest type to the `(& T)` form. The old record-style Fn signature of `JsArrayHost.filter` is changed to the equivalent `Fn` form, and the callback remains `JsObject Number JsArrayHost -> Bool`. Rendering and public contracts are unchanged. Consumers still on 0.35.1 keep 0.3.3.

## Historical 0.3.3 Candidate

Uses Calcit CLI / `@calcit/procs` 0.35.1, Touch Control 0.0.38, Pointed Prompt 0.0.26, Quaternion 0.2.22, and transitive dependency JS-FFI 0.2.13. When upgrading, reinstall the exact dependency graph and regenerate the JS.

`ShapePathCommand` provides nominal types and numeric parameters for move, line, quadratic curve, and cubic curve commands. The built-in Shapes and Mirror use it to construct paths, while the rendering entry points continue to accept existing anonymous path tuples.

## 0.3.2 Dependency Pairing Candidate

Impact on users: continues to pair with the official Calcit / @calcit/procs **0.34.2**, switches to the official…

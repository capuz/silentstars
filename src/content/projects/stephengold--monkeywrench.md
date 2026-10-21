---
repo: "stephengold/MonkeyWrench"
name: "MonkeyWrench"
description: "A versatile library for loading 3-D assets into JMonkeyEngine  (code has New BSD license) "
readmeQualityOk: true
url: "https://github.com/stephengold/MonkeyWrench"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["3d-models", "assimp", "importer", "jme3", "jmonkeyengine3", "jvm-library", "lwjgl3", "jmonkeyengine", "asset-loader", "open-source"]
stars: 22
forks: 0
openIssues: 2
closedIssues: 9
watchers: 7
contributors: 1
recentReleases: 2
createdAt: "2023-09-10T17:42:54Z"
lastCommitAt: "2026-10-21T21:13:50Z"
lastReleaseAt: "2026-10-19T05:50:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 60
maintainers: ["stephengold"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bb010c05512b12134af4e31a1c6b92ab0a29411b6894842dfaa3c0832e7e334/stephengold/MonkeyWrench"
---

[The MonkeyWrench Project][project] is developing
a software library to load 3-D assets into [JMonkeyEngine][jme].

It contains 2 subprojects:

1. lib: the MonkeyWrench [JVM] runtime library based on lwjgl-assimp
2. apps: related applications,
   including examples and non-automated test software

MonkeyWrench attempts to load 3-D models and animations
in a wide variety of formats, including:

+ [3D Studio Max (.3ds)][3ds]
+ [3-D Manufacturing Format (.3mf)][3mf]
+ [Blender] (.blend) *Support for this format is deprecated.*
+ [Biovision Hierarchy (.bvh)][bvh]
+ [COLLADA] (.dae)
+ [Autodesk Filmbox (.fbx)][fbx] *best for versions 7.1 through 7.4; other versions are unsupported*
+ [Khronos glTF (.glb and .gltf)][gltf], including Draco, version 1.0, and version 2.0
+ [LightWave Model (.lwo)][lwo]
+ [Ogre mesh (.mesh.xml)][ogre] (but not .scene files)
+ [Wavefront (.obj)][obj]
+ [Polygon File Format (.ply)][ply], both ASCII and binary
+ [Stereolithography (.stl)][stl], both ASCII and binary

Complete source code (in [Java]) is provided under
[a 3-clause BSD license][license].

## Contents of this document

+ [How to add MonkeyWrench to an existing project](#add)
  + Gradle-built…

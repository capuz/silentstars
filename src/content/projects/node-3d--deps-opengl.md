---
repo: "node-3d/deps-opengl"
name: "deps-opengl"
description: "Binaries and headers for OpenGL-dependent compilation"
url: "https://github.com/node-3d/deps-opengl"
homepage: "https://github.com/node-3d/node-3d"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
topics: ["glew", "opengl", "glfw3", "binary", "node-3d", "lib", "headers", "native", "gl"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-01-23T17:39:12Z"
lastCommitAt: "2026-07-04T19:18:39Z"
lastReleaseAt: "2021-04-25T13:11:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/79829992/90ed8032-3e96-45cd-82c4-62bd5fb130ff"
---

# OpenGL binaries

This is a part of [Node3D](https://github.com/node-3d) project.

```console
npm install @node-3d/deps-opengl
```

This dependency package is distributing **OpenGL**, **GLFW3** and **GLEW**
binaries through **NPM** for **Node.js** addons.

* Platforms (x64): Windows x64, Linux x64, Linux ARM, MacOS ARM.
* Libraries: GLEW 2.2, GLFW 3.4, OpenGL.

## Usage

### JS Interface

See in [@node-3d/glfw](https://github.com/node-3d/glfw/blob/master/ts/index.ts) Node.js addon.

See in [@node-3d/webgl](https://github.com/node-3d/webgl/blob/master/ts/index.ts) Node.js addon.

### binding.gyp

See in [@node-3d/glfw](https://github.com/node-3d/glfw/tree/master/src/binding.gyp) Node.js addon.

See in [@node-3d/webgl](https://github.com/node-3d/webgl/tree/master/src/binding.gyp) Node.js addon.

### addon.cpp

See in [@node-3d/glfw](https://github.com/node-3d/glfw/blob/master/src/cpp/glfw-common.hpp) Node.js addon.

See in [@node-3d/webgl](https://github.com/node-3d/webgl/blob/master/src/cpp/webgl.hpp) Node.js addon.

Refer to [GLFW](https://www.glfw.org/documentation.html) and
[GLEW](http://glew.sourceforge.net/basic.html) official docs.

## Legal notice

### GLFW…

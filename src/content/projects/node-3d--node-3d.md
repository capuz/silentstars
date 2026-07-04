---
repo: "node-3d/node-3d"
name: "node-3d"
description: "Guidlines and common information"
url: "https://github.com/node-3d/node-3d"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["opengl", "nodejs", "3d", "3d-graphics", "2d", "2d-graphics", "node-3d", "crossplatform", "gl", "js"]
stars: 63
forks: 3
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-04-25T05:43:36Z"
lastCommitAt: "2026-07-04T19:20:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 30
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/130956301/1e5594ad-067b-4524-8143-d54f36e91660"
---

# Node3D

```console
npm i -s @node-3d/core
```

## Desktop 3D applications with **Node.js** and **OpenGL**.

* **WebGL**-like interface. Real OpenGL though.
* **Three.js** compatible environment.
* Use node modules and compiled addons: CUDA, OpenCL, etc.
* Window control. Multiwindow applications.
* Read/write files.
* Crossplatform: Linux x64, Linux ARM, MacOS x64, Windows x64.

Compatibility with **three.js** allows porting the existing JS code.
The real OpenGL backend is used (not ANGLE). So it is possible to use the GL resource IDs
to setup interoperation with CUDA or OpenCL. This is the most important feature of this
project and why it was created in the first place.

It is quite possible to create a fully-features apps and games using this framework.
For example, see
[Space Simulation Toolkit](https://store.steampowered.com/app/1196080/Space_Simulation_Toolkit/).

## Quick start

1. Setup the project directory:

	```console
	mkdir my-project
	cd my-project
	npm init -y
	npm i -s @node-3d/core three
	touch index.js
	```

1. Paste the code and see if it works:

	```javascript
	// Init Node3D environment
	const three = require('three');
	const { init, addThreeHelpers } =…

---
repo: "node-3d/glfw"
name: "glfw"
description: "GLFW for Node.js"
url: "https://github.com/node-3d/glfw"
homepage: "https://github.com/node-3d/node-3d"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [51, 48]
topics: ["addon", "glfw", "opengl", "gl", "graphics", "window", "bindings", "native", "node-3d", "cpp"]
stars: 62
forks: 14
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2017-01-22T16:50:38Z"
lastCommitAt: "2026-07-04T19:18:40Z"
lastReleaseAt: "2020-01-03T12:00:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 35
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/79730638/ad71908e-22d7-4b39-ae34-3153e5b78763"
---

# GLFW for Node.js

This is a part of [Node3D](https://github.com/node-3d) project.

```console
npm install @node-3d/glfw
```

**Node.js** addon with **GLFW3** bindings.

* **GLFW** version **3.4.0** backend.
* Exposes low-level **GLFW** interface.
* Multiple windows for a single **Node.js** process.
* Able to switch to fullscreen and back.
* Has `Window` class, simplifying low-level interactions.
* Has `Document` class, capable of tricking other libs, as if we are in a browser.

The package has named exports only. Use `glfw` for the raw native bindings,
and import `Window` or `Document` directly for the higher-level classes.

```ts
import { glfw, Window } from '@node-3d/glfw';

const wnd = new Window({ title: 'GLFW Test', vsync: true });

wnd.loop(() => {
	if (wnd.shouldClose || wnd.getKey(glfw.KEY_ESCAPE)) {
		process.exit(0);
		return;
	}
	
	glfw.testScene(wnd.width, wnd.height);
});
```

> Note: this **addon uses N-API**, and therefore is ABI-compatible across different
Node.js versions. Addon binaries are precompiled and **there is no compilation**
step during the `npm install` command.

## GLFW

This is a low-level interface, where most of the stuff is directly reflecting…

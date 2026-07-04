---
repo: "node-3d/webgl"
name: "webgl"
description: "OpenGL/WebGL for Node.js"
url: "https://github.com/node-3d/webgl"
homepage: "https://github.com/node-3d/node-3d"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [58, 41]
topics: ["addon", "webgl", "opengl", "gl", "graphics", "bindings", "node-3d", "native", "javascript", "cpp"]
stars: 99
forks: 13
openIssues: 0
closedIssues: 13
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2017-01-22T19:18:33Z"
lastCommitAt: "2026-07-04T19:18:42Z"
lastReleaseAt: "2020-08-29T20:31:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 31
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/79739286/192741e9-3642-43eb-9476-4e71da9eb03f"
---

# WebGL for Node.js

This is a part of [Node3D](https://github.com/node-3d) project.

```console
npm install @node-3d/webgl
```

> This addon is ABI-compatible across Node.js versions. **There is no compilation** during `npm install`.

**TL;DR**: For a quick start, use [@node-3d/core](https://github.com/node-3d/core)
or look at [Examples](/examples).

```js
import { webgl } from '@node-3d/webgl';
```

Here `webgl` contains the **WebGL/OpenGL** API, like a `WebGLRenderingContext` instance would.
* See [WebGLRenderingContext docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
    for reference.
* There are also non-WebGL methods exported in case you want to use advanced OpenGL functions.
* The addon **does not provide** a window control system, you can use
    [@node-3d/glfw](https://github.com/node-3d/glfw) (or anything else!) to create a window.

## API

### `webgl`

The main export is a singleton object shaped like a WebGL rendering context.
It includes:

* WebGL 1 style constants and functions.
* WebGL 2 functions where supported by the native addon.
* Selected OpenGL functions that are useful in Node3D integrations.
* Browser-style constructors:…

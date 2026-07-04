---
repo: "node-3d/image"
name: "image"
description: "Native Image loader for Node.js"
url: "https://github.com/node-3d/image"
homepage: "https://github.com/node-3d/node-3d"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [69, 28]
topics: ["node-addon", "image", "freeimage", "decoder", "graphics", "native", "addon", "napi", "n-api", "node-3d"]
stars: 7
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-01-16T20:10:33Z"
lastCommitAt: "2026-07-04T19:18:40Z"
lastReleaseAt: "2021-05-07T20:32:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/117735864/2aeeeeab-f798-4655-a3de-8f1cd91116fb"
---

# Image for Node.js

This is a part of [Node3D](https://github.com/node-3d) project.

```console
npm install @node-3d/image
```

Using [FreeImage](http://freeimage.sourceforge.net/), this addon loads images from:
* Local file.
* Data URI.
* Http(s) URL.
* Node.js Blob URL.
* Raw RGBA pixel data.

The Image class is similar to
[HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image),
and can be used as a replacement in non-DOM environments.

Additional features:
* `save` - saves the image to a local file.
* `drawImage` - is similar to
	[drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage).

> Note: this **addon uses N-API**, and therefore is ABI-compatible across different
Node.js versions. Addon binaries are precompiled and **there is no compilation**
step during the `npm install` command.

## Image

```js
import { Image } from '@node-3d/image';
const image = new Image('images/test.png'); // relative to CWD
image.on('load', () => { console.log('data', image.width, image.height, image.data); });
```

For loaded images, `image.data` will contain a `Buffer` of `4 * width * height` bytes.
You can directly…

---
repo: "node-3d/webaudio"
name: "webaudio"
description: "WebAudio for Node.js"
url: "https://github.com/node-3d/webaudio"
homepage: "https://github.com/node-3d/node-3d"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [80, 20]
topics: ["webaudio", "node-addon", "node-3d", "sound", "audio", "nodejs", "api", "crossplatform", "web-audio", "web-audio-api"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2018-02-26T19:45:46Z"
lastCommitAt: "2026-07-04T19:18:42Z"
lastReleaseAt: "2025-03-13T08:20:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 42
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/123021576/d8779dbe-56e8-4a7d-81fc-cd507b1acf9b"
---

# WebAudio for Node.js

This is a part of [Node3D](https://github.com/node-3d) project.

```console
npm install @node-3d/webaudio
```

> This addon is ABI-compatible across Node.js versions. **There is no compilation** during `npm install`.

**Node.js** addon implementing the
[Web Audio Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

Import any class you like from the module and then follow the
[doc](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API):

```js
import { AudioContext } from '@node-3d/webaudio'; // usually this is enough
```

**This module is WORK IN PROGRESS.**
Some features are missing for good.

Currently exported classes:

* `AudioBuffer`
* `AudioContext`
* `AudioParam`
* `AnalyserNode`
* `BiquadFilterNode`
* `ConvolverNode`
* `GainNode`
* `PannerNode`
* `AudioBufferSourceNode`
* `OscillatorNode`
* `AudioScheduledSourceNode`

In examples directory, currently working examples are prepended with `_`.

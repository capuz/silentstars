---
repo: "Ezviz-OpenBiz/EZUIKit-JavaScript-npm"
name: "EZUIKit-JavaScript-npm"
description: "Lightweight app npm version, lowers integration difficulty, adapts to custom UI, adapts to mainstream frameworks"
originalDescription: "轻应用npm版本，降低接入难度，适配自定义UI，适配主流框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ezviz-OpenBiz/EZUIKit-JavaScript-npm"
homepage: "https://openstatic.ys7.com/ezuikit_troubleshoots/index.html?version=8.2.6"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["ezviz", "ezopen", "aac", "avc", "g711", "h265", "hevc", "video", "hikvision", "js-sdk"]
stars: 321
forks: 92
openIssues: 165
closedIssues: 116
watchers: 14
contributors: 13
recentReleases: 4
createdAt: "2020-05-22T11:51:59Z"
lastCommitAt: "2026-11-04T13:04:50Z"
lastReleaseAt: "2026-08-24T12:36:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 41
maintainers: ["freeshineit", "wangwenwen130", "RaconXXY"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c2d5760ee147da0d8dbb79ec0ee78c95340cf13e64c14867e73a3d72eb2ffa1/Ezviz-OpenBiz/EZUIKit-JavaScript-npm"
---

# [EZUIKit-JavaScript-npm][ezuikit-js]

   

> Lightweight app npm version, lowers integration difficulty, adapts to custom UI, adapts to mainstream frameworks

> Low-latency preview, cloud storage playback, SD card playback

> Rich API features, such as: playback control, audio control, video snapshot, real-time retrieval of video OSDTime, video recording, device intercom, digital zoom, fullscreen, etc.

### Get ezuikit-js

```bash
# npm
npm install ezuikit-js

# yarn

yarn add ezuikit-js

# pnpm

pnpm add ezuikit-js
```

### Import ezuikit-js

```js
// >= v8.1.2  ESM
import { EZUIKitPlayer } from "ezuikit-js";

// < v8.1.2
import EZUIKit from "ezuikit-js";
```

#### ESM not supported (not support ESM)

```js
// >= v8.1.2  CommonJS
import { EZUIKitPlayer } from "ezuikit-js/index.js";

// < v8.1.2 CommonJS
import EZUIKit from "ezuikit-js/index.js";
```

#### If you use native methods, you can include it via a script tag

```html

<script src="./ezuikit.js"></script>
```

### Getting started - Initialization

> Basic usage

Create DOM

```html
<div id="video-container"></div>
```

## Player initialization

### Live streaming

```js
import { EZUIKitPlayer } from "ezuikit-js";
const…

---
repo: "kaltura/playkit-js-hls"
name: "playkit-js-hls"
description: " HLS.JS Adapter for the PlayKit JS Player"
readmeQualityOk: true
url: "https://github.com/kaltura/playkit-js-hls"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 46]
topics: ["hls", "playkit-js-player", "hlsjs", "es6", "kaltura", "flow-typed", "playkit", "playkit-js"]
stars: 7
forks: 7
openIssues: 0
closedIssues: 0
watchers: 14
contributors: 38
recentReleases: 0
createdAt: "2017-03-05T13:23:28Z"
lastCommitAt: "2026-07-30T06:07:17Z"
lastReleaseAt: "2017-11-16T09:31:56Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 75
undervaluedScore: 52
maintainers: ["Tzipi-kaltura", "MosheMaorKaltura", "inbalvasserman"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c014b1f3378d852c2772664d3f984d518af56c689588ede790b3ea0f99c4f16/kaltura/playkit-js-hls"
---

# PlayKit JS HLS - [HLS.JS] Adapter for the [PlayKit JS Player]

PlayKit JS HLS adapter integrates [HLS.JS] with the [PlayKit JS Player].

PlayKit JS HLS is written in [ECMAScript6], statically analysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[hls.js]: https://github.com/video-dev/hls.js
[hls.js api docs]: https://github.com/video-dev/hls.js/blob/master/docs/API.md
[flow]: https://flow.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io

## Getting Started

### Prerequisites

The adapter requires [PlayKit JS Player] to be loaded first.

The adapter uses the [HLS.JS] javascript library.

[playkit js player]: https://github.com/kaltura/playkit-js

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/kaltura/playkit-js-hls.git
cd playkit-js-hls
yarn install
```

### Building

Then, build the player

```javascript
yarn run build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript"…

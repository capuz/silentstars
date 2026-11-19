---
repo: "swf2es/swf2es"
name: "swf2es"
description: "Play SWF files in the browser and compile ActionScript bytecode to modern JavaScript, JIT or AOT with the same output"
readmeQualityOk: true
url: "https://github.com/swf2es/swf2es"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 13
forks: 1
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-27T19:28:01Z"
lastCommitAt: "2026-11-19T05:00:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["33TU"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1391329633/96493c20-0712-46bf-8a27-68a9ed2f7423"
---

# swf2es

swf2es plays SWF files in the browser. It compiles their ActionScript,
AS3 and AS1/2 alike, to JavaScript, so the browser's own JIT runs it, and
draws them with a WebGL 2 renderer of its own. Fills, lines and BitmapData
filters are computed in WebAssembly: Zig, with libtess2 for the fills.

**Try it** at https://swf2es.github.io/swf2es/play/: open or drop a SWF (it
is read in your browser, never uploaded), or play a demo. The site has the
[guide](https://swf2es.github.io/swf2es/docs/) too. For Stage3D SWFs,
select **Stage3D** in the player controls.

**On your desktop**, the app plays a local SWF or one by its URL, and AIR
applications from their descriptor, with Stage3D on:

```sh
npx @swf2es/desktop movie.swf
npx @swf2es/desktop https://example.com/movie.swf
npx @swf2es/desktop app.xml
```

It needs Node 22.18 or later; the first run downloads Electron, about
100 MB. Open, drop or reopen recent SWFs from its window; its
[README](https://github.com/swf2es/swf2es/blob/HEAD/apps/desktop/README.md) has the rest.

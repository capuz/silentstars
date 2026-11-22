---
repo: "wardiclabs/wardic"
name: "wardic"
description: "An animation engine with Motion's API, built on Effect."
readmeQualityOk: true
url: "https://github.com/wardiclabs/wardic"
homepage: "https://wardic.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["animation", "effect-ts", "gestures", "layout-animation", "motion", "solid", "solidjs", "spring"]
stars: 11
forks: 0
openIssues: 18
closedIssues: 321
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-23T20:06:00Z"
lastCommitAt: "2026-11-22T11:45:02Z"
lastReleaseAt: "2026-11-06T10:51:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 60
maintainers: ["KookiKodes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/291e68d3983bc56a0aaaf93ed501a4486e5992141bfcc20418bd86a24bc34333/wardiclabs/wardic"
discussionCount: 0
---

An animation library with the API of [Motion](https://motion.dev) for React, built on [Effect](https://effect.website), for [Solid](https://www.solidjs.com) and [Foldkit](https://www.npmjs.com/package/foldkit).

Wardic's elements take Motion's props: `initial`, `animate`, `exit` and `transition`; variants that pass down the tree; hover, press, focus, drag and pan; layout and shared-element animations (`layout`, `layoutId`); presence; and values that follow the scroll or the pointer. On a server-rendered page, mount animations play before the JavaScript has loaded, and the client takes them over mid-flight. On Solid, Effect stays out of your way: you never write Effect to use it.

## Install

```sh
npm install @wardic/solid @wardic/dom effect
```

`solid-js` and `@solidjs/web` are peers: Solid 2. On Solid 1, see below.

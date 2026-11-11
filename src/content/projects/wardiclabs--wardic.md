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
stars: 7
forks: 0
openIssues: 20
closedIssues: 265
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-23T20:06:00Z"
lastCommitAt: "2026-11-11T10:23:23Z"
lastReleaseAt: "2026-11-06T10:51:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 64
maintainers: ["KookiKodes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6efa1ece5b1a487adb4efb14c7cbb6e68817dacf254cbc59cb451591a1e80cba/wardiclabs/wardic"
discussionCount: 0
---

Animation for [Solid](https://www.solidjs.com), with the API of [Motion](https://motion.dev) for React.

Wardic's elements take Motion's props: `initial`, `animate`, `exit` and `transition`; variants that pass down the tree; hover, press, focus, drag and pan; layout and shared-element animations (`layout`, `layoutId`); presence; and values that follow the scroll or the pointer. On a server-rendered page, mount animations play before the JavaScript has loaded, and the client takes them over mid-flight. It runs on [Effect](https://effect.website), which it keeps out of your way: you never write Effect to use it.

## Install

```sh
npm install @wardic/solid @wardic/dom effect
```

`solid-js` is a peer: Solid 1 (`1.9`), or Solid 2's release candidate.

## Quick start

```tsx
import { DomLive } from "@wardic/dom"
import { domAnimation, w, WardicProvider } from "@wardic/solid"
import { render } from "solid-js/web"

function App() {
  return (
    <WardicProvider env={DomLive} features={[domAnimation]}>
      <w.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }}>
        Hello
      </w.div>
    </WardicProvider>
  )
}

render(() => <App />,…

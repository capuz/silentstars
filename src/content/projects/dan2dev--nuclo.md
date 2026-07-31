---
repo: "dan2dev/nuclo"
name: "nuclo"
description: "A lightweight, type-safe JS/TS DOM framework with reactive bindings and explicit updates. Plain mutable state, real DOM, no proxies, signals, or virtual DOM."
readmeQualityOk: true
url: "https://github.com/dan2dev/nuclo"
homepage: "https://nuclo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-08T21:46:45Z"
lastCommitAt: "2026-07-31T06:29:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 53
maintainers: ["dan2dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/00056c642c779026726da50824ee7c592982da5972499f92a9da212ce75114d7/dan2dev/nuclo"
---

# nuclo

**A lightweight, type-safe JS/TS DOM framework with plain mutable state and explicit updates.**

Create elements with plain functions, and pass a function anywhere a value depends on state — that function is registered so Nuclo can evaluate it again later. Change regular JavaScript values directly, then call `update()` when you want Nuclo to synchronize the DOM. No virtual DOM, no proxies, no signals, and no automatic state tracking.

Nuclo's workflow has three parts:

1. **Create the UI with builder functions** — text, attributes, conditions, and lists can be passed a function whenever they depend on state; this registers the function as a state-dependent value.
2. **Mutate regular JavaScript state** — no signals, no proxies, no wrapped values. `count++` is just `count++`. Mutating state does not, by itself, touch the DOM.
3. **Call `update()`** — this explicitly starts synchronization: Nuclo reevaluates the state-dependent values registered in step 1 and applies changed results to the real DOM.

```ts
import 'nuclo';

let count = 0;

const counter = div(
  h1(() => `Count: ${count}`),
  button('Increment', on('click', () => {
    count++;
    update();
  }))
);…

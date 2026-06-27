---
repo: "WorldMaker/butterfloat"
name: "butterfloat"
description: "The greatest view engine for the modern web"
url: "https://github.com/WorldMaker/butterfloat"
homepage: "https://worldmaker.net/butterfloat/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["butterfloat"]
stars: 16
forks: 1
openIssues: 16
closedIssues: 27
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-10-20T18:03:48Z"
lastCommitAt: "2026-06-27T06:23:32Z"
lastReleaseAt: "2023-12-01T22:05:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 79
undervaluedScore: 55
maintainers: ["WorldMaker"]
openGraphImageUrl: "https://opengraph.githubassets.com/55a9e34d559b1fd507aeb39793a98c4a6f48f16bdde071cb55c4dd040f2691aa/WorldMaker/butterfloat"
---

# Butterfloat

[Butterfloat](https://worldmaker.net/butterfloat/) is a Knockout-inspired
view engine using modern ESM via Typescript and pure RxJS observables.

- [Knockout-inspired]
- [TSX, but not a Virtual DOM][tsx]
- [Pure RxJS observables][observables]
- Runtime dependency light: just [RxJS](https://rxjs.dev)
- Compile-time dependency light: Typescript encouraged

> "The greatest view engine the web has ever seen."

[Getting Started][started] starts a gentle tour of Butterfloat features.

## A Usage Example

A complex component with embedded state may look something like this:

```tsx
import { ComponentContext, ObservableEvent, butterfly, jsx } from 'butterfloat'
import { map } from 'rxjs'

interface GardenProps {}

interface GardenEvents {
  rake: ObservableEvent<MouseEvent>
}

function Garden(
  props: GardenProps,
  { bindEffect, events }: ComponentContext<GardenEvents>,
) {
  const [money, setMoney] = butterfly(1)
  const [labor, setLabor] = butterfly(0)

  const moneyPercent = money.pipe(
    map((money) => money.toLocaleString(undefined, { style: 'percent ' })),
  )

  const laborPercent = labor.pipe(
    map((labor) => labor.toLocaleString(undefined, { style: 'percent'…

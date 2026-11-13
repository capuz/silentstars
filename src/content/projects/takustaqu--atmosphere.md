---
repo: "takustaqu/atmosphere"
name: "atmosphere"
description: "A WebGL renderer that reproduces the sky from time and weather: one WebGL1 fragment shader, no dependencies, no DOM or framework coupling."
readmeQualityOk: true
url: "https://github.com/takustaqu/atmosphere"
homepage: "https://www.npmjs.com/package/@takustaqu/atmosphere"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["clouds", "procedural", "shader", "sky", "skybox", "typescript", "weather", "webgl"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-29T02:48:55Z"
lastCommitAt: "2026-11-13T18:26:25Z"
lastReleaseAt: "2026-10-22T05:26:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 61
maintainers: ["takustaqu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cecbb8aec3feaf048e7260d379db84537e89cb68afc78683b1dfb780c1a13c1/takustaqu/atmosphere"
---

English | [日本語](https://github.com/takustaqu/atmosphere/blob/HEAD/README.ja.md)

# Atmosphere - a sky simulator

**Pass in a time and a weather, and it roughly reproduces that sky.**
One WebGL fragment shader, no dependencies, no DOM or framework dependency.
See the samples in `examples/` to see it in action.

```ts
import { Atmosphere } from '@takustaqu/atmosphere';

const sky = new Atmosphere(canvas, {
  time: new Date(),
  location: { latitude: 35.68, longitude: 139.77 },
  weather: { cloudCover: 0.95, precipitation: 12, windSpeed: 18 },
});
```

This keeps drawing Tokyo's sky at that day and hour, with 95% cloud cover,
12mm/h of rain and 18m/s of wind. Calling `sky.set({ ... })` transitions
smoothly to a new weather over a few seconds.

It started as a side feature added while personally porting a certain game.
It isn't a physical weather simulation, so it isn't accurate — but it should
be an easy way to get a sky that keeps changing procedurally.

## What it draws

- **Time of day** — the sky's gradient, the sun (an outline-less blown-out glare,
  or smaller and bare — see [The sun](#the-sun)),
  sunset/magic-hour mauve, city lights at night
- **The night sky** — light…

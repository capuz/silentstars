---
repo: "JohannesHoppe/SolarTournament"
name: "SolarTournament"
description: "3D-Browser Game, Space-Shooter, Multiplayer, Open-Source, 100% WebGL"
readmeQualityOk: true
url: "https://github.com/JohannesHoppe/SolarTournament"
homepage: "https://solartournament.games"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["webgl", "javascript", "game", "three-js", "threejs", "typescript"]
stars: 18
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2012-03-18T09:25:04Z"
lastCommitAt: "2026-11-07T13:35:17Z"
lastReleaseAt: "2026-10-31T17:37:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 72
maintainers: ["JohannesHoppe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c319a810233698fd0098a6f7de0c1425f5eab66f6702910b8cc192fe5bd63e/JohannesHoppe/SolarTournament"
---

# SolarTournament

A browser space shooter in an asteroid field, built with [three.js](https://threejs.org/). A physically correct world: no drag, so a ship keeps every bit of speed it burns, no sound in space, no shield that stops a laser, and a careless burn ends in a rock.

What flies, collides, burns and breaks behaves the way it would out there, as long as it stays fun.

## Run

```
npm install
npm run dev        # http://127.0.0.1:5173/
npm test           # unit tests (Vitest)
npm run e2e        # browser tests (Playwright; first once: npm run e2e:install)
npm run bench      # benchmark in the test browser (see Performance); PROFILE=pixel8 as the reference phone
npm run build      # static site in dist/ (the voices and the types first; the workflow CI runs the tests before it goes live)
```

## Performance

The game draws the same world on every device, but not with the same effort: the picture's quality moves along a ladder of looks (`src/view/quality.ts`), from the picture as designed (rung 0) to the cheapest (rung 13). Each rung changes one or two knobs of the one above it, the largest saving for the least loss first. Only looks change: rocks, colliders, the round and…

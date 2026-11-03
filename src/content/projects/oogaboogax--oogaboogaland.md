---
repo: "OogaBoogaX/oogaboogaland"
name: "oogaboogaland"
description: "A banana-powered interactive island showcasing OogaBoogaX projects, contributors, and activity."
readmeQualityOk: true
url: "https://github.com/OogaBoogaX/oogaboogaland"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [74, 26]
stars: 7
forks: 27
openIssues: 34
closedIssues: 46
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-09-06T09:54:43Z"
lastCommitAt: "2026-11-03T12:46:31Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 62
maintainers: ["w-s-bitcoin", "hotpixelgroup", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ed50504f2fd5671b73fe19a288bd9b7545cb01ffd6a9b940cca47256412eee4/OogaBoogaX/oogaboogaland"
---

# Ooga Booga Land

A WebGL2 floating island whose cliff caves hold projects and an arcade of games. Voxel cavemen stand in for the contributors of [OogaBoogaX](https://github.com/OogaBoogaX); donated bananas feed them, the live Bitcoin mempool makes the weather, and the rim Oogatron shows the org's live stats. Plain JavaScript, no dependencies, read-only network connections only. Payments are a simulator for now; visitor state stays in the visitor's browser.

## Run it

Open `src/index.html` in a browser, or serve `src/` with any static server.

```sh
npm run serve   # build and stage the site, then serve it at http://127.0.0.1:8080/ (try /oogarally)
npm run watch   # the same, rebuilding on every change under src/
```

`PORT` picks another port and `HOST=0.0.0.0` opens the server to the network. Reload the tab after a rebuild.

## The island

Oogas can swing, fire their AK-47s, reload and swap magazines in the HUB, with normal animations and ammunition use but no damage. DSB's seated venue interactions also allow harmless shots and tomato throws. Damage, regeneration, knockouts, dropped gear, gorilla rage and grabbing/throwing remain game-only. **X still switches between cursor…

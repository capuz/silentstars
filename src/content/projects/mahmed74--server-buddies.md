---
repo: "mahmed74/server-buddies"
name: "server-buddies"
description: "Docs URL"
readmeQualityOk: true
url: "https://github.com/mahmed74/server-buddies"
homepage: "https://mahmed74.github.io/server-buddies/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-11-03T10:44:20Z"
lastCommitAt: "2026-11-06T11:23:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["mahmed74", "ali-saad-khan", "AbdulNafay42"]
openGraphImageUrl: "https://opengraph.githubassets.com/16e9fdbb5ba0c8c13e3bd2601be1d4d495017d843cc0b08e889fc55f3b9d8502/mahmed74/server-buddies"
---

# Server Buddies

[**Live demo & configurator**](https://mahmed74.github.io/server-buddies/) · [npm](https://www.npmjs.com/package/server-buddies)

**Interactive animated mascots for your website** — 10 SVG characters that hang, swing, follow the cursor and react to your app. Works with plain HTML, React / Next.js and as a web component. Pick a character, choose how it hangs, switch behaviours on or off, and drop it in. Zero dependencies, framework-agnostic, ~12 kB gzipped.

**Characters:** `server` · `robot` · `cat` · `ghost` · `cloud` · `database` · `router` · `shield` · `bug` · `container` · `rocket` · `octopus` · `penguin` · `terminal` · `invader` · `drone`
**Tethers:** `rope` · `chain` · `spring` · `thread` · `balloon` · `none` (perch)

> Build yours visually with the configurator: run `npm run docs` in this repo (or deploy the `docs/` folder to GitHub Pages) and copy the generated snippet.

## Install

```bash
npm i server-buddies
```

### Plain HTML (no build step)

```html
<script src="https://unpkg.com/server-buddies"></script>
<script>
  ServerBuddies.createBuddy({ character: "robot", hang: "chain", color: "#7c3aed" });
</script>
```

or declaratively:

```html…

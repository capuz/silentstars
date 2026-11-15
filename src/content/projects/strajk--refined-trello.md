---
repo: "Strajk/refined-trello"
name: "refined-trello"
description: "Simplifies the Trello interface and adds useful features"
readmeQualityOk: true
url: "https://github.com/Strajk/refined-trello"
language: "CSS"
languages: ["CSS", "JavaScript"]
languagePcts: [55, 45]
stars: 6
forks: 0
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-08-08T20:54:43Z"
lastCommitAt: "2026-11-15T11:23:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 73
undervaluedScore: 26
maintainers: ["Strajk"]
openGraphImageUrl: "https://opengraph.githubassets.com/0803e5160381dede194cb28f17b4acc5695036502b51693ff5679a5e4ec685e3/Strajk/refined-trello"
---

# Refined Trello

Makes Trello boards more compact and hides visual clutter. Manifest V3, CSS only:
no background worker, injected JavaScript, analytics, storage or API permissions.
Styles apply automatically on `https://trello.com/*`, including board navigation
inside Trello's single-page app.

## Build and load in Brave / Chrome

Requires Node.js 22 or newer. Packaging also requires the `zip` command.

```sh
npm ci
npm test
npm run build
```

Open `brave://extensions` (Chrome: `chrome://extensions`), enable **Developer mode**,
choose **Load unpacked**, and select this repository's `dst` directory. Reload open
Trello tabs. Disable any older copy of Refined Trello to avoid overlapping styles.

`npm run develop` rebuilds when source files change. After a rebuild, click
**Reload** on the extension's tile and reload the Trello tab. There is no injected
development reloader or development-only permission.

## Behavior

- Smaller board-card titles, padding and list spacing.
- Hidden card-front badges, cover images and stickers where Trello exposes the
  corresponding semantic hooks.
- Quick-edit buttons appear on hover or keyboard focus; touch controls stay available.
- Full-cover…

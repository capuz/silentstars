---
repo: "hsmusic/hsmusic-wiki"
name: "hsmusic-wiki"
description: "The Homestuck Music Wiki — static wiki software cataloguing collaborative creation"
readmeQualityOk: true
url: "https://github.com/hsmusic/hsmusic-wiki"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 5
forks: 9
openIssues: 143
closedIssues: 243
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2022-06-04T02:04:02Z"
lastCommitAt: "2026-10-31T09:53:05Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 86
maintainers: ["towerofnix"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfdd98ee341ad4cab723202899e9ab65c8dc2af3368dd74efb64da7a6e7fd37/hsmusic/hsmusic-wiki"
---

# HSMusic

HSMusic, short for the *Homestuck Music Wiki*, is a revitalization and reimagining of [earlier][fandom] [projects][nsnd] archiving and celebrating the expansive history of Homestuck official and fan music. Roughly periodic releases of the website are released at [hsmusic.wiki][hsmusic]; all development occurs in a few different public Git repositories:

- hsmusic-wiki ([GitHub][github-code], [Notabug][notabug-code], [cgit][cgit-code]): all the code used to run hsmusic on your own computer, and the canonical reference for all of the wiki's software behavior
- hsmusic-data ([GitHub][github-data], [Notabug][notabug-data], [cgit][cgit-data]): all the data representing the contents of the wiki; collaborative additions and improvements to wiki content all end up here
- hsmusic-media ([GitHub][github-media]): media files referenced by content in the data repository; includes all album assets, commentary images, additional files, etc
- hsmusic-lang ([GitHub][github-lang]): localization files for presenting the wiki's user interface in different languages

## Quick Start

Install dependencies:

- [Node.js](https://nodejs.org/en/) - we recommend using…

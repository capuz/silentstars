---
repo: "nipafx/slides"
name: "slides"
description: "Slides for various talks I give"
readmeQualityOk: true
url: "https://github.com/nipafx/slides"
homepage: "https://slides.nipafx.dev"
language: "CSS"
languages: ["CSS"]
languagePcts: [71]
stars: 35
forks: 18
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2017-02-05T15:26:47Z"
lastCommitAt: "2026-10-30T08:33:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 50
maintainers: ["nipafx"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/81001616/605c8000-062a-11eb-8eb5-d6e42e72eb18"
---

# Slides

Slides for various talks I give and have given.
They are written with the awesome [Asciidoctor](http://asciidoctor.org/) and visualized with [reveal.js](http://asciidoctor.org/) via [asciidoctor-reveal.js](https://github.com/asciidoctor/asciidoctor-reveal.js/).
Thanks to GitHub Pages you can see them on [slides.nipafx.dev](https://slides.nipafx.dev).

* [setup](#setup)
* [editing](#editing)
	* [slides](#-slides)
	* [themes](#-themes)
* [repository structure](#repository-structure)

## Setup

Execute these commands in the repository's root directory (see [_Repository Structure_](#repository-structure) for details):

```sh
# for folder `_reveal.js`
git submodule init
git submodule update
# for folder `_slides`
git worktree add _slides gh-pages

# select NodeJS version
# (if you don't use nvm, find the NodeJS version in the file `.nvmrc`)
nvm use
# install asciidoctor-reveal.js and other dependencies
npm install
```

## Editing...

### ... slides

* execute `npm run generate` to generate all slides decks
* execute `npm run observe` to automatically regenerate a deck whenever a file changes
* use your favorite way to launch a web server in the folder `_slides` to see the…

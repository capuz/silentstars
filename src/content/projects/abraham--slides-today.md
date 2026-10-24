---
repo: "abraham/slides-today"
name: "slides-today"
description: "Slides.today is a site dedicated to the presentations @abraham and @pearlbea give at conferences and meetups."
readmeQualityOk: true
url: "https://github.com/abraham/slides-today"
homepage: "https://slides.today"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["slide", "deck", "presentations"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 88
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2017-08-22T18:48:17Z"
lastCommitAt: "2026-10-24T08:09:02Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 77
maintainers: ["abraham", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/320867a49a26b122d0f8c582f125c31b1c36ffa3af790e18aa6506f7f49c2072/abraham/slides-today"
fundingLinks: ["GITHUB:https://github.com/abraham"]
---

# Slides.today

Slides.today is a site dedicated to the presentations [@abraham](https://github.com/abraham) and [@pearlbea](https://github.com/pearlbea) give at conferences and meetups.

## Install

Checkout the source with `git checkout git@github.com:abraham/slides-today.git` and run `npm install` from with the `slides-today` directory.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the production project. The build artifacts will be stored in the `dist/slides-today/` directory.

The site is static and served by Firebase Hosting. The build prerenders the home page and every deck page to HTML, which the browser hydrates, and writes `index.csr.html` as the client-rendered shell for everything else (`/filters` and `404.html`).

The legacy deck id redirects in `firebase.json` come from the deck data. Run `npm run sync:redirects` after…

---
repo: "javierarce/javier.computer"
name: "javier.computer"
description: "Personal website."
readmeQualityOk: true
url: "https://github.com/javierarce/javier.computer"
homepage: "https://javier.computer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [60]
stars: 14
forks: 2
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-02-21T22:33:52Z"
lastCommitAt: "2026-11-22T12:36:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 71
maintainers: ["javierarce"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fb4beaaf20fde02341ae99ab44b054169aa04b2d0f758533c349765ffef3b6e/javierarce/javier.computer"
postedAt: "2026-11-22T12:01:23.931Z"
---

Hi, stranger! Welcome to my little computer on the net!

This website contains a wiki, several blog posts, a collection of silly songs,
a pun, a hidden passage to another dimension, a list of dog names, a list of
names that are not dog names, references to my early memories, several photos
of myself eating ice cream, a coin, a yellow bird, a photo of your turtle, a
turtle.

I get sad when I spend my time consuming instead of making things. This website
is my attempt to spend more time thinking, documenting, and making.

---

## Development

The site runs on **Eleventy 3** and **Node.js 22.18+** (Node 24 is used in CI).
There is one npm install for the site and its authoring tools; Ruby and Bundler
are no longer needed.

```sh
npm ci
npm run dev             # http://localhost:4001, rebuilds on changes
npm run dev:drafts      # also includes _drafts
npm run build           # production site in _site
npm test                # migration and build regression tests; no external APIs
npm run lint
```

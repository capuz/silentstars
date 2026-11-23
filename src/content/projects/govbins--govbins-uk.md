---
repo: "govbins/govbins.uk"
name: "govbins.uk"
description: "Cataloguing a nation's bins"
readmeQualityOk: true
url: "https://github.com/govbins/govbins.uk"
homepage: "https://govbins.uk/"
language: "Astro"
languages: ["Astro"]
languagePcts: [70]
stars: 26
forks: 3
openIssues: 4
closedIssues: 4
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2017-04-05T12:37:10Z"
lastCommitAt: "2026-11-23T12:05:35Z"
lastReleaseAt: "2020-02-21T13:50:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 58
maintainers: ["HarryTrimble"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaf41199f2bc03bcdcd5857c4bd93250d01397f6e1e6414a4bebb2eefa1fc352/govbins/govbins.uk"
---

# #govbins

Source code for [govbins.uk](https://govbins.uk/), a catalogue of every UK council's wheelie bin.

## Running it

You need Node 22.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

`npm run build` checks the data, then builds the site into `dist/`.

## Adding a bin

1. Crop the photo to 4:3 (720 × 540 is plenty) and put it in `src/images/bins/`.
2. Add a file to `src/content/bins/`, named after the council:

```yaml
# src/content/bins/west-devon.yaml
council: west-devon
image: ../../images/bins/West-Devon.jpg
photographed: 2023-08-12
contributor:
  name: "@someone"
  url: https://www.instagram.com/someone
colour: 300-green
```

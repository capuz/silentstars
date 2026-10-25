---
repo: "thomasahle/julehjerte"
name: "julehjerte"
description: "Jule Hjerte App"
readmeQualityOk: true
url: "https://github.com/thomasahle/julehjerte"
homepage: "https://juleflet.dk"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [41, 33]
stars: 9
forks: 0
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T10:46:53Z"
lastCommitAt: "2026-10-25T21:32:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 68
maintainers: ["thomasahle"]
openGraphImageUrl: "https://opengraph.githubassets.com/070e0a605234a20583f4bbda6a92c6ea31e14c91840c8c89c2b8affdcb7eb779/thomasahle/julehjerte"
---

# Juleflet Designer

## Adding a heart

One SVG in `static/hearts/` (with its Danish and English names and descriptions written into it)
and one id in `hearts.json` in the project root, then
`npm run generate:heart-data` — the steps are in [docs/ADDING-A-HEART.md](https://github.com/thomasahle/julehjerte/blob/HEAD/docs/ADDING-A-HEART.md).

## Similar websites

- [Majbrit og Erik Ginnerskov](http://ginnerskov.dk/hjerter.php) - Anderledes flettede hjerter
- [Alt Om Hobby](https://www.altomhobby.dk/e-bog/Julehjerte-skabeloner.pdf) - Skabeloner tilflettede julehjerter
- [Gerth Stølting Brodal](https://cs.au.dk/~gerth/julehjerter/) - Flettede Julehjerter med bogstaver
- [Papermatrix](https://papermatrix.wordpress.com/links/) - Links til mange andre hjerter
- [Johan's Hjerter](https://johansjulehjerter.dk/) - wonderfully creative cuts

## Testing and release checks

`npm test` runs application tests and the complete inverse suite, including timed
quality benchmarks. To run the inverse release gates separately, use
`npm run test:inverse:ci`; `npm run benchmark:inverse:ci` runs the advisory cases.
The heart generator's regressions that build whole hearts take seconds each and
are marked…

---
repo: "thomasahle/julehjerte"
name: "julehjerte"
description: "Jule Hjerte App"
readmeQualityOk: true
url: "https://github.com/thomasahle/julehjerte"
homepage: "https://juleflet.dk"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [41, 34]
stars: 9
forks: 0
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T10:46:53Z"
lastCommitAt: "2026-10-25T02:48:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 67
maintainers: ["thomasahle"]
openGraphImageUrl: "https://opengraph.githubassets.com/505d5c429e6404db5e782b305840019f42c037b41eb0756bfa0d999d778e6e6e/thomasahle/julehjerte"
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

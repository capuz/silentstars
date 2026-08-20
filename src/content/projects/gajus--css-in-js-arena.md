---
repo: "gajus/css-in-js-arena"
name: "css-in-js-arena"
description: "Comparison of modern CSS-in-JS frameworks."
readmeQualityOk: true
url: "https://github.com/gajus/css-in-js-arena"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [72, 25]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T19:10:25Z"
lastCommitAt: "2026-08-20T04:07:33Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 10
maintainers: ["gajus"]
openGraphImageUrl: "https://opengraph.githubassets.com/07d81b9a425491c2f34a63477172567433df0952bb621001576a62a093851206/gajus/css-in-js-arena"
---

# CSS-in-JS Arena

A benchmark harness for **compile-time CSS engines**. Each engine gets its own React Router 8 app
under `apps/`, and every app renders the *same* six-page admin console — identical markup,
identical design, identical data. The apps are verified pixel-identical before anything is measured,
so the numbers isolate the engine and nothing else.

| Engine | Integration | Version |
| --- | --- | --- |
| [Bamboo CSS](https://bamboocss.com) | `@bamboocss/vite` | 1.46.0 |
| [StyleX](https://stylexjs.com) | `@stylexjs/unplugin` | 0.19.0 |
| [Panda CSS](https://panda-css.com) | `@pandacss/postcss` | 1.12.0 |

Measured 2026-08-19 at the versions above · macOS, Node 24.10, Vite 8.2.1

| Engine | Shipped bytes | Build & dev | Authoring | Correctness & maintenance | Rows won 🏆 |
| --- | --- | --- | --- | --- | --- |
| **Bamboo** 🏆 | **9** / 10 🏆 | **3** / 6 🏆 | **7** / 8 🏆 | **4** / 4 🏆 | **23** / 28 🏆 |
| StyleX | 3 / 10 | 1 / 6 | 2 / 8 | 1 / 4 | 7 / 28 |
| Panda | 2 / 10 | **3** / 6 🏆 | 6 / 8 | 1 / 4 | 12 / 28 |

Rows won per category, out of the scored rows in each. They are not equally weighted and two are
unscored, so the tally is a scanning aid rather than the…

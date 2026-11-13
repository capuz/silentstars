---
repo: "gridaco/www"
name: "www"
description: "Authored Grida web presentations, launches, and demonstrations at grida.co/index"
readmeQualityOk: true
url: "https://github.com/gridaco/www"
homepage: "https://grida.co/index"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["nextjs", "react", "grida", "marketing", "tailwindcss", "turborepo", "typescript", "website"]
stars: 31
forks: 11
openIssues: 0
closedIssues: 46
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2020-07-28T09:25:58Z"
lastCommitAt: "2026-11-13T11:20:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 42
maintainers: ["softmarshmallow"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ddac59deb9dd88376e71f3fb9c591bc9d2d244961778824efe29d49b063e31/gridaco/www"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/grida"]
---

# Grida WWW Index

Public, authored Grida pages: launches, presentations, demos, showcases, and other marketing experiences that need their own composition and release cycle.

The WWW Index surface owns the new `https://grida.co/index` subtree. Its source repository remains `gridaco/www`, with the application in top-level `www/`. Its scope follows the public experience rather than a particular product or industry; a page may introduce Grida FX today and a broader Grida workflow later.

## Ownership and routing

| Surface                                      | Owner                                                         | Delivery                                                                                               |
| -------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `grida.co` and existing public routes        | [gridaco/grida](https://github.com/gridaco/grida)             | The parent Next.js app receives requests and owns the ingress configuration.                           |
| New `/index` pages…

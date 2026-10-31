---
repo: "markup-carve/carve-js"
name: "carve-js"
description: "Reference TypeScript implementation of Carve - a lightweight markup language for documents and the web."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-js"
homepage: "https://markup-carve.github.io/carve/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["carve", "markup", "parser", "typescript"]
stars: 6
forks: 1
openIssues: 22
closedIssues: 1283
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-05-13T18:34:45Z"
lastCommitAt: "2026-10-31T15:58:34Z"
lastReleaseAt: "2026-09-29T23:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 100
undervaluedScore: 67
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/283766f46b93d0d03872b74e484025837bc6d10b760630a4fe5ae38e518e2aba/markup-carve/carve-js"
---

# carve-js

carve-js parses and renders Carve in TypeScript and JavaScript. It implements Carve spec 0.1.
Read the [Carve documentation](https://markup-carve.github.io/carve/) for the language.

## Install

```sh
npm install @markup-carve/carve
```

## Usage

```ts
import { parse, renderHtml, resolve } from '@markup-carve/carve'

const document = resolve(parse('# Hello /Carve/'))
const html = renderHtml(document)
```

CLI basics:

```sh
npx carve README.crv > README.html
npx carve lint README.crv
npx carve fmt README.crv
npx carve migrate --from html page.html
```

## Documentation

- [Carve documentation](https://markup-carve.github.io/carve/)
- [Playground](https://markup-carve.github.io/carve/playground)
- [Engine guides](https://github.com/markup-carve/carve-js/blob/HEAD/docs/README.md)
- [Security for untrusted input](https://github.com/markup-carve/carve-js/blob/HEAD/docs/security.md)
- [Development and contributing](https://github.com/markup-carve/carve-js/blob/HEAD/docs/development.md)

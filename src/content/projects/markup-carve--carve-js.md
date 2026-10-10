---
repo: "markup-carve/carve-js"
name: "carve-js"
description: "Reference TypeScript implementation of Carve - a lightweight markup language for documents and the web."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-js"
homepage: "https://markup-carve.github.io/carve/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["carve", "markup", "parser", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 685
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-13T18:34:45Z"
lastCommitAt: "2026-10-10T10:05:08Z"
lastReleaseAt: "2026-09-29T23:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/bafdc554d1ce49d1132ec64e28002f5690df4c50755b174587d0406a4a32f419/markup-carve/carve-js"
---

# carve-js

Reference TypeScript implementation of the
[Carve](https://github.com/markup-carve/carve) markup language. It implements
Carve spec 0.1 and passes the shared specification corpus. Try it in the
[playground](https://markup-carve.github.io/carve/playground) and review the
[versioning contract](https://markup-carve.github.io/carve/versioning).

## Install

```bash
npm install @markup-carve/carve
```

Node 20 or newer.

## Render Carve

```ts
import { carveToHtml, carveToHtmlWithReport } from '@markup-carve/carve'

carveToHtml('# Hello\n\nThis is /italic/ and *bold*.')
```

The package also exports `carveToMarkdown`, `carveToPlainText`, and
`carveToAnsi`. Lower-level `parse`, `resolve`, and `render*` functions expose
the typed AST for inspection or transformation.

```ts
import { parse, renderHtml, resolve } from '@markup-carve/carve'

const document = resolve(parse(source))
const html = renderHtml(document)
```

Checked render functions report content omitted for the selected target and
can throw before publishing a value:

```ts
const result = carveToHtmlWithReport('`x`{=latex}')
carveToHtmlWithReport('`x`{=latex}', { strictLosses: true })
```

See the [full usage…

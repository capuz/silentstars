---
repo: "unjs/impound"
name: "impound"
description: "Builder-agnostic plugin to allow restricting import patterns in certain parts of your code-base."
readmeQualityOk: true
url: "https://github.com/unjs/impound"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 88
forks: 7
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2024-08-29T11:47:44Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-03-09T15:36:37Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 47
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/unjs/impound"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# impound

> Build plugin to restrict import patterns in certain parts of your code-base.

This package is an [unplugin](https://unplugin.unjs.io/) which provides support for a wide range of bundlers.

## Usage

Install package:

```sh
# npm
npm install impound
```

```js
// rollup.config.js
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ImpoundPlugin } from 'impound'

export default {
  plugins: [
    ImpoundPlugin.rollup({
      cwd: dirname(fileURLToPath(import.meta.url)),
      include: [/src\/*/],
      patterns: [
        [/^node:.*/], // disallows all node imports
        ['@nuxt/kit', 'Importing from @nuxt/kit is not allowed in your src/ directory'], // custom error message
        [(id, importer) => id.endsWith('.server') && `Server-only import in ${importer}`] // functional pattern with importer context
      ]
    }),
  ],
}
```

### Import Tracing

Enable `trace: true` to get rich violation diagnostics with full import chains and code snippets. When enabled, errors are deferred to `buildEnd` so the complete module graph can be collected first.

```js
ImpoundPlugin.rollup({
  cwd: dirname(fileURLToPath(import.meta.url)),
  trace:…

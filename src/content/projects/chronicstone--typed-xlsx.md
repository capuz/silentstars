---
repo: "ChronicStone/typed-xlsx"
name: "typed-xlsx"
description: "Type-safe Excel (.xlsx) reports for TypeScript: typed schemas, real formulas, styles, native Excel tables and streaming exports in Node.js, Bun and Deno."
readmeQualityOk: true
url: "https://github.com/ChronicStone/typed-xlsx"
homepage: "https://typed-xlsx.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["excel", "excel-export", "type-safe", "typescript", "xlsx", "excel-reporting", "excel-table", "nodejs", "schema-driven", "streaming"]
stars: 169
forks: 6
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-12-02T00:33:08Z"
lastCommitAt: "2026-11-19T11:52:10Z"
lastReleaseAt: "2023-12-07T14:04:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 45
maintainers: ["ChronicStone", "github-actions[bot]", "posthog-eu[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05ecb8b5b1055f9c972195415a65cbf731379e78edda3cf92bf9fe3cec68eeb9/ChronicStone/typed-xlsx"
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

typed-xlsx is a TypeScript library for generating Excel files. You define the columns of a report once, typed against your row type, and it writes the .xlsx for you: header row, values, number formats and styles. If an accessor points to a field that doesn't exist on your type, it doesn't compile.

It works the same for a simple data export and for a big styled report. Formulas, totals, Excel tables and charts are all optional, you add them to the schema when you need them. For large exports there's a streaming version that takes the same schema.

It only writes .xlsx files, it doesn't read them.

```bash
npm install typed-xlsx
```

No runtime dependencies. Works on Node.js, Bun and Deno. Other runtimes (Workers, browsers) work too, but `createWorkbook()` files are written uncompressed there unless the runtime exposes Node's zlib, see [Installation](https://typed-xlsx.chronicstone.dev/getting-started/installation).

Requires Node.js 20 or later (or Bun, or Deno) and TypeScript 5.7 or later. The type declarations mention Node's `Buffer`, so install `@types/node` for type-checking.

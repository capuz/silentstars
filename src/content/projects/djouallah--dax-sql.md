---
repo: "djouallah/dax-sql"
name: "dax-sql"
description: "A DAX to SQL compiler for Tabular (TMSL) semantic models"
readmeQualityOk: true
url: "https://github.com/djouallah/dax-sql"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-09T08:41:17Z"
lastCommitAt: "2026-11-09T04:33:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["djouallah", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e05265b528ceb9dca19a212568151529cba3dabd835c61145f1c7f998afe3f6c/djouallah/dax-sql"
---

# dax-sql

A DAX to SQL compiler for Power BI / Tabular semantic models: a DAX query in, one SQL `SELECT`
out, with DAX's semantics. Tested on DuckDB against Power BI's own answers. No dependencies.

Initially written by [N.S. Devaraj](https://github.com/nsdevaraj).

```sh
npm install dax-sql
```

```js
import { createCompiler } from 'dax-sql';
import { tmslToModel } from 'dax-sql/formats/tmsl.js';   // or formats/ossie.js for Apache Ossie

const model = tmslToModel(JSON.parse(bimText));           // a model.bim
const dax = createCompiler(model, { tableSource: t => `read_parquet('data/${t.name}.parquet')` });

const { sql, columns } = dax.compile(`
  EVALUATE
  SUMMARIZECOLUMNS('Date'[Year], "Sales", [Sales Amount])
  ORDER BY 'Date'[Year]`);
// sql: one SELECT for the engine; columns: [{ name: 'Year', type: 'int', ... }, { name: 'Sales', ... }]
```

- **In:** a semantic model as dax-sql's model object ([DESIGN.md](https://github.com/djouallah/dax-sql/blob/HEAD/DESIGN.md#the-model); `formats/` reads one from a TMSL `model.bim` or an [Apache Ossie](https://github.com/apache/ossie) model whose metrics are DAX or SQL), a DAX query or a SQL `SELECT` over the model, options…

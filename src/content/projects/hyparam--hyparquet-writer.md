---
repo: "hyparam/hyparquet-writer"
name: "hyparquet-writer"
description: "Apache Parquet file writer in JavaScript"
readmeQualityOk: true
url: "https://github.com/hyparam/hyparquet-writer"
homepage: "https://hyperparam.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["hyparquet", "javascript", "parquet"]
stars: 67
forks: 16
openIssues: 6
closedIssues: 13
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-03-21T07:06:44Z"
lastCommitAt: "2026-10-29T05:49:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 52
maintainers: ["platypii", "godu", "johansteffner"]
openGraphImageUrl: "https://opengraph.githubassets.com/17c1c2cc158b0fcb6342396a0c7c650a85d7fdc6bf4ec9a2f65d95de9ea56da8/hyparam/hyparquet-writer"
---

# Hyparquet Writer

Hyparquet Writer is a JavaScript library for writing [Apache Parquet](https://parquet.apache.org) files. It is designed to be lightweight, fast and store data very efficiently. It is a companion to the [hyparquet](https://github.com/hyparam/hyparquet) library, which is a JavaScript library for reading parquet files.

> Powers **[HypAware](https://hypaware.ai/?utm_source=github-readme)**, the improvement loop for all your agents.

## Quick Start

To write a parquet file to an `ArrayBuffer` use `parquetWriteBuffer` with argument `columnData`. Each column in `columnData` should contain:

- `name`: the column name
- `data`: an array of same-type values
- `type`: the parquet schema type (optional)

```javascript
import { parquetWriteBuffer } from 'hyparquet-writer'

const arrayBuffer = parquetWriteBuffer({
  columnData: [
    { name: 'name', data: ['Alice', 'Bob', 'Charlie'], type: 'STRING' },
    { name: 'age', data: [25, 30, 35], type: 'INT32' },
  ],
})
```

Note: if `type` is not provided, the type will be guessed from the data. The supported `BasicType` are a superset of the parquet primitive types:

| Basic Type | Equivalent Schema Element |…

---
repo: "epilot-dev/sdk-js"
name: "sdk-js"
description: "javascript epilot-sdk"
readmeQualityOk: true
url: "https://github.com/epilot-dev/sdk-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["javascript", "sdk", "typescript", "nodejs"]
stars: 22
forks: 5
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 55
recentReleases: 0
createdAt: "2022-01-26T23:05:05Z"
lastCommitAt: "2026-07-06T07:07:56Z"
lastReleaseAt: "2023-09-21T15:09:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["github-actions[bot]", "anttiviljami", "balintk-epilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7d4a8a3b2176c46a41eb6e9ce56f9ab88bee108e1170ac079dbb51ff6cd103/epilot-dev/sdk-js"
---

<h1 align="center"><img alt="epilot" src="./logo.png" width="200"><br>epilot SDK</h1>

</p>

## Install

```bash
npm i @epilot/sdk axios openapi-client-axios
```

## Quick Start

```ts
import { epilot } from '@epilot/sdk'

epilot.authorize(() => '<my-bearer-token>')

const { data: entity } = await epilot.entity.createEntity(
  { slug: 'contact' },
  { first_name: 'John', last_name: 'Doe' },
)

const { data: file } = await epilot.file.getFile({ id: 'file-123' })

const { data: executions } = await epilot.workflow.getExecutions()
```

API clients are built on [openapi-client-axios](https://openapistack.co/docs/openapi-client-axios/intro/), which generates fully typed operation methods on top of regular [axios](https://axios-http.com/docs/intro) instances. All standard axios features (interceptors, defaults, config) work as expected. Each operation is forwarded to a lazy singleton — the spec is loaded and the client initialized on first use, then cached.

Full API documentation: [https://docs.epilot.io/api](https://docs.epilot.io/api)

## Packages

| Package | Description |
| ------- | ----------- |
|…

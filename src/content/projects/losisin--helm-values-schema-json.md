---
repo: "losisin/helm-values-schema-json"
name: "helm-values-schema-json"
description: "Helm plugin for generating values.schema.json from multiple values files"
readmeQualityOk: true
url: "https://github.com/losisin/helm-values-schema-json"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["helm-plugin", "json-schema", "json-schema-generator", "helm", "helm-chart", "helm-charts", "helm-plugins", "schema-json"]
stars: 214
forks: 28
openIssues: 21
closedIssues: 77
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2023-10-24T09:13:41Z"
lastCommitAt: "2026-08-14T05:16:02Z"
lastReleaseAt: "2023-12-10T15:29:57Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 93
undervaluedScore: 40
maintainers: ["losisin", "dependabot[bot]", "somaz94"]
openGraphImageUrl: "https://opengraph.githubassets.com/754b6f5584ffc904ea9fec5bb553abd68a2f92fd4bda093a39abe93927d80bf7/losisin/helm-values-schema-json"
fundingLinks: ["GITHUB:https://github.com/losisin"]
---

# helm values schema json plugin

Helm plugin for generating `values.schema.json` from single or multiple values files. Schema can be enriched by reading annotations from comments. Works only with Helm3 charts.

## Installation

```bash
helm plugin install https://github.com/losisin/helm-values-schema-json.git
```

## Upgrading

```bash
helm plugin update schema
```

See changelogs:

- [Breaking changes](https://github.com/losisin/helm-values-schema-json/blob/HEAD/docs/upgrading.md)
- [Full release notes in GitHub Releases](https://github.com/losisin/helm-values-schema-json/releases)

## Features

- Add multiple values files and merge them together - default is `values.yaml` in the current working directory
- Save output with custom name and location - default is `values.schema.json` in current working directory
- Use preferred schema draft version - default is draft 2020
- Read annotations from comments.
- Read description from [helm-docs](https://github.com/norwoodj/helm-docs)
- Bundling subschemas referenced in `$ref`

See [docs](https://github.com/losisin/helm-values-schema-json/blob/HEAD/docs/README.md) for more info or checkout example yaml files
in…

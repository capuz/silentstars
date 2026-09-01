---
repo: "velut/zod-package-json"
name: "zod-package-json"
description: "A Zod 4 schema for `package.json` metadata."
readmeQualityOk: true
url: "https://github.com/velut/zod-package-json"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["packagejson", "schema", "typescript", "zod", "npm"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-11T21:05:40Z"
lastCommitAt: "2026-09-01T08:48:00Z"
lastReleaseAt: "2025-08-26T22:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 48
maintainers: ["dependabot[bot]", "velut"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1302ce84e0c3900f81f6caa07be933c274e054a479b7411cfedc3460539fc4/velut/zod-package-json"
---

# zod-package-json

[Zod 4](https://zod.dev/) schema for the [`package.json`](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) file format.

This package exports a [Zod](https://zod.dev/packages/zod) and a [Zod mini](https://zod.dev/packages/mini) schema (and the inferred TypeScript type) named `PackageJson`
that can parse most well-formed `package.json` files.

The schema includes all currently supported properties listed in the
[npm docs](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)
as well as additional well-known properties specific to TypeScript and Node.js.

The schema also preserves unknown properties, which can be accessed
by indexing the parsed data with the desired string keys.

The schema only validates the known properties against their expected type
but does not do any additional normalization such as merging similar properties.
If necessary, that can be done by extending the schema with Zod methods such as
`.transform()` or `.refine()`.

## Useful resources

- [**Explore the API on jsDocs.io**](https://www.jsdocs.io/package/zod-package-json)
- View package contents on [**unpkg**](https://unpkg.com/zod-package-json/)
- View repository on…

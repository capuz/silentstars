---
repo: "asyncapi/parser-js"
name: "parser-js"
description: "AsyncAPI parser for Javascript (browser-compatible too)."
readmeQualityOk: true
url: "https://github.com/asyncapi/parser-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["parser", "json-schema", "hacktoberfest", "javascript", "nodejs", "get-global-node-release-workflows", "get-global-releaserc", "get-global-docs-autoupdate"]
stars: 145
forks: 149
openIssues: 12
closedIssues: 253
watchers: 6
contributors: 69
recentReleases: 0
createdAt: "2019-03-18T02:05:47Z"
lastCommitAt: "2026-10-27T12:39:56Z"
lastReleaseAt: "2020-04-28T08:47:02Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 52
maintainers: ["dependabot[bot]", "asyncapi-bot", "AayushSaini101"]
openGraphImageUrl: "https://opengraph.githubassets.com/a997a323099564440155879582cb48e46bfafc63475a8253fd212836847654c9/asyncapi/parser-js"
fundingLinks: ["GITHUB:https://github.com/asyncapi", "OPEN_COLLECTIVE:https://opencollective.com/asyncapi"]
---

This is a Monorepo managed using [Turborepo](https://turbo.build/) and contains the following packages:

1. [Parser-js](https://github.com/asyncapi/parser-js/blob/HEAD/packages/parser): Use this package to validate and parse AsyncAPI documents —either YAML or JSON— in your Node.js or browser application.
2. [Multi-Parser](https://github.com/asyncapi/parser-js/blob/HEAD/packages/multi-parser): This tool allows the parsing of AsyncAPI documents producing a desired interface based on a given Parser-API version. Useful if your tool needs to support several AsyncAPI Spec versions.
3. [OpenAPI Schema Parser](https://github.com/asyncapi/parser-js/blob/HEAD/packages/openapi-schema-parser): An AsyncAPI schema parser for OpenAPI 3.0.x schemas. Published as `@asyncapi/openapi-schema-parser` and registered via `registerSchemaParser()` (see [Custom schema parsers](#custom-schema-parsers)). Package details: [`docs/openapi-schema-parser/spec.md`](https://github.com/asyncapi/parser-js/blob/HEAD/docs/openapi-schema-parser/spec.md).

Validation is powered by [Spectral](https://github.com/stoplightio/spectral).  
Updated bundle for the browser is always attached to the GitHub Release.

 

>…

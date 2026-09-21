---
repo: "open-circle/schema-benchmarks"
name: "schema-benchmarks"
description: "Transparent comparisons between schema validation libraries"
readmeQualityOk: true
url: "https://github.com/open-circle/schema-benchmarks"
homepage: "https://schemabenchmarks.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["benchmark", "javascript", "library", "schema", "typescript"]
stars: 57
forks: 12
openIssues: 5
closedIssues: 28
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-11-09T20:11:17Z"
lastCommitAt: "2026-09-21T09:14:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 49
maintainers: ["EskiMojo14", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeb0681b4c53fa170f76d848b23db53b5bbbcbb77831653d80d1baa07f7720ce/open-circle/schema-benchmarks"
fundingLinks: ["GITHUB:https://github.com/EskiMojo14", "OPEN_COLLECTIVE:https://opencollective.com/valibot", "KO_FI:https://ko-fi.com/eskimojo"]
---

# [Schema Benchmarks](https://schemabenchmarks.dev)

A project aiming to consolidate and standardise comparisons of schema validation libraries.

## Methodologies

**Runtime** benchmarks are run in sequence, on a GitHub runner. There are different types of benchmark:

- Initialization: Creating the schema itself. This is usually a one time cost.
- Validation: Checking if a given value matches the schema.
- Parsing: Checking if a given value matches the schema, **and** returning a new value. This will include any transformations.

Some libraries only support validation, or parsing. In these cases, we categorise them accordingly.

Each library is benchmarked against a set of data, both valid and invalid.

**Download** benchmarks are created by compiling example usage files with [Rolldown](https://rolldown.rs/), and measuring the size of the output, both minified and unminified.

**TypeScript inference** is measured with the TypeScript compiler API: whether the inferred input and output types describe the benchmark data exactly, how many type instantiations declaring the schema and reading both types costs, and the type an editor shows on hover.

## Structure

This monorepo is split…

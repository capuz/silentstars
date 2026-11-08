---
repo: "open-circle/schema-benchmarks"
name: "schema-benchmarks"
description: "Transparent comparisons between schema validation libraries"
readmeQualityOk: true
url: "https://github.com/open-circle/schema-benchmarks"
homepage: "https://schemabenchmarks.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["benchmark", "javascript", "library", "schema", "typescript"]
stars: 60
forks: 13
openIssues: 2
closedIssues: 31
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-11-09T20:11:17Z"
lastCommitAt: "2026-11-08T10:41:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 53
maintainers: ["github-actions[bot]", "dependabot[bot]", "EskiMojo14"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4489820d901ad837258f405d6ac5464fa68a06eae5eed245bfac37279653413/open-circle/schema-benchmarks"
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

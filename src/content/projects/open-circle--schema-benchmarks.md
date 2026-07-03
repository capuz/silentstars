---
repo: "open-circle/schema-benchmarks"
name: "schema-benchmarks"
description: "Transparent comparisons between schema validation libraries"
url: "https://github.com/open-circle/schema-benchmarks"
homepage: "https://schemabenchmarks.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["benchmark", "javascript", "library", "schema", "typescript"]
stars: 45
forks: 8
openIssues: 4
closedIssues: 22
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-11-09T20:11:17Z"
lastCommitAt: "2026-07-03T12:21:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 45
maintainers: ["EskiMojo14", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e18ff00e1cb9eda68004ee9bd1f1fb8e8f7f214384c1042c75378345218a551/open-circle/schema-benchmarks"
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

## Structure

This monorepo is split into 4 main parts:

### `schemas`

The schemas and benchmark definitions for each library, and the data used.

_If you're looking to add a new library, this is most relevant._

### `website`

The website for displaying results, built with [TanStack…

---
repo: "uhyo/nitrogql"
name: "nitrogql"
description: "GraphQL + TypeScript toolchain"
readmeQualityOk: true
url: "https://github.com/uhyo/nitrogql"
homepage: "https://nitrogql.vercel.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 32]
topics: ["graphql", "typescript"]
stars: 330
forks: 9
openIssues: 4
closedIssues: 34
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-02-11T14:24:43Z"
lastCommitAt: "2026-10-05T10:47:06Z"
lastReleaseAt: "2023-08-27T04:13:24Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 92
undervaluedScore: 28
maintainers: ["uhyo", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/600447188/c432c062-f551-4495-8b2e-982557a53bed"
---

**GraphQL + TypeScript. Done right.**

**[Documentation](https://nitrogql.vercel.app/)**

# nitrogql

**nitrogql** is a toolchain for using GraphQL in TypeScript projects. Main features include:

## Type generation with sourcemap support.

nitrogql generates TypeScript types for your GraphQL schema and queries. It also generates a sourcemap file that maps the generated types to the original GraphQL schema and queries. With sourcemaps, you will never see generated code in your IDE, and you will always be able to jump to the original source code.

## Static check for GraphQL code.

nitrogql can check your GraphQL code statically and guard you from any runtime errors caused by type mismatch.

## Installation

Install the nitrogql CLI with npm:

```sh
npm install --save-dev @nitrogql/cli
```

The CLI will enable you to check GraphQL files and generate types. Read more about the CLI in the [CLI documentation](https://nitrogql.vercel.app/cli).

To use GraphQL in your front-end project, you will also need to install appropriate loader.

For webpack-based projects:

```sh
npm install --save-dev @nitrogql/graphql-loader
```

For Rollup-based projects:

```sh
npm install --save-dev…

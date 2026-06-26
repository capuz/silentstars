---
repo: "graphql-markdown/graphql-markdown"
name: "graphql-markdown"
description: "Customizable MDX documentation for GraphQL schemas"
url: "https://github.com/graphql-markdown/graphql-markdown"
homepage: "https://graphql-markdown.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["graphql", "graphql-schema", "documentation", "generator", "documentation-generator", "docusaurus", "markdown", "gql", "graphql-markdown", "graphql-config"]
stars: 179
forks: 31
openIssues: 2
closedIssues: 147
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2020-06-12T08:17:12Z"
lastCommitAt: "2026-06-26T23:40:12Z"
lastReleaseAt: "2021-05-10T09:40:03Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["renovate[bot]", "edno", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/271746033/d9917c2a-58b8-496d-a826-f50bf17a264e"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/graphql-markdown", "CUSTOM:https://plant.treeware.earth/graphql-markdown/graphql-markdown"]
discussionCount: 1
---

<h1 align="center">Flexible documentation for GraphQL schemas</h1>

# GraphQL-Markdown

Generate **Markdown and MDX documentation** from **GraphQL schemas** for Docusaurus and other supported documentation ecosystems.

## Installation

GraphQL-Markdown supports two main setup paths:

- use the official Docusaurus integration for Docusaurus sites
- use the CLI with formatter presets for other supported ecosystems such as Hugo, MkDocs, DocFX, and mdBook

Choose your preferred package based on your documentation stack:

```shell
# For Docusaurus sites
npm install @graphql-markdown/docusaurus graphql

# For formatter-based setups
npm install @graphql-markdown/cli @graphql-markdown/formatters graphql
```

## Usage

### Docusaurus Plugin

Add to your `docusaurus.config.js`:

```js
module.exports = {
  plugins: ["@graphql-markdown/docusaurus"],
};
```

Run the generation command:

```shell
npx docusaurus graphql-to-doc
```

### CLI Usage

Use the CLI directly for custom workflows, or pair it with `@graphql-markdown/formatters` to adapt the generated output for supported frameworks.

```shell
npx gqlmd graphql-to-doc --schema ./schema.graphql --output ./docs
```

For formatter-based…

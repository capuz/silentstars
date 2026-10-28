---
repo: "neo4j/cypher-language-support"
name: "cypher-language-support"
description: "Neo4j's Cypher Language support"
readmeQualityOk: true
url: "https://github.com/neo4j/cypher-language-support"
homepage: "https://neo4j.github.io/cypher-language-support/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["codemirror", "codemirror6", "cypher", "language-server", "neo4j"]
stars: 54
forks: 20
openIssues: 9
closedIssues: 38
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2023-02-20T10:55:19Z"
lastCommitAt: "2026-10-28T09:57:52Z"
lastReleaseAt: "2023-11-24T10:22:11Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 56
maintainers: ["angrykoala", "neo4j-browser-bot", "anderson4j"]
openGraphImageUrl: "https://opengraph.githubassets.com/86f40205bb6ca3be1fc6a93b64ce64e0098444fe4ea184776e560e2f21b48d58/neo4j/cypher-language-support"
---

# Neo4j Cypher Language Support

This mono repo contains packages that together make up Neo4j's [Cypher](https://neo4j.com/docs/cypher/) Language support. We provide support for editors used in [Neo4j Console](https://console.neo4j.io) and also in our [VS Code extension](https://marketplace.visualstudio.com/items?itemName=neo4j-extensions.neo4j-for-vscode). 

## Capabilities

- Syntax highlighting
- Autocompletion
- Linting
- Formatting
- Signature help
- Hover information

## Project Overview

The project comprises several packages:

- [language-support](https://github.com/neo4j/cypher-language-support/blob/HEAD/packages/language-support/README.md) - The core library implementing the language support features.
- [language-server](https://github.com/neo4j/cypher-language-support/blob/HEAD/packages/language-server/README.md) - The [language server](https://microsoft.github.io/language-server-protocol/) wrapper for the `language-support` package.
- [vscode-extension](https://github.com/neo4j/cypher-language-support/blob/HEAD/packages/vscode-extension/README.md) - The Neo4j VS Code extension which bundles the `language-server`.
-…

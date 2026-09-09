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
stars: 52
forks: 20
openIssues: 9
closedIssues: 37
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2023-02-20T10:55:19Z"
lastCommitAt: "2026-09-09T08:15:43Z"
lastReleaseAt: "2023-11-24T10:22:11Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 57
maintainers: ["neo4j-browser-bot", "anderson4j", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c08359656d9e55c247b45c3f889e02f0b64a942e670b01782e6b093492c0a6bd/neo4j/cypher-language-support"
---

# Neo4j Cypher Language Support

This mono repo contains packages that together make up Neo4j's Cypher Language support.

## Project status

The project is in an early stage. We are still missing important features and the project is not yet stable. We welcome feedback and contributions!

Try it out in our [demo](https://neo4j.github.io/cypher-language-support/) or in our alpha releases in [Neo4j Workspace](https://workspace.neo4j.io) and soon also in our VS Code extension.

## Project Overview

```mermaid
---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#EDF0FD'
    primaryTextColor: '#0A0F25'
    secondaryTextColor: '#0A0F25'
    primaryBorderColor: '#0D32B2'
    lineColor: '#0D32B2'
    secondaryColor: '#E3E9FD'
    tertiaryColor: '#E3E9FD'
    tertiaryBorderColor: '#0D32B2'
---
flowchart TD
    subgraph CLS[Cypher Language Support]
    direction TD
    VSE(vscode-extension)
    RCP(react-codemirror-playground)
    RCM(react-codemirror)
    LS(language-server)
    POLLER(schema-poller)
    
    subgraph LT[language tooling]
    LSUPPORT(language-support)
    LINTWORKER(lint-worker)
    end

    subgraph Neo4j [Neo4j Mono Repo]
    direction TD
    GRAMMAR(ANTLR4…

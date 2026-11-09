---
repo: "legalize-dev/legalize-pipeline"
name: "legalize-pipeline"
description: "Legislación española como repositorio Git — cada ley es un fichero Markdown, cada reforma un commit"
readmeQualityOk: true
url: "https://github.com/legalize-dev/legalize-pipeline"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 55
forks: 33
openIssues: 50
closedIssues: 24
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-03-27T17:23:14Z"
lastCommitAt: "2026-11-09T12:00:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 83
undervaluedScore: 38
maintainers: ["EnriqueLop"]
openGraphImageUrl: "https://opengraph.githubassets.com/e18e503704acf75db574d40245492ce942d29dcef5cea6fdc3871b122d30c16b/legalize-dev/legalize-pipeline"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/legalizedev"]
---

# legalize-pipeline

The engine behind **[legalize.dev](https://legalize.dev)** -- converts official legislation into version-controlled Markdown in Git.

Each law is a file. Each reform is a commit. Every country is a repo.

## How it works

## Architecture

```
src/legalize/
  fetcher/              # Country-specific data fetching
    base.py               Abstract interfaces (LegislativeClient, NormDiscovery, TextParser, MetadataParser)
    es/                   Spain (BOE API)
      client.py             HTTP client with rate limiting, caching
      discovery.py          Norm discovery via catalog + sumarios
      parser.py             BOE XML -> Block/NormMetadata
    fr/                   France (LEGI XML dump)
      client.py             Local XML dump reader
      discovery.py          Filesystem-based discovery
      parser.py             LEGI XML -> Block/NormMetadata
    de/                   Germany (gesetze-im-internet.de)
      client.py             GIIClient: ZIP download + XML extraction
      discovery.py          TOC XML discovery (~6900 laws)
      parser.py             gii-norm XML -> Block/NormMetadata
    se/                   Sweden (SFSR / Riksdag)…

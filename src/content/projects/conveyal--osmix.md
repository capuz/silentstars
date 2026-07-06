---
repo: "conveyal/osmix"
name: "osmix"
description: "OpenStreetMap reader, writer, and merge tool. Written in TypeScript."
readmeQualityOk: true
url: "https://github.com/conveyal/osmix"
homepage: "https://osmix.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 33
forks: 0
openIssues: 6
closedIssues: 8
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-05-13T09:46:11Z"
lastCommitAt: "2026-07-06T07:05:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["trevorgerhardt", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83ccaf7990e366fbf577e595ec395156d676e8c41a6d5bb43f875f7cb1af0a53/conveyal/osmix"
---

# Osmix

> High-performance OpenStreetMap tools for TypeScript and JavaScript environments.

## Introduction

Osmix is a collection of composable libraries for reading, querying, merging, and transforming OpenStreetMap PBF data in browsers and Node.js. Built on streaming APIs and Web Workers, Osmix handles large extracts efficiently with spatial indexing, vector tile generation, and in-browser merge workflows.

**Key Features:**
- Streaming PBF parsing with minimal memory overhead
- Spatial queries via R-tree indexes (KDBush, Flatbush)
- Merge and deduplicate OSM extracts
- Cross-platform – ESM-native, runs in Node.js, Bun, Deno, and browsers
- Generate raster and vector tiles
- Worker-based processing for responsive UIs

**Try it:** [merge.osmix.dev](https://merge.osmix.dev) · **Docs & examples:** [osmix.dev](https://osmix.dev)

## Quick Start

```bash
bun add osmix
```

### Examples

```ts
import { fromPbf, toPbfBuffer, transformOsmPbfToJson, merge, isNode } from "osmix"

// Load a PBF file
const osm = await fromPbf(Bun.file('./monaco.pbf').stream())

// Query entities by ID
const node = osm.nodes.getById(123456)
const way = osm.ways.getById(789012)
const relation =…

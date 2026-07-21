---
repo: "derberg/OpenCrane"
name: "OpenCrane"
description: "A standalone, extensible RAG/MCP library for building AI-powered documentation search. Power your documentation with semantic search, LLM context bundles, and MCP servers."
readmeQualityOk: true
url: "https://github.com/derberg/OpenCrane"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T15:23:55Z"
lastCommitAt: "2026-07-21T06:15:11Z"
lastReleaseAt: "2026-03-24T17:39:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["derberg", "mentelka"]
openGraphImageUrl: "https://opengraph.githubassets.com/a87b2eb34a88cccd6e2d2e14f1a26ae21ef97147002266894d8d94fcaccf8441/derberg/OpenCrane"
---

A standalone, extensible RAG/MCP pipeline for building AI-powered documentation search. Fetch docs from GitHub, generate `llms-full.txt` bundles, chunk and embed them, index into Milvus, and serve via an MCP server — all from one CLI.

## Table of Contents

- [Features](#features)
- [Credits](#credits)
- [Quick start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
  - [CLI](#cli)
    - [init](#opencrane-init----scaffold-a-new-project)
    - [add](#opencrane-add----add-documentation-sources)
    - [build](#opencrane-build----full-pipeline)
    - [fetch](#opencrane-fetch----fetch-docs-from-github)
    - [llms](#opencrane-llms----generate-llms-fulltxt-bundles)
    - [tokens](#opencrane-tokens----token-count-report)
    - [chunk](#opencrane-chunk----chunk-docs-into-rag-chunksjson)
    - [embed](#opencrane-embed----generate-embeddings)
    - [index](#opencrane-index----load-into-milvus)
    - [serve](#opencrane-serve----start-mcp-server)
    - [pack](#opencrane-pack----package-for-distribution)
    - [inspect](#opencrane-inspect----launch-mcp-inspector)
    - [visualize](#opencrane-visualize----see-where-a-paragraph-lands-in-the-embedding-space)
  - [Default file and…

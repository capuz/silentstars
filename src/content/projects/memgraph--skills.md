---
repo: "memgraph/skills"
name: "skills"
description: "Agent skills that should help you build awesome stuff with Memgraph "
readmeQualityOk: true
url: "https://github.com/memgraph/skills"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["memgraph", "skills"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-12T12:04:13Z"
lastCommitAt: "2026-11-17T13:44:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 26
maintainers: ["katarinasupe", "tonilastre", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d2150f6676fe7f804c8aa758c362534ec99cb4339bf897c7a92256cf4b9f7b2/memgraph/skills"
---

# Memgraph Skills

A collection of Agent Skills for working with [Memgraph](https://memgraph.com) graph database, covering Cypher, data modeling, indexes, algorithms, query modules, visualization, and GraphRAG.

## Install

### With Claude Code

```
/plugin marketplace add memgraph/marketplace
/plugin install memgraph@memgraph
```

### With Codex

```bash
codex plugin marketplace add memgraph/marketplace
codex plugin add memgraph@memgraph
```

The plugin also adds the Memgraph docs MCP server and the Memgraph MCP server. [memgraph/marketplace](https://github.com/memgraph/marketplace) is the catalog of all Memgraph plugins.

### With any agent (Cursor, Codex, Claude Code, and others)

```bash
npx skills add memgraph/skills
```

Add `--skill <name>` to install a single skill, or `--list` to see them all.

## Get started

With Docker running, ask your agent:

```
Get started with Memgraph
```

It runs the `memgraph-start` skill: it starts Memgraph and Memgraph Lab in Docker, loads a sample dataset you pick, and runs a first query and a graph algorithm. To call the skill directly, use `/memgraph:memgraph-start` in Claude Code or `$memgraph-start` in Codex. In Codex, start it with…

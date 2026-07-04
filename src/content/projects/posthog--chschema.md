---
repo: "PostHog/chschema"
name: "chschema"
description: "ClickHouse schema as code, introspection and migration tooling"
readmeQualityOk: true
url: "https://github.com/PostHog/chschema"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 17
closedIssues: 22
watchers: 0
contributors: 30
recentReleases: 0
createdAt: "2025-09-29T17:26:30Z"
lastCommitAt: "2026-07-04T23:14:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 57
maintainers: ["orian", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4162fee63aac74dafe96176d585d1eb5c2281fcaf8686db83192ace4345c3932/PostHog/chschema"
---

# chschema — Declarative ClickHouse Schema Management

A declarative tool for managing ClickHouse schemas. Schemas are written in
HCL, layered for multi-environment setups, resolved into a flat desired
state, and round-tripped against a live cluster.

## What hclexp does

`hclexp` is a multi-command CLI. The core modes:

1. **Introspect** — connect to a live ClickHouse instance and dump its
   databases as HCL (to stdout, a file, or a directory). Round-trips
   tables, materialized views, plain views, dictionaries, and named
   collections.
2. **Load & resolve** — read an HCL schema (a single file or a stack of
   layer directories), apply inheritance/patching, and emit the resolved,
   flat schema as canonical HCL.
3. **Validate** — check that every cross-object reference (MV sources +
   destination, view sources, Distributed `remote_*`) in a resolved
   schema is satisfied, without connecting to a cluster.
4. **Diff** — compare two schemas (HCL sources or live clusters, in any
   combination) and report the changes — or the migration DDL — between
   them; `-format json` emits a dependency-ordered, machine-readable plan.

Additional commands:

- **plan** — diff every node role…

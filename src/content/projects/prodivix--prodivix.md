---
repo: "prodivix/prodivix"
name: "prodivix"
description: "A Open-source Visual Frontend Platform blending blueprints, node graphs, and code. Streamlines design-to-deployment workflow with local/cloud collaboration. Perfect for cross-disciplinary teams, rapid MVP builds, and frontend learning."
readmeQualityOk: true
url: "https://github.com/prodivix/prodivix"
homepage: "https://prodivix.github.io/prodivix/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 29
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-19T12:11:35Z"
lastCommitAt: "2026-07-31T06:28:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Minsecrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/f85afda89e6b75b207f705dbbe5c32a763cef59e526cb1cb4818cc744a68c3b9/prodivix/prodivix"
---

# Prodivix

Language: English | [简体中文](https://github.com/prodivix/prodivix/blob/HEAD/README.zh-CN.md)

Prodivix is an open-source, browser-based visual development environment for modern front-end applications. It combines blueprint editing, node-graph logic, animation authoring, code authoring, workspace persistence, diagnostics, preview, and production export around a canonical Workspace VFS.

The **Canonical Workspace VFS is the single source of authoring truth**. PIR owns normalized UI documents; NodeGraph and Animation use their own Workspace document types, while route manifests, code documents, assets, and configuration remain first-class records. `CodeReference` connects domain documents to code without embedding the source into a single giant JSON file.

Prodivix is in active alpha development. The canonical phase status is maintained in [`specs/roadmap/current-status.md`](https://github.com/prodivix/prodivix/blob/HEAD/specs/roadmap/current-status.md) so this README does not drift from engineering Gates.

## Project Goals

Prodivix is built around several long-term constraints:

- **One canonical authoring truth**: Workspace, Route, PIR, Code, Asset, and Config documents…

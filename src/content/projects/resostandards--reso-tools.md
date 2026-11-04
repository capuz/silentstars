---
repo: "RESOStandards/reso-tools"
name: "reso-tools"
description: "RESO Tools - a toolkit for working with RESO servers and clients"
readmeQualityOk: true
url: "https://github.com/RESOStandards/reso-tools"
homepage: "https://tools.reso.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 20
forks: 7
openIssues: 124
closedIssues: 67
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-03-06T12:09:45Z"
lastCommitAt: "2026-11-04T02:57:21Z"
lastReleaseAt: "2026-10-29T07:26:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 55
maintainers: ["reso-ai-assistant"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6dfec24fb84b4ada1f82ab0c1255fb8af406a0326b8e4bd00b0f88521ede12c/RESOStandards/reso-tools"
---

# RESO Tools

**Download the desktop app** &nbsp;

Open-source toolkit for building and testing [RESO](https://www.reso.org/)-compliant OData servers. This repository holds the reference server, the certification test runner (`reso-cert`), an MCP server for AI agents and the shared libraries for OData parsing, metadata processing and validation. Seven of the eight packages publish to npm, so any project can consume them without the monorepo. The MCP server is not published and runs from this repository. The desktop certification app (which bundles a reference server and a local test-data UI) is built separately and distributed here as a downloadable [release](https://github.com/RESOStandards/reso-tools/releases/latest).

## Packages

| Package | Description | Tests |
|---------|-------------|-------|
| [`reso-common/`](https://github.com/RESOStandards/reso-tools/blob/HEAD/reso-common/) | Universal (browser + Node) RESO metadata model and projections – the shared `ResoMetadata` shape, pure helpers and EDMX generator (zero runtime dependencies) | 41 |
| [`reso-metadata-utils/`](https://github.com/RESOStandards/reso-tools/blob/HEAD/reso-metadata-utils/) | RESO OData metadata…

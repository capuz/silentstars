---
repo: "tangcent/easy-yapi"
name: "easy-yapi"
description: "IntelliJ plugin that generates API docs from Java/Kotlin projects and syncs them directly to YApi, with built-in request testing   and multi-channel export."
readmeQualityOk: true
url: "https://github.com/tangcent/easy-yapi"
homepage: "https://easyyapi.github.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["yapi", "idea-plugin"]
stars: 489
forks: 161
openIssues: 2
closedIssues: 660
watchers: 10
contributors: 14
recentReleases: 0
createdAt: "2019-05-25T14:04:17Z"
lastCommitAt: "2026-10-24T00:16:16Z"
lastReleaseAt: "2019-12-01T16:32:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 39
maintainers: ["tangcent", "GeekHM", "amit-gshe"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf2bc51f63dde8d8be72b42d59dbf5018f90ba9ea5e0a2b7b32ced1e148294bf/tangcent/easy-yapi"
---

# EasyYapi

English | [中文](https://github.com/tangcent/easy-yapi/blob/HEAD/README_CN.md)

> **Note:** This is the v3.0 rewrite of EasyYapi. For the source code of stable v2.x releases, see the
> [`stable/v2.x.x`](https://github.com/tangcent/easy-yapi/tree/stable/v2.x.x) branch.

An IntelliJ IDEA plugin for API development — export API documentation to YApi/Postman/Markdown, send requests, and manage endpoints directly from your code.

## Features

### API Export

Export API endpoints from your source code to multiple formats:

| Format | HTTP | gRPC | Output |
|--------|------|------|--------|
| [YApi](https://easyyapi.github.io/guide/export2yapi) | ✓ | — | Upload to YApi platform with category management, mock rules, and update confirmation |
| [Postman](https://easyyapi.github.io/guide/export2postman) | ✓ | — | JSON file or direct upload to Postman workspace |
| [Markdown](https://easyyapi.github.io/guide/export2markdown) | ✓ | ✓ | .md documentation file |
| cURL | ✓ | ✓ | Executable shell command |
| HTTP Client | ✓ | ✓ | IntelliJ HTTP Client scratch file |
| **Hoppscotch** *(Beta)* | ✓ | — | JSON file or direct upload to Hoppscotch |
| **OpenAPI** *(Beta)* | ✓ | ✓ | `.json` or…

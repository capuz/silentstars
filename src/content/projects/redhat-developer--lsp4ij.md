---
repo: "redhat-developer/lsp4ij"
name: "lsp4ij"
description: "LSP & DAP Client for IntelliJ"
readmeQualityOk: true
url: "https://github.com/redhat-developer/lsp4ij"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["dap", "intellij-idea", "lsp", "debug-adapter-protocol", "debugadapterprotocol", "language-server-protocol", "languageserver", "languageserverprotocol"]
stars: 362
forks: 125
openIssues: 95
closedIssues: 668
watchers: 17
contributors: 212
recentReleases: 0
createdAt: "2023-11-30T10:30:56Z"
lastCommitAt: "2026-11-23T13:28:14Z"
lastReleaseAt: "2024-12-16T09:09:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "community_hub"]
healthScore: 97
undervaluedScore: 38
maintainers: ["lagergren", "muescha", "fbricon"]
openGraphImageUrl: "https://opengraph.githubassets.com/efd1abc44e4ecf1bb71cb0a2a31e9c9df832cde84b6a59adbdcb1a6ee9ebd5c8/redhat-developer/lsp4ij"
discussionCount: 74
---

# LSP4IJ

[plugin-repo]: https://plugins.jetbrains.com/plugin/23257-lsp4ij
[plugin-version-svg]: https://img.shields.io/jetbrains/plugin/v/23257-lsp4ij.svg
[plugin-downloads-svg]: https://img.shields.io/jetbrains/plugin/d/23257-lsp4ij.svg
[plugin-rating-svg]: https://img.shields.io/jetbrains/plugin/r/rating/23257

## Description

LSP4IJ is a free and open-source 

 * [Language Server protocol (LSP)](https://microsoft.github.io/language-server-protocol/) client compatible with all flavours of IntelliJ.
 * [Debug Adapter Protocol](https://microsoft.github.io/debug-adapter-protocol/) support with [Debug Adapter Protocol Run/Debug configuration](https://github.com/redhat-developer/lsp4ij/blob/HEAD/docs/dap/UserGuide.md).

It allows you to integrate any `language server` that communicates with its client via `stdio`, or over a TCP socket
(see [SocketStreamConnectionProvider](https://github.com/redhat-developer/lsp4ij/blob/HEAD/docs/DeveloperGuide.md#socketstreamconnectionprovider) and the
[transport of a user-defined language server](https://github.com/redhat-developer/lsp4ij/blob/HEAD/docs/UserDefinedLanguageServer.md#transport)):

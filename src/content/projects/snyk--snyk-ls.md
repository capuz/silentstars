---
repo: "snyk/snyk-ls"
name: "snyk-ls"
description: "Language Server used by IDEs as Snyk Backend for Frontends"
readmeQualityOk: true
url: "https://github.com/snyk/snyk-ls"
homepage: "https://snyk.io"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["ide", "language-server", "sast"]
stars: 83
forks: 19
openIssues: 0
closedIssues: 0
watchers: 49
contributors: 227
recentReleases: 0
createdAt: "2021-11-25T16:08:08Z"
lastCommitAt: "2026-08-28T14:29:36Z"
lastReleaseAt: "2022-03-03T11:11:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["basti-snyk", "rrama", "nick-y-snyk"]
openGraphImageUrl: "https://opengraph.githubassets.com/b73d5a7c772e3bce882e40f276c28d4c612a135c51a212bb4f5acb7fcf7ec7be/snyk/snyk-ls"
---

# Snyk Language Server (Snyk-LS)

## Supported features

The language server follows
the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/specifications/specification-current/)
and integrates with Snyk Open Source, Snyk Infrastructure as Code, Snyk Code, and Snyk Secrets. For Open Source and IaC it uses the Snyk
CLI as a data provider; Snyk Code uses the Snyk Code API; Secrets scanning uses the CLI where applicable.

Right now the language server supports the following actions:

- Send diagnostics to client on opening a document if it's part of the current set of folders.
- Starting a folder scan on startup and sending diagnostics.
- Starting a workspace scan of all folders on command.
- Cache diagnostics until saving or triggering a new workspace scan.
- Invalidate caches on saving a document and retrieve saved document diagnostics anew.
- Provides range calculation to correctly highlight Snyk Open Source issues in their file.
- Provides formatted hovers with diagnostic details and follow-up links
- Progress reporting to the client for background jobs
- Notifications & Log messages to the client
- Authentication when needed, using OAuth2 or Token…

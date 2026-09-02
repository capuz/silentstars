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
lastCommitAt: "2026-09-02T08:05:29Z"
lastReleaseAt: "2022-03-03T11:11:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["basti-snyk", "rrama", "nick-y-snyk"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0b2786f28379b1e8d8d1db3c91a7f17652f60875fec04d82a148fa9e9929d5f/snyk/snyk-ls"
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

---
repo: "Silo-Server/silo-plugin-metadata-tmdb"
name: "silo-plugin-metadata-tmdb"
description: "First-party Silo metadata provider plugin backed by The Movie Database (TMDB)."
readmeQualityOk: true
url: "https://github.com/Silo-Server/silo-plugin-metadata-tmdb"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["silo"]
stars: 5
forks: 4
openIssues: 4
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-05-23T00:27:00Z"
lastCommitAt: "2026-11-13T18:33:59Z"
lastReleaseAt: "2026-10-08T20:27:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 61
maintainers: ["Quick104", "blurbery", "Rhainland"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e0468d55997d0e95132aedab7a6cf24d7878068db68f0b0eae8024bd10ef6f4/Silo-Server/silo-plugin-metadata-tmdb"
---

# TMDB Metadata Plugin for Silo

First-party [Silo](https://github.com/Silo-Server/silo-server) metadata plugin
backed by The Movie Database. It provides movie, series, season, and episode
metadata and resolves `tmdb://` artwork references.

## Setup

TMDB Metadata is installed as a default Silo plugin. Add or enable **TMDB** in a
movie or television library's metadata provider chain; no plugin-specific
configuration is required.

## Dependency Model

This repository consumes `github.com/Silo-Server/silo-plugin-sdk` as a normal Go module dependency. CI and release builds run with `GOWORK=off` and expect the SDK version in `go.mod` to resolve from a published semver tag.

For local multi-repository development, use a `go.work` file that points at a
sibling SDK checkout. Do not commit machine-local filesystem replacements.

## Development

```sh
go test ./...
go build .
```

## Releases

Releases are signed with GitHub artifact attestations. [CONTRIBUTING.md](https://github.com/Silo-Server/silo-plugin-metadata-tmdb/blob/HEAD/CONTRIBUTING.md#release)
describes how maintainers cut a release and how to verify a downloaded binary.

## Contributing

Read…

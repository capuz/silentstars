---
repo: "bitly/little_bigtable"
name: "little_bigtable"
description: "Little Bigtable is an emulator for Google Bigtable w/ persistence in sqlite3"
readmeQualityOk: true
url: "https://github.com/bitly/little_bigtable"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["bigtable", "cloud-bigtable", "emulator", "sqlite3"]
stars: 22
forks: 11
openIssues: 0
closedIssues: 1
watchers: 25
contributors: 7
recentReleases: 0
createdAt: "2021-09-27T21:37:50Z"
lastCommitAt: "2026-11-04T02:57:08Z"
lastReleaseAt: "2024-05-21T15:48:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 87
undervaluedScore: 38
maintainers: ["jehiah", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbfd21052c724f88d7342d435b4af87bb7f9d0d2c3fbbb549b8a3cf48939bd54/bitly/little_bigtable"
---

# Little Bigtable

A local emulator for [Cloud Bigtable](https://cloud.google.com/bigtable) with persistence to a sqlite3 backend.

The Cloud SDK provided `cbtemulator` is in-memory and does not support persistence which limits it's applicability. This project is a fork of `cbtemulator` from [google-cloud-go/bigtable/bttest](https://github.com/googleapis/google-cloud-go/tree/c46c1c395b5f2fb89776a2d0e478e39a2d5572e4/bigtable/bttest)

| | [`cbtemulator`](https://cloud.google.com/bigtable/docs/emulator) | "little" Bigtable | Bigtable
| --- | ----- | ---- | ----
| **Storage** | In-Memory | sqlite3 | Distributed GFS
| **Type** | Emulator | Emulator | Managed Production Datastore
| **Scaling**| Single process | Single process | Scalable multi-node backend
| **GC** | async GC | per-row GC at read time |

## Usage

```
Usage of ./little_bigtable:
  -db-file string
      path to data file (default "little_bigtable.db")
  -host string
      the address to bind to on the local machine (default "localhost")
  -port int
      the port number to bind to on the local machine (default 9000)
  -version
      show version
```

In the environment for your application, set the…

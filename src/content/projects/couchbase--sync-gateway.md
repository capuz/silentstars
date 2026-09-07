---
repo: "couchbase/sync_gateway"
name: "sync_gateway"
description: "Manages access and synchronization between Couchbase Lite and Couchbase Server"
readmeQualityOk: true
url: "https://github.com/couchbase/sync_gateway"
homepage: "https://www.couchbase.com/products/sync-gateway"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["couchbase", "sync-gateway", "couchbase-mobile", "couchbase-sync-gateway", "couchbase-server", "golang-application", "golang", "hacktoberfest"]
stars: 454
forks: 145
openIssues: 1
closedIssues: 2575
watchers: 56
contributors: 72
recentReleases: 0
createdAt: "2012-10-04T22:25:43Z"
lastCommitAt: "2026-09-07T08:35:18Z"
lastReleaseAt: "2016-08-26T14:21:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 39
maintainers: ["torcolvin", "dependabot[bot]", "bbrks"]
openGraphImageUrl: "https://opengraph.githubassets.com/2246544cea93285ea248d52b9d731e65734136c7221ee1d4f667f7594bf68a41/couchbase/sync_gateway"
---

# Sync Gateway

Sync Gateway is a horizontally scalable web server that securely manages the access control and
synchronization of data between [Couchbase Lite][CB_LITE] and [Couchbase Server][CB_SERVER].

## Couchbase Capella DBaaS

Couchbase's cloud database platform is the easiest and fastest way to begin with Couchbase and eliminate ongoing database management efforts.
Try for free at [Couchbase Capella][CB_CAPELLA].

## Self-Managed and On-Prem

Download Sync Gateway and other Couchbase packages for Linux, Windows and macOS at [Couchbase Downloads][CB_DOWNLOAD].

## Build from source

### Pre-requisites

* Building the Enterprise Edition requires access to private code, and cannot be built by third-parties.

### Build Instructions

```shell
$ go build
```

## Contributing

### Pre-commit hooks

Pre-commit is optional — it's a convenience to catch issues locally before CI does. Run once per checkout to enable it:

```shell
uvx pre-commit install
```

After that, the hooks run automatically whenever you `git commit`. `uvx` ships with [uv](https://docs.astral.sh/uv/getting-started/installation/).

#### Running hooks manually

If you need to run the hooks outside of a commit:…

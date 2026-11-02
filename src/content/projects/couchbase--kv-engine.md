---
repo: "couchbase/kv_engine"
name: "kv_engine"
description: "Couchbase Key-Value Engine"
readmeQualityOk: true
url: "https://github.com/couchbase/kv_engine"
homepage: "http://www.couchbase.com"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 151
forks: 62
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 141
recentReleases: 0
createdAt: "2017-05-16T10:49:39Z"
lastCommitAt: "2026-11-02T11:35:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 70
undervaluedScore: 44
maintainers: ["trondn", "pavlosg", "paolococchi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8ba3c1f1a6a38b51d9de74a42a742780b81793bb30bae3a41fbce718e1a665/couchbase/kv_engine"
---

# KV-Engine

Welcome to the Couchbase _KV-Engine_ project.

This started as Couchbase's fork of the upstream `memcached` project,
but has substantially evolved since then. It contains the bulk of the
code for the Key/Value service of Couchbase Server.

## Repository Layout

Areas of interest in the repository:

* [`include/`](https://github.com/couchbase/kv_engine/blob/HEAD/include/) - Public header files.
* `daemon/` - Source for the main daemon process (also known as the
  _server_). This is where [`main()`](https://github.com/couchbase/kv_engine/blob/HEAD/daemon/memcached.cc) lives.
* `engines/` - Source for the different engines (aka bucket types)
  supported. Includes:
    * [`ep`](https://github.com/couchbase/kv_engine/blob/HEAD/engines/ep/) - _Eventually Persistent_ Engine. Powers the
    _Couchbase_ and _Ephemeral_ bucket types.
    * [`ewouldblock engine`](https://github.com/couchbase/kv_engine/blob/HEAD/engines/ewouldblock_engine) - Test engine
      which interposes a real engine and can perform various types of
      error-injection.
* `tests/` - Test cases.
* `licenses/` - The various licenses in use

## Building

KV-Engine has a number of external dependencies, as…

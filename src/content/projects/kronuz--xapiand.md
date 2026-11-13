---
repo: "Kronuz/Xapiand"
name: "Xapiand"
description: "Xapiand: A RESTful Search Engine"
readmeQualityOk: true
url: "https://github.com/Kronuz/Xapiand"
homepage: "https://kronuz.github.io/Xapiand"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["search", "search-engine", "indexing", "c-plus-plus", "elasticsearch"]
stars: 363
forks: 33
openIssues: 5
closedIssues: 26
watchers: 17
contributors: 6
recentReleases: 1
createdAt: "2015-02-23T16:37:09Z"
lastCommitAt: "2026-11-13T11:23:49Z"
lastReleaseAt: "2026-10-17T14:06:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["Kronuz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e601c78384a7a079e2556a04d08a2f46c6e3d72f0493688725f88223d7d1b923/Kronuz/Xapiand"
---

# Xapiand

**A RESTful search and storage engine in one binary.** Send it JSON or MessagePack
documents over HTTP, then search them with full text, geospatial, and range queries.
It runs on one machine.

📖 Official site: [kronuz.github.io/Xapiand](https://kronuz.github.io/Xapiand)

## 📦 Installation

```sh
docker run -p 8880:8880 --rm ghcr.io/kronuz/xapiand:latest      # Linux amd64 / arm64
brew install Kronuz/tap/xapiand && xapiand                     # macOS
```

Each release also ships RPM and DEB packages; see
[Installation](https://kronuz.github.io/Xapiand/installation/), or build from source
below.

## 🚀 Quick start

```sh
curl -X PUT 'localhost:8880/twitter/tweet/1?commit' -H 'Content-Type: application/json' \
  -d '{"user": "Kronuz", "postDate": "2016-11-15T13:12:00", "message": "Trying out Xapiand"}'

curl localhost:8880/twitter/tweet/1                         # get it back
curl -X SEARCH 'localhost:8880/twitter/tweet/?q=user:Kronuz'  # search for it
```

The index is created on first write. Writes become searchable at the next commit,
about a second later; `?commit` waits for it. The
[Quick-start](https://kronuz.github.io/Xapiand/quickstart/) continues with
searches,…

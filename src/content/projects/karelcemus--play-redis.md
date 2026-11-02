---
repo: "KarelCemus/play-redis"
name: "play-redis"
description: "Play framework 2 cache plugin as an adapter to redis-server"
readmeQualityOk: true
url: "https://github.com/KarelCemus/play-redis"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "redis-cache", "play-framework", "reactive", "asynchronous", "play-cache", "play-redis", "playframework"]
stars: 169
forks: 47
openIssues: 1
closedIssues: 136
watchers: 14
contributors: 14
recentReleases: 0
createdAt: "2015-02-21T18:59:01Z"
lastCommitAt: "2026-11-02T11:36:36Z"
lastReleaseAt: "2017-01-03T13:42:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 25
maintainers: ["Dichotomia"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76d9b3ab74a8aa9140b6cefcfd9184ec4665dfb4cce4a49eb261f06008d027d/KarelCemus/play-redis"
---

# Redis Cache module for Play framework

  **This version supports Play framework 3.0.x with JDK 11 and Scala 2.13 and Scala 3.**<br/>
  **For previous versions see older releases.**

## About the Project

[Play framework](https://playframework.com/) is delivered with
[SyncCacheApi and AsyncCacheApi](https://playframework.com/documentation/2.8.x/ScalaCache).
This module provides **implementation of a cache over Redis** server, i.e., key/value storage.

Besides the compatibility with all Play's cache APIs,
it introduces more evolved API providing lots of handful
operations. Besides the basic methods such as `get`, `set`
and `remove`, it provides more convenient methods such as
`expire`, `exists`, `invalidate` and much more.

The implementation builds on the top of Pekko actor system,
it is **completely non-blocking and asynchronous** under
the hood, though it also provides blocking APIs to ease
the use. Furthermore, the library supports several configuration
providers to let you easily use `play-redis` on localhost, Heroku,
as well as on your premise.

## Features

- [synchronous and asynchronous APIs](#provided-apis)
- [implements standard APIs defined by Play's `cacheApi`…

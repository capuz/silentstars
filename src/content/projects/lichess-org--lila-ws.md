---
repo: "lichess-org/lila-ws"
name: "lila-ws"
description: "Lichess' websocket server"
readmeQualityOk: true
url: "https://github.com/lichess-org/lila-ws"
homepage: "https://lichess.org"
language: "Scala"
languages: ["Scala"]
languagePcts: [99]
topics: ["lichess", "scala", "akka", "streaming", "reactive", "websocket", "redis", "pubsub"]
stars: 176
forks: 103
openIssues: 2
closedIssues: 16
watchers: 10
contributors: 29
recentReleases: 0
createdAt: "2019-08-27T17:40:17Z"
lastCommitAt: "2026-07-11T05:57:40Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["ornicar", "scala-steward", "fitztrev"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b37fff93867844c3b7ffc9dd9eee3273aed1f308a500f97bc4630b9f57e75b3/lichess-org/lila-ws"
fundingLinks: ["CUSTOM:https://lichess.org/patron"]
---

# Lila websocket

Handle incoming websocket traffic for [lichess.org](https://lichess.org).

```
lila <-> redis <-> lila-ws <-> websocket <-> client
```

Start:
```
sbt
~reStart
```

Start with custom config file:
```
sbt -Dconfig.file=/path/to/my.conf
```

Custom config file example:
```
include "application"
http.port = 8080
mongo.uri = "mongodb://localhost:27017/lichess"
redis.uri = "redis://127.0.0.1"
```

Trusts `X-Forwarded-For`. Use only behind a reverse proxy!

### Code formatting

Please `sbt prepare` before you submit a PR. This will reformat and do some auto refactoring of the code.

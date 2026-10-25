---
repo: "ghostdogpr/sage"
name: "sage"
description: "Modern Scala 3 client for Redis and Valkey, native and multi-backend"
readmeQualityOk: true
url: "https://github.com/ghostdogpr/sage"
homepage: "https://ghostdogpr.github.io/sage/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["redis", "scala", "valkey", "redis-client", "resp3", "scala3"]
stars: 62
forks: 3
openIssues: 0
closedIssues: 49
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-06-05T06:37:17Z"
lastCommitAt: "2026-10-25T09:01:13Z"
lastReleaseAt: "2026-09-11T04:41:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 43
maintainers: ["ghostdogpr", "scala-steward", "paulpdaniels"]
openGraphImageUrl: "https://opengraph.githubassets.com/92292178d03e2b625bc2a7ee354b950dacd3a542de780c70b7b9e6b2d59ff5ba/ghostdogpr/sage"
fundingLinks: ["GITHUB:https://github.com/ghostdogpr"]
---

# <img src="docs/public/sage.svg" height="34" alt="" valign="middle">&nbsp; Sage

Sage is a Redis and Valkey client for Scala 3. It implements the Redis protocol directly in Scala instead of wrapping a Java client.

- Use the direct artifact for plain blocking code with no effect library dependency, or choose the artifact for [Ox](https://ox.softwaremill.com), [ZIO](https://zio.dev), [Cats Effect](https://typelevel.org/cats-effect/), [Kyo](https://getkyo.io), or [Pekko](https://pekko.apache.org), which uses that ecosystem's native types.
- The core implements RESP3, commands, and codecs in Scala 3.
- Redis 8+ and Valkey 8+ support includes auto-pipelining, transactions, cluster routing, sharded pub/sub, client-side caching, rate limiting, distributed locks, and TLS.

Sage supports Scala 3.9.x LTS and later and requires JDK 21 or later.

### Consult the [Documentation](https://ghostdogpr.github.io/sage/) to learn how to use Sage.

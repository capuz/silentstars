---
repo: "svroonland/rezilience"
name: "rezilience"
description: "ZIO-native utilities for making resilient distributed systems"
url: "https://github.com/svroonland/rezilience"
homepage: "https://www.vroste.nl/rezilience"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["circuit-breaker", "bulkhead", "zio", "scala", "fault-tolerance"]
stars: 163
forks: 19
openIssues: 14
closedIssues: 26
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2020-05-16T13:26:53Z"
lastCommitAt: "2026-06-25T01:32:46Z"
lastReleaseAt: "2021-05-24T10:15:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 29
maintainers: ["scala-steward", "GijsbertvanVliet", "svroonland"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ecfc975a8059d6d6a93e81b6f544aa69a60a787c90c9a5975bb9ab8ac102f83/svroonland/rezilience"
fundingLinks: ["GITHUB:https://github.com/svroonland"]
discussionCount: 1
---

# Rezilience

_Use and like this library? Consider [sponsoring](https://github.com/sponsors/svroonland) its ongoing development and maintenance_

`rezilience` is a ZIO-native collection of policies for making asynchronous systems more resilient to failures.

It is inspired by [Polly](https://github.com/App-vNext/Polly), [Resilience4J](https://github.com/resilience4j/resilience4j) and [Akka](https://doc.akka.io/docs/akka/current/common/circuitbreaker.html).

It consists of these policies:

* `CircuitBreaker`
* `Bulkhead`
* `RateLimiter`
* `Retry`
* `Timeout`

## Features / Design goals
* Type-safety: all errors that can result from any of the `rezilience` policies are encoded in the method signatures, so no unexpected RuntimeExceptions.
* Support for your own error types (the `E` in `ZIO[R, E, A]`) instead of requiring your effects to have `Exception` as error type
* Lightweight: `rezilience` uses only ZIO fibers and will not create threads or block
* Switchable at runtime with two transition modes
* Resource-safe: built on ZIO's `ZManaged`, any allocated resources are cleaned up safely after use. 
* Interrupt safe: interruptions of effects wrapped by `rezilience` policies are…

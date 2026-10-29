---
repo: "evolution-gaming/throttler"
name: "throttler"
description: "Request throttler"
readmeQualityOk: true
url: "https://github.com/evolution-gaming/throttler"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["request-throttler"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 9
recentReleases: 1
createdAt: "2017-07-03T12:57:23Z"
lastCommitAt: "2026-10-29T12:25:28Z"
lastReleaseAt: "2026-09-25T20:51:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 64
maintainers: ["scala-steward", "mr-git", "stasimus"]
openGraphImageUrl: "https://opengraph.githubassets.com/280c187e96f1b7ed11b5aacd8caa8eed2960566825a0e8462b2fce5729534bf5/evolution-gaming/throttler"
---

# throttler 

### RequestThrottler

RequestThrottler allows to limit the maximum number of requests / messages which can be processed within a specific time period for a specific user / resource, etc.

### TokenBucket

TokenBucket is a request throttling implementation for limiting requests rate for a single resource, see <a href="http://en.wikipedia.org/wiki/Token_bucket">Token Bucket on Wikipedia</a>.
  
### FixedIntervalRefillStrategy  
  
FixedIntervalRefillStrategy is a token bucket refill strategy that will provide N tokens for a token bucket to consume every T milliseconds.

## Setup

```scala
addSbtPlugin("com.evolution" % "sbt-artifactory-plugin" % "0.0.2")

libraryDependencies += "com.evolutiongaming" %% "throttler" % "3.0.0"
```

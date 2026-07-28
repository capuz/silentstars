---
repo: "palantir/dialogue"
name: "dialogue"
description: "A client-side RPC library for conjure-java"
readmeQualityOk: true
url: "https://github.com/palantir/dialogue"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["octo-correct-managed"]
stars: 39
forks: 19
openIssues: 17
closedIssues: 50
watchers: 243
contributors: 65
recentReleases: 0
createdAt: "2019-01-09T21:49:50Z"
lastCommitAt: "2026-07-28T14:57:25Z"
lastReleaseAt: "2019-05-29T16:46:58Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 94
undervaluedScore: 40
maintainers: ["svc-excavator-bot", "svc-autorelease", "mpritham"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cc756645bb352ca4352de6e18dcc7c4b835c6778f6b051d0afe8048e0ae33fb/palantir/dialogue"
---

</p>

# Dialogue [](https://opensource.org/licenses/Apache-2.0)

_Dialogue is a client-side library for HTTP-based RPC, designed to work well with [Conjure](https://palantir.github.io/conjure)-defined APIs._

## Features

- **ConcurrencyLimiters**: additive increase multiplicative decrease (AIMD) concurrency limiters ensure bursty traffic doesn't overload upstream servers.
- **Client-side node selection**: by making load balancing decisions in the client, Dialogue avoids the necessity for an L7 proxy (and its associated latency penalty).
- **Queue**: in the case where all nodes are limited (e.g. during a spike in traffic), requests are added to a FIFO queue and processed as soon as the one of the ConcurrencyLimiters has capacity.
- **Retries**: requests are retried a constant number of times, if possible.
- **Live reloading**: uris can be added or removed without losing ConcurrencyLimiter or node selection states.
- **Content decoding**: JSON, [SMILE](https://github.com/FasterXML/jackson-dataformats-binary/tree/master/smile) and [CBOR](https://github.com/FasterXML/jackson-dataformats-binary/tree/master/cbor) are supported by default, with user-defined encodings also supported.
-…

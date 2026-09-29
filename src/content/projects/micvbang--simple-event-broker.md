---
repo: "micvbang/simple-event-broker"
name: "simple-event-broker"
description: "event broker with a focus on low operational cost"
readmeQualityOk: true
url: "https://github.com/micvbang/simple-event-broker"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["events", "eventsourcing", "low-cost"]
stars: 50
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-09-23T16:43:01Z"
lastCommitAt: "2026-09-29T08:08:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 23
maintainers: ["micvbang"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ef608a07cb0c43b90ae86ba6e414ed566b18249549faded501cd36583c276c/micvbang/simple-event-broker"
---

# simple-event-broker

Seb is an event broker that was inspired by [Kafka](https://kafka.apache.org/), [Warp Stream](https://www.warpstream.com/), and [turbopuffer](https://turbopuffer.com/). It explicitly trades latency for simpler code and low operational costs by utilizing cloud object storage; local disk is only used for caching.

There's an ongoing blog series on the development of Seb:

- [Hello World, Simple Event Broker!](https://blog.vbang.dk/2024/05/26/seb/)
- [Simple event broker tries Tiger Style](https://blog.vbang.dk/2024/07/10/seb-tiger-style/)
- [Simple event broker: data serialization is expensive](https://blog.vbang.dk/2024/09/10/seb-tiger-style-read-path/)

## Goals

The design goals of Seb are, in order:

1) cheap to run
2) easy to manage
3) easy to use

The goal “don’t lose my data” is actually the very first goal on that list, but I wanted a list of three, and I thought not losing data reasonably could be assumed to be table stakes. Let’s call that item 0.

Seb explicitly does not attempt to reach sub-millisecond latencies nor scale to fantastic workloads. If you need this, there are systems infinitely more capable, designed for exactly these workloads. See…

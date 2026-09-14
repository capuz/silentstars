---
repo: "softwaremill/jox"
name: "jox"
description: "Virtual-thread based safe concurrency & streaming"
readmeQualityOk: true
url: "https://github.com/softwaremill/jox"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["channels", "concurrency", "java", "loom", "streaming"]
stars: 421
forks: 17
openIssues: 13
closedIssues: 46
watchers: 20
contributors: 20
recentReleases: 0
createdAt: "2023-11-08T12:58:16Z"
lastCommitAt: "2026-09-14T09:11:55Z"
lastReleaseAt: "2024-09-04T10:47:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 34
maintainers: ["renovate[bot]", "adamw", "Mendrejk"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f76d1c4a40035499aeae13ab95ae680c30f22744cfe921946c9a0089e6efb06/softwaremill/jox"
---

# Jox

[Virtual-thread](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html) based safe concurrency & streaming
for Java.

Includes:

* Fast & scalable, completable channels, with Go-like `select`s (Java 21+)
* Programmer-friendly structured concurrency (Java 25 only)
* Finite & infinite streaming using flows, with reactive streams compatibility, (blocking) I/O integration and a
  high-level, “functional” API (Java 25 only)
* Flow integrations: Kafka, streaming JSON (NDJSON, JSON arrays) (Java 25 only)

Find out more in the documentation available at [jox.softwaremill.com](https://jox.softwaremill.com/).

## A tour of Jox

Selectable [channels](https://jox.softwaremill.com/latest/channels.html):

```
var ch1 = Channel.<Integer>newBufferedDefaultChannel();
var ch2 = Channel.<Integer>newBufferedDefaultChannel();
var ch3 = Channel.<Integer>newBufferedDefaultChannel();

// send a value to two channels
ch2.send(29);
ch3.send(32);

var received = select(ch1.receiveClause(), ch2.receiveClause(), ch3.receiveClause());
```

A push-based, backpressured [flow](https://jox.softwaremill.com/latest/flows.html) with time-based & parallel
processing:

```
var nats =…

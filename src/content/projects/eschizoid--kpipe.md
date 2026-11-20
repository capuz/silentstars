---
repo: "eschizoid/kpipe"
name: "kpipe"
description: "Composable Kafka consumer library for building modular, testable JVM data pipelines."
readmeQualityOk: true
url: "https://github.com/eschizoid/kpipe"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["apache-kafka", "data-pipelines", "event-driven", "functional-programming", "java", "kafka", "stream-processing"]
stars: 58
forks: 7
openIssues: 5
closedIssues: 55
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2025-04-10T04:57:24Z"
lastCommitAt: "2026-11-20T12:24:26Z"
lastReleaseAt: "2026-03-29T09:39:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["eschizoid", "dependabot[bot]", "Sage-Pierce"]
openGraphImageUrl: "https://opengraph.githubassets.com/42cf0db836cdc10186f2b6dd0bea035e2f1bee2f686eebddbd4c8f196cc99cc7/eschizoid/kpipe"
discussionCount: 4
---

# kpipe

**Parallel Kafka consumption at full speed, without giving up at-least-once.**

KPipe is a plain-JVM Kafka consumer runtime for Java 25+. It runs every record on its own virtual thread and never
commits past a record that has not finished. In `PARALLEL` mode it is as fast as the fastest alternative that keeps that
guarantee, and 5 to 8 times faster than Confluent Parallel Consumer, behind a typed, fluent API you can test without a
broker. It replaces the hand-rolled `Consumer.poll` loop that most Kafka services grow around their business logic: you
declare a pipeline (deserialize, transform, sink) and KPipe runs it.

---
repo: "streamshub/console"
name: "console"
description: "Web console to interact with Apache Kafka® instances running in a Kubernetes cluster managed by Strimzi Cluster Operator"
readmeQualityOk: true
url: "https://github.com/streamshub/console"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [62, 36]
stars: 32
forks: 33
openIssues: 33
closedIssues: 174
watchers: 6
contributors: 28
recentReleases: 0
createdAt: "2023-05-23T13:34:34Z"
lastCommitAt: "2026-10-08T10:52:13Z"
lastReleaseAt: "2023-10-13T15:11:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["dependabot[bot]", "MikeEdgar", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ac9632dd7e54a48ee8856e3aa59cbbeaab83b5da760ac105723cb11e320b2c7/streamshub/console"
discussionCount: 9
---

# StreamsHub Console for Apache Kafka<sup>®</sup>
StreamsHub Console is a web application designed to facilitate interactions with Apache Kafka<sup>®</sup> instances, optionally leveraging the [Strimzi](https://strimzi.io) Cluster Operator for Kafka<sup>®</sup> instances running on Kubernetes.
It is composed of three main parts:
- a [REST API](https://github.com/streamshub/console/blob/HEAD/api) backend developed with Java and [Quarkus](https://quarkus.io/)
- a [user interface (UI)](https://github.com/streamshub/console/blob/HEAD/ui) built with [Next.js](https://nextjs.org/) and [PatternFly](https://patternfly.org)
- a Kubernetes [operator](https://github.com/streamshub/console/blob/HEAD/operator) developed with Java and [Quarkus](https://quarkus.io/)

## Features

- Cluster overview

  High-level cluster information, include storage, memory, and CPU utilization.

- Topics

  List Kafka topics & view messages, partition information, and configurations

- Kafka nodes

  See information on each node in the Kafka cluster, including support for KRaft (ZooKeeper-less Kafka)

- Consumer groups

  View, inspect, and alter committed offsets for consumer groups in the Kafka cluster

##…

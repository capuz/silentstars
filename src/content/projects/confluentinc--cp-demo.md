---
repo: "confluentinc/cp-demo"
name: "cp-demo"
description: "Confluent Platform Demo including Apache Kafka, ksqlDB, Control Center, Schema Registry, Security, Schema Linking, and Cluster Linking"
readmeQualityOk: true
url: "https://github.com/confluentinc/cp-demo"
language: "Shell"
languages: ["Shell"]
languagePcts: [83]
topics: ["kafka", "demo", "ksql", "security", "ssl", "sasl", "connect", "confluent", "confluent-platform", "ksqldb"]
stars: 75
forks: 324
openIssues: 9
closedIssues: 49
watchers: 151
contributors: 746
recentReleases: 0
createdAt: "2017-10-04T19:38:13Z"
lastCommitAt: "2026-09-17T08:50:50Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 47
maintainers: ["semaphore-agent-production[bot]"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/9439498?s=400&v=4"
---

# Kafka Event Streaming Applications

This example and accompanying tutorial show users how to deploy an Apache Kafka® event streaming application using [ksqlDB](https://ksqldb.io?utm_source=github&utm_medium=demo&utm_campaign=ch.cp-demo_type.community_content.cp-demo) and [Kafka Streams](https://docs.confluent.io/platform/current/streams/index.html?utm_source=github&utm_medium=demo&utm_campaign=ch.cp-demo_type.community_content.cp-demo) for stream processing. All the components in the Confluent Platform have security enabled end-to-end. Run the example with the [tutorial](https://docs.confluent.io/platform/current/tutorials/cp-demo/docs/index.html?utm_source=github&utm_medium=demo&utm_campaign=ch.cp-demo_type.community_content.cp-demo).

**Table of Contents**

- [Overview](#overview)
- [Documentation](#documentation)

## Overview

The use case is a Kafka event streaming application for real-time edits to real Wikipedia pages.
Wikimedia's EventStreams publishes a continuous stream of real-time edits happening to real wiki pages.
Using Kafka Connect, a Kafka source connector `kafka-connect-sse` streams raw messages for the server sent events (SSE), and a custom Kafka Connect…

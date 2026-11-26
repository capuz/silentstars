---
repo: "KafScale/platform"
name: "platform"
description: "Kafka-compatible streaming that keeps your data in S3. Stateless brokers, standard Kafka clients, Apache 2.0."
readmeQualityOk: true
url: "https://github.com/KafScale/platform"
homepage: "https://kafscale.io"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["golang", "kafka", "connect", "kafscale", "stream-processing", "data-pipelines", "iceberg", "kafka-protocol", "kubernetes", "object-storage"]
stars: 59
forks: 16
openIssues: 0
closedIssues: 119
watchers: 3
contributors: 6
recentReleases: 1
createdAt: "2025-12-16T14:28:11Z"
lastCommitAt: "2026-11-26T13:01:53Z"
lastReleaseAt: "2026-10-15T13:22:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["novatechflow", "nextammy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a6368db32d798290efb870cbce5978e053dd1d30fae66745584c6a9f48de20f/KafScale/platform"
discussionCount: 2
---

# KafScale

**Kafka-compatible streaming that keeps your log in S3. Stateless brokers, standard Kafka clients, Apache 2.0.**

KafScale is a Kafka-protocol compatible streaming platform built around a simple premise:  
**durable logs belong in object storage, not in stateful brokers**.

Traditional Kafka couples durability, replication, and compute into long-lived broker processes.  
This made sense in a disk-centric world. It becomes an operational and economic liability once object storage is available.

KafScale separates concerns cleanly. Brokers are stateless and ephemeral. Durability lives in S3.  
The Kafka protocol remains intact.

KafScale is open source under the Apache 2.0 license and implemented in Go.  
(KafScale is not a registered trademark.)

[See all demos](https://kafscale.io/demos/)

---

For upgrades, see the [upgrade and compatibility guide](https://github.com/KafScale/platform/blob/HEAD/docs/upgrade-compatibility.md).

## Try it locally

You need Docker Compose v2.20+ and a native [kcat](https://github.com/edenhill/kcat#install)
client. No Go toolchain or Kubernetes cluster is required.

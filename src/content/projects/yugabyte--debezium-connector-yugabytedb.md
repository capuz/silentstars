---
repo: "yugabyte/debezium-connector-yugabytedb"
name: "debezium-connector-yugabytedb"
description: "A Debezium CDC connector for the YugabyteDB database "
readmeQualityOk: true
url: "https://github.com/yugabyte/debezium-connector-yugabytedb"
homepage: "https://docs.yugabyte.com/stable/explore/change-data-capture/using-logical-replication/yugabytedb-connector/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 18
forks: 13
openIssues: 26
closedIssues: 69
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2022-05-23T06:29:23Z"
lastCommitAt: "2026-09-17T08:52:06Z"
lastReleaseAt: "2022-12-09T08:54:23Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 72
maintainers: ["shishir2001-yb", "bdbene", "devansh5398"]
openGraphImageUrl: "https://opengraph.githubassets.com/afe08c900687a00df239e64d2973c469b7db2e501667ca45e02e69e6700344ce/yugabyte/debezium-connector-yugabytedb"
---

# Ingesting YugabyteDB change events

This module defines the connector that ingests change events from YugabyteDB databases.

## Using the YugabyteDB connector with Kafka Connect

The YugabyteDB connector is designed to work with [Kafka Connect](http://kafka.apache.org/documentation.html#connect) and to be deployed to a Kafka Connect runtime service. The deployed connector will monitor one or more schemas within a database server and write all change events to Kafka topics, which can be independently consumed by one or more clients. Kafka Connect can be distributed to provide fault tolerance to ensure the connectors are running and continually keeping up with changes in the database.

Kafka Connect can also be run standalone as a single process, although doing so is not tolerant of failures.

## Embedding the YugabyteDB connector

The YugabyteDB connector can also be used as a library without Kafka or Kafka Connect, enabling applications and services to directly connect to a YugabyteDB database and obtain the ordered change events. This approach requires the application to record the progress of the connector so that upon restart the connect can continue where it left off.…

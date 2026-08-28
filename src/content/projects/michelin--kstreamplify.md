---
repo: "michelin/kstreamplify"
name: "kstreamplify"
description: "Swiftly build and enhance your Kafka Streams applications."
readmeQualityOk: true
url: "https://github.com/michelin/kstreamplify"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["kafka", "kafka-streams", "spring-boot", "java", "topology"]
stars: 147
forks: 28
openIssues: 10
closedIssues: 44
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2023-02-13T09:11:40Z"
lastCommitAt: "2026-08-28T14:32:16Z"
lastReleaseAt: "2025-02-21T08:35:46Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 43
maintainers: ["dependabot[bot]", "loicgreffier", "michelinbot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/601052996/5c77ec09-bc75-4bfa-a5cc-8459b38ff663"
---

# Kstreamplify

[Overview](#overview) • [Getting Started](#getting-started)

Swiftly build and enhance your Kafka Streams applications.

Kstreamplify adds extra features to Kafka Streams, simplifying development so you can write applications with minimal effort and stay focused on business implementation.

</div>

## Table of Contents

* [Overview](#overview)
* [Getting Started](#getting-started)
  * [Spring Boot](#spring-boot)
  * [Java](#java)
  * [Unit Test](#unit-test)
    * [Override Properties](#override-properties)
* [Avro Serializer and Deserializer](#avro-serializer-and-deserializer)
* [Error Handling](#error-handling)
  * [Set up DLQ Topic](#set-up-dlq-topic)
  * [Processing Errors](#processing-errors)
    * [Processing Exception Handler](#processing-exception-handler)
    * [Processing Result API](#processing-result-api)
      * [DSL](#dsl)
      * [Processor API](#processor-api)
      * [Migrating to Processing Exception Handler](#migrating-to-processing-exception-handler)
  * [Deserialization Errors](#deserialization-errors)
  * [Production Errors](#production-errors)
  * [Avro Kafka Error](#avro-kafka-error)
  * [Uncaught Exception…

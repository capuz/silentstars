---
repo: "j3-signalroom/confluent-kafka-isotope"
name: "confluent-kafka-isotope"
description: "End-to-end tracing and provenance for Kafka pipelines. Kafka Interceptors and Flink UDFs stamp an \"isotope\" into record headers; Flink SQL turns it into latency, topology, lineage and state-level provenance, Prometheus into live metrics, and an Iceberg lakehouse keeps the history. Runs on Confluent Platform and Confluent Cloud for Apache Flink."
readmeQualityOk: true
url: "https://github.com/j3-signalroom/confluent-kafka-isotope"
homepage: "https://thej3.com/kafkas-quiet-observability-superpower-kafka-interceptors-aca88c33867e"
language: "Java"
languages: ["Java", "HCL"]
languagePcts: [38, 27]
topics: ["flink-sql", "flink-udf", "kafka-consumer", "kafka-interceptor", "kafka-producer", "ptf", "prometheus", "grafana", "apache-flink", "confluent"]
stars: 5
forks: 0
openIssues: 6
closedIssues: 194
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-13T12:56:26Z"
lastCommitAt: "2026-11-06T13:19:51Z"
lastReleaseAt: "2026-06-07T00:11:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 59
maintainers: ["j3-signalroom"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c6b434288b8cce3bbcd5d527533a45c3f98c5171d3ba7865383876306f41f86/j3-signalroom/confluent-kafka-isotope"
---

# Confluent Kafka Isotope

**Table of Contents**

- [**Purpose**](#purpose)
- [**1.0 How an Isotope Traverses an Event Pipeline**](#10-how-an-isotope-traverses-an-event-pipeline)
  + [**1.1 Anatomy of the Isotope Tracing Artifact**](#11-anatomy-of-the-isotope-tracing-artifact)
- [**2.0 Architecture**](#20-architecture)
- [**3.0 Getting Started**](#30-getting-started)
  + [**3.1 Integration Tests with Confluent Platform on minikube**](#31-integration-tests-with-confluent-platform-on-minikube)
  + [**3.2 Seven Scalar Headers Flink SQL Reports with Apache Flink on minikube**](#32-seven-scalar-headers-flink-sql-reports-with-apache-flink-on-minikube)
  - [**3.3 Seven Scalar Headers Flink SQL Reports with Confluent Cloud for Apache Flink**](#33-seven-scalar-headers-flink-sql-reports-with-confluent-cloud-for-apache-flink)
    + [**3.3.1 Why `latency_percentiles` is a `ProcessTableFunction` (PTF)**](#331-why-latency_percentiles-is-a-processtablefunction-ptf)
    + [**3.3.2 [OPTIONAL] Eighth Report — AI Root-Cause Analysis (RCA)**](#332-optional-eighth-report--ai-root-cause-analysis-rca)
  + [**3.4 [OPTIONAL] Prometheus Metrics Reporting with Grafana…

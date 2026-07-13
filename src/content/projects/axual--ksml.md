---
repo: "Axual/ksml"
name: "ksml"
description: "Kafka Streams without Java"
readmeQualityOk: true
url: "https://github.com/Axual/ksml"
homepage: "https://axual.github.io/ksml/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["apachekafka", "kafkastreams", "lowcode", "streamprocessing", "kafka-streams", "stream-processing"]
stars: 36
forks: 14
openIssues: 15
closedIssues: 99
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2021-05-03T11:37:20Z"
lastCommitAt: "2026-07-13T06:38:12Z"
lastReleaseAt: "2024-05-28T20:19:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 63
maintainers: ["pantelis-Ypsilantis", "dependabot[bot]", "KasparMetsa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9482ce06ed08289319025ab2eee9624497d917bedd2a3c7ad6cac139708346e5/Axual/ksml"
---

# KSML – Kafka Streams without Java

KSML is a wrapper language and interpreter around Kafka Streams
that lets you express any topology in a YAML syntax. Simply define
your topology as a processing pipeline with a series of steps that
your data passes through. Your custom functions can be expressed
inline in Python. KSML will read your definition and construct the
topology dynamically via the Kafka Streams DSL and run it in GraalVM.

KSML was started by Axual in early 2021 and open-sourced in May 2021.

## Why KSML?

Kafka Streams is powerful but **Java-centric**. KSML eliminates the Java boiler-plate through:

* **Declarative YAML** for topology wiring
* **User-defined functions in Python** for customized business logic
* **One command** to package and run (container image or in your own JVM)

## Language

To quickly jump to the KSML specification, use this link: https://axual.github.io/ksml/

## Examples

The following examples are provided in the `examples` directory:

| Filename                                                                                    | Description…

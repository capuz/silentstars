---
repo: "apache/paimon-cpp"
name: "paimon-cpp"
description: "Paimon-cpp is a high-performance C++ implementation of Apache Paimon."
readmeQualityOk: true
url: "https://github.com/apache/paimon-cpp"
homepage: "https://paimon.apache.org/docs/cpp/"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["apache", "cpp", "paimon"]
stars: 65
forks: 31
openIssues: 16
closedIssues: 57
watchers: 0
contributors: 38
recentReleases: 1
createdAt: "2026-05-21T12:14:49Z"
lastCommitAt: "2026-09-22T08:44:51Z"
lastReleaseAt: "2026-08-12T03:02:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 42
maintainers: ["lxy-9602", "lucasfang", "zjw1111"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa98cf89efc04c20395e232432bf6fee43ac429f1badbe97226246d3dee8c964/apache/paimon-cpp"
---

# Apache Paimon C++

Paimon C++ is the C++ implementation of [Apache Paimon](https://paimon.apache.org).
It provides native, high-performance, and extensible access to the Paimon lake format for C++ engines and services without JVM dependencies.

Background and documentation are available at [paimon.apache.org](https://paimon.apache.org).

## Features

Paimon C++ currently provides:

- **Write**: append table and primary key table write support with compaction.
- **Commit**: append table commit support for simple append-only tables.
- **Scan**: batch and stream scan for append tables and primary key tables without changelog.
- **Read**: append table read, primary key table read with deletion vector, and primary key table merge-on-read.
- **Arrow integration**: batch read and write interfaces based on the [Arrow Columnar In-Memory Format](https://arrow.apache.org).
- **File systems**: file system abstraction with built-in local, Jindo, OSS, and S3 file system support.
- **File formats**: file format abstraction with built-in ORC, Parquet, and Avro support.
- **Runtime utilities**: memory pool and thread pool abstractions with default implementations.
- **AI-Oriented Features**:…

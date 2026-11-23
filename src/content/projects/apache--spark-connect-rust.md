---
repo: "apache/spark-connect-rust"
name: "spark-connect-rust"
description: "Apache Spark Connect Client for Rust (Rust core + Python wrapper)"
readmeQualityOk: true
url: "https://github.com/apache/spark-connect-rust"
homepage: "https://apache.github.io/spark-connect-rust/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [59, 39]
topics: ["data", "distributed", "rust", "spark", "spark-connect"]
stars: 52
forks: 25
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 40
recentReleases: 0
createdAt: "2025-05-26T07:22:15Z"
lastCommitAt: "2026-11-23T12:22:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 55
maintainers: ["HyukjinKwon", "dbtsai"]
openGraphImageUrl: "https://opengraph.githubassets.com/67f8bf135d035d9063b6a4eecc2b5c69085b8dc0a436f4aff860f677e5f3a34e/apache/spark-connect-rust"
---

# Spark Connect Rust Client

A fast, native **Rust** client for **Apache Spark Connect** - and a drop-in
`pyspark` replacement with **100% public-API parity with PySpark 4.3.0**. It
builds `spark.connect` protobuf plans, manages the gRPC channel, and decodes
Arrow results in Rust, speaking the same protocol and returning the same results
as the reference client.

## 📖 Documentation

**Full documentation lives at
[apache.github.io/spark-connect-rust](https://apache.github.io/spark-connect-rust/)**
- installation, quickstart, the DataFrame / Columns / SQL / Reading &
Writing / Streaming / Catalog / Types API, [Rust UDFs via
WebAssembly](https://apache.github.io/spark-connect-rust/udfs/), and the
[architecture](https://apache.github.io/spark-connect-rust/architecture/).

The **Rust API reference** (generated from the crate) is on
[docs.rs/apache-spark-connect](https://docs.rs/apache-spark-connect).

## Install

**Python** - a faster, drop-in replacement for the
[`pyspark-client`](https://pypi.org/project/pyspark-client/) PyPI package
(uninstall any existing `pyspark` / `pyspark-client` first):

```bash
pip install pyspark-client-rust
```

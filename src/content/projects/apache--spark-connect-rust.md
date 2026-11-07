---
repo: "apache/spark-connect-rust"
name: "spark-connect-rust"
description: "Apache Spark Connect Client for Rust (Rust core + Python wrapper)"
readmeQualityOk: true
url: "https://github.com/apache/spark-connect-rust"
homepage: "https://apache.github.io/spark-connect-rust/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [67, 33]
topics: ["data", "distributed", "rust", "spark", "spark-connect"]
stars: 50
forks: 22
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 37
recentReleases: 0
createdAt: "2025-05-26T07:22:15Z"
lastCommitAt: "2026-11-07T10:36:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 55
maintainers: ["HyukjinKwon", "dbtsai", "zhengruifeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/213d0655a1412475bd8f7ad1f0d8d3900d3b0fbec9d278e17e241cca2d038eb7/apache/spark-connect-rust"
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

Your Spark Connect code then runs unchanged;…

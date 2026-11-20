---
repo: "zilliztech/spark-milvus"
name: "spark-milvus"
description: "spark connector for Milvus"
readmeQualityOk: true
url: "https://github.com/zilliztech/spark-milvus"
language: "Scala"
languages: ["Scala", "Python"]
languagePcts: [65, 30]
stars: 22
forks: 22
openIssues: 2
closedIssues: 42
watchers: 2
contributors: 20
recentReleases: 2
createdAt: "2024-02-04T03:59:55Z"
lastCommitAt: "2026-11-19T11:51:59Z"
lastReleaseAt: "2026-11-12T07:47:05Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 79
maintainers: ["congqixia", "santiago-wjq", "shaoting-huang"]
openGraphImageUrl: "https://opengraph.githubassets.com/676fd6ad127516778d82900f1342b5a5caa45f6b18521525c57c38d7eac75bf2/zilliztech/spark-milvus"
---

# Spark-Milvus

**Read and write Milvus Collection data with Apache Spark.**

Spark-Milvus brings Milvus Collection data into Spark DataFrames for
analysis, data cleaning and batch updates using Spark SQL, Scala or PySpark.

## Why Spark-Milvus

Milvus powers online vector search. Spark-Milvus makes the same Collection
data available to Spark for offline processing, connecting retrieval and
data preparation workflows.

With Spark-Milvus, you can:

- **Analyze Collection data**: Join it with other data sources, inspect
  field values and measure data quality using familiar Spark operations.
- **Update existing fields in batches**: Clean text, standardize metadata
  or compute replacement values, then write the results to Milvus data files.

For example, Milvus can serve similar-product searches from a product
Collection. Spark can read that Collection, join it with a product catalog
to identify inconsistent descriptions, and write back corrected values.
Your application controls when those updates are submitted to Milvus
and become visible to online queries.

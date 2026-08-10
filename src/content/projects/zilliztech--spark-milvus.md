---
repo: "zilliztech/spark-milvus"
name: "spark-milvus"
description: "spark connector for Milvus"
readmeQualityOk: true
url: "https://github.com/zilliztech/spark-milvus"
language: "Scala"
languages: ["Scala"]
languagePcts: [97]
stars: 17
forks: 20
openIssues: 10
closedIssues: 9
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2024-02-04T03:59:55Z"
lastCommitAt: "2026-08-10T05:06:14Z"
lastReleaseAt: "2025-06-05T07:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 52
maintainers: ["congqixia", "tsunghanjacktsai", "shaoting-huang"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4449f32a5411cf8debf4a48307a50e2d7572b4e2a22f269f381dec6c92ba3ce/zilliztech/spark-milvus"
---

# Milvus Spark Connector

## Version Compatibility

**This connector requires Milvus 2.6 or later** (Storage V2).

For Milvus 2.5 and earlier versions, please use the `legacy` branch which is no longer actively maintained.

## Environment Preparation

**Machine Requirements:** Minimum 2 CPU cores and 8GB RAM.

To ensure smooth operation, it is critical to use consistent versions of the required tools. Mismatched versions may lead to compatibility issues.

1. [**SDKMAN**](https://sdkman.io/) is recommended for managing Scala and Spark environments.
2. **Java Version:** 21
3. **Scala Version:** 2.13.16
4. **Spark Version:** 4.0.1 (built with Scala 2.13)
5. **SBT Version:** 1.11.1

If you are using SDKMAN, you can quickly install Java, Scala, and SBT as follows:

```bash
sdk install java 21.0.5-zulu
sdk install scala 2.13.16
sdk install sbt 1.11.1
```

The Spark version provided by SDKMAN only supports Scala 2.12. Therefore, you need to manually install the Spark version compatible with Scala 2.13. You can download it from the following link: [Spark Download](https://www.apache.org/dyn/closer.lua/spark/spark-4.0.1/spark-4.0.1-bin-hadoop3-scala2.13.tgz).

### Spark Submit…

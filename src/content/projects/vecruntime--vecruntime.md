---
repo: "vecruntime/vecruntime"
name: "vecruntime"
description: "A vectorized execution runtime for Apache Spark SQL using Java"
readmeQualityOk: true
url: "https://github.com/vecruntime/vecruntime"
homepage: "https://vecruntime.github.io/vecruntime/"
language: "Scala"
languages: ["Scala", "Java"]
languagePcts: [55, 42]
stars: 11
forks: 0
openIssues: 92
closedIssues: 296
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-16T07:59:02Z"
lastCommitAt: "2026-10-23T08:46:55Z"
lastReleaseAt: "2026-10-19T05:28:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 57
maintainers: ["Neuw84"]
openGraphImageUrl: "https://opengraph.githubassets.com/415a70d0595896ac8fe553faf3f07431c6803bf0148438723b54cff011fb1926/vecruntime/vecruntime"
---

# VecRuntime

**A vectorized execution runtime for Apache Spark SQL using Java**

VecRuntime accelerates Spark SQL workloads by executing core operators directly on **Arrow-layout columnar
batches** using the **Java Vector API**, bringing SIMD-optimized execution to the JVM without native
libraries, JNI, or serialization boundaries.

Inspired by the execution architecture of Apache DataFusion Comet, VecRuntime runs **Filter, Project,
HashAggregate, Sort, Window, Range, Expand, Generate, Union and the hash, sort-merge and nested-loop joins**,
with its own Parquet scan and its own columnar shuffle over Arrow Flight. Spark remains the fallback for
any unsupported operator, expression or data type, always with a recorded reason. It can also run on top of
**Apache DataFusion Comet**'s native scan and shuffle, over the same columnar representation.

### Key characteristics

* **JVM-native:** no native runtime, JNI, or external execution engine.
* **SIMD-accelerated:** uses the Java Vector API (`jdk.incubator.vector`) for hardware-vectorized execution,
  on x86 (AVX2, AVX-512) and arm64 (NEON, SVE).
* **Columnar by design:** operators consume and produce Arrow-layout batches.
*…

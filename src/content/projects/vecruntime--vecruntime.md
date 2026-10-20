---
repo: "vecruntime/vecruntime"
name: "vecruntime"
description: "A vectorized execution runtime for Apache Spark SQL using Java"
readmeQualityOk: true
url: "https://github.com/vecruntime/vecruntime"
homepage: "https://vecruntime.github.io/vecruntime/"
language: "Scala"
languages: ["Scala", "Java"]
languagePcts: [57, 39]
stars: 11
forks: 0
openIssues: 79
closedIssues: 291
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-16T07:59:02Z"
lastCommitAt: "2026-10-20T08:49:16Z"
lastReleaseAt: "2026-10-19T05:28:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 57
maintainers: ["Neuw84"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2a90a0cd00bd821bd920a52bd8eae85d0a4a028d4000348f03c06341edba4d1/vecruntime/vecruntime"
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

---
repo: "calvinchengx/fabric-emulator"
name: "fabric-emulator"
description: "Local Microsoft Fabric emulator in one Go binary. Control plane, OneLake, T-SQL warehouse and Spark, verified against unmodified Microsoft tools."
readmeQualityOk: true
url: "https://github.com/calvinchengx/fabric-emulator"
homepage: "https://calvinchengx.github.io/fabric-emulator/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [64, 28]
topics: ["azure", "delta-lake", "emulator", "entra-id", "golang", "microsoft-fabric", "onelake", "spark", "testing"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-13T09:12:19Z"
lastCommitAt: "2026-08-17T04:18:56Z"
lastReleaseAt: "2026-07-31T10:22:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["calvinchengx"]
openGraphImageUrl: "https://opengraph.githubassets.com/19b08dee5f2fb58b0397c4e77f8b63c55ebc39681fac259a465b26251ab18a2a/calvinchengx/fabric-emulator"
---

# fabric-emulator

> Coverage measures the **unit** suites. What catches consumer-facing defects is
> the e2e fleet, which no percentage scores — hence *parity claims witnessed*
> beside it: every claim of support names a test that exists and ran.

A clean-room, local emulator of **Microsoft Fabric**, built to compose with
[entra-emulator](https://github.com/calvinchengx/entra-emulator) — the control
plane (workspaces, items, RBAC, git, LROs, Fabric Core MCP) plus a real
**OneLake** ADLS/Blob data plane, a **T-SQL warehouse** over TDS, native
**Livy** sessions on a real Spark engine, **Data Factory** pipelines (Web,
REST, Salesforce, and Azure Batch Custom on by default), **Apache Airflow**
jobs on a real Airflow scheduler, **KQL** eventhouses, and **Eventstream**
on a real Apache Kafka broker (Lakehouse and Reflex destinations included).

**That is not a mock-up — it is the example below, filmed.** Three source
systems land, get conformed, resolve into one customer identity, and reach a
Warehouse star that Power BI queries: PySpark on a real engine for
bronze → silver, dbt-fabric over real TDS for gold. The run then publishes
itself to **OpenMetadata** — domain, glossary,…

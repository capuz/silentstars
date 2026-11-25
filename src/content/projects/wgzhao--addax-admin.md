---
repo: "wgzhao/addax-admin"
name: "addax-admin"
description: "T+1 ODS collection console for the Addax offline engine: collection definitions, scheduling, backfill, reconciliation, alerting and audit in one place."
originalDescription: "面向 Addax 离线引擎的 T+1 ODS 采集控制台：采集定义、调度、补数、对账、告警与审计一体。 | Enterprise T+1 ODS console for the Addax offline ETL engine: collection definitions, scheduling, backfill, reconciliation, alerting and audit in one place."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wgzhao/addax-admin"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [49, 28]
topics: ["etl", "typescript", "vue3", "addax", "data-engineering", "data-integration", "data-observability", "data-pipeline", "dataops", "elasticsearch"]
stars: 38
forks: 9
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-29T06:12:53Z"
lastCommitAt: "2026-11-25T03:13:18Z"
lastReleaseAt: "2026-05-25T01:14:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["wgzhao"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/684442413/03dc3a08-6027-411a-b6b2-e95d1c856e44"
---

T+1 ODS collection console for the <a href="https://github.com/wgzhao/addax">Addax</a> offline engine

  Simplified Chinese · <a href="README_en.md">English</a>

---

## Product Positioning

Addax Admin is an enterprise-grade management and operations console for the Addax offline ETL engine, focused on **T+1 ODS layer data landing**. In a single interface it covers the full loop of collection definition, scheduled execution, backfill, data reconciliation, alerting and auditing, helping data teams answer three questions: Is today's collection healthy? Is the data landing correctly? When something goes wrong, can it be quickly located and traced?

| Suitable scenarios | Explicitly out of scope |
| --- | --- |
| T+1 offline collection and ODS landing | Real-time CDC / streaming sync |
| Hive and relational databases as targets | General ETL transformation (T is handed off to downstream Hive / dbt / Spark) |
| Onboarding heterogeneous sources such as MongoDB and Elasticsearch | General-purpose DAG orchestration platform |
| Teams needing multi-node high availability, auditing and source-level authorization | General-purpose data quality platform |

---

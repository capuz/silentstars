---
repo: "SOFTNETWORK-APP/SoftClient4ES"
name: "SoftClient4ES"
description: "SoftClient4ES is a modular and version-resilient interface built on top of Elasticsearch clients, providing a unified and stable API that simplifies migration across Elasticsearch versions, accelerates development, and offers advanced features for search, indexing, and data manipulation."
readmeQualityOk: true
url: "https://github.com/SOFTNETWORK-APP/SoftClient4ES"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
topics: ["akka-streams", "elasticsearch", "scala", "sql", "adbc", "arrow-flight-sql", "grafana", "jdbc-driver", "powerbi", "superset"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 152
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-06-08T13:58:52Z"
lastCommitAt: "2026-09-14T09:11:57Z"
lastReleaseAt: "2025-11-07T08:22:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 78
maintainers: ["fupelaqu"]
openGraphImageUrl: "https://opengraph.githubassets.com/da8ecbebac7e172870615814295c39a3f9cda231cd78879d07141cb6a3d4dfc9/SOFTNETWORK-APP/SoftClient4ES"
discussionCount: 1
---

# 

🌐 **Website:** [softclient4es.dev/](https://softclient4es.dev/)

**SoftClient4ES** is a powerful SQL gateway for Elasticsearch. Query, manipulate, and manage your Elasticsearch data using familiar SQL syntax — including **cross-index JOINs**, which Elasticsearch has no native support for — through an interactive **REPL client**, a **JDBC driver**, an **Arrow Flight SQL** server, or as a **Scala library**.

## 🎬 See It Run

Two indices created, bulk-loaded from JSON with `COPY INTO`, aggregated across a
**cross-index JOIN** with `GROUP BY` / `HAVING`, then materialised into a new index with
`CREATE TABLE … AS SELECT` — and that new index joined straight back, because the result of
a JOIN is a first-class index like any other. One REPL session. No ETL, no second copy of
your data.

<sub>Every response and latency above is real output captured from a live Elasticsearch 8.18.3 on a free Community licence. The typing pace is edited for length — no recorder can drive the REPL's line editor without stalling, so the session is composed from captured output rather than screen-recorded. The seven statements, verbatim: <a href="demo/cast-src/final.sql">demo/cast-src/final.sql</a></sub>…

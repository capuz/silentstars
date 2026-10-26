---
repo: "Victor-Kipruto-Rop/Real_Time_Transaction_Streaming-MPESA-"
name: "Real_Time_Transaction_Streaming-MPESA-"
description: "Real-Time M-Pesa Transaction Streaming Pipeline built using modern data engineering technologies to ingest, process, stream, and analyze transaction data in real time. Demonstrates event-driven architecture, stream processing, data pipelines, and scalable analytics for fintech applications."
readmeQualityOk: true
url: "https://github.com/Victor-Kipruto-Rop/Real_Time_Transaction_Streaming-MPESA-"
homepage: "https://github.com/Victor-Kipruto-Rop/Real_Time_Transaction_Streaming-MPESA-/pkgs/container/mpesa-transaction-streaming"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["apache", "apache-kafka", "apache-spark", "data-engineering", "data-pipeline", "data-pipeline-monitoring", "etl", "etl-pipeline", "postgresql", "real-time-streaming"]
stars: 46
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-16T05:29:36Z"
lastCommitAt: "2026-10-26T18:06:54Z"
status: "thriving"
tags: []
healthScore: 57
undervaluedScore: 5
maintainers: ["Victor-Kipruto-Rop", "kipruto24victor-pixel", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cbfc80075f7eb325de8981e21521cc340bcccb9c9f6b46e9deb9a14afbfc29e/Victor-Kipruto-Rop/Real_Time_Transaction_Streaming-MPESA-"
---

# PesaGuard Transaction Streaming

Python-based M-Pesa transaction ingestion and event-streaming subsystem for the PesaGuard fintech platform.

This repository is responsible for accepting provider callbacks, validating and normalizing provider events, publishing durable events, tracking ingestion/processing delivery state, and supplying operational analytics. It is **not** the owner of PesaGuard tenant identity, the canonical transaction ledger, reconciliation decisions, payment execution, or settlement.

## Integration status

This repository is being aligned with the PesaGuard backend and its Java services through a staged, backwards-compatible migration.

- Existing runtime paths and deployment manifests are retained while compatibility is audited.
- Shared event contracts are maintained in `contracts/events/`.
- Integration boundaries and migration rules are documented in `docs/PESAGUARD_INTEGRATION.md`.
- The source tree is not considered fully migrated to the `src/` package until imports, Docker images, CI, scheduled jobs and deployment manifests have been updated and tested.
- No production traffic or infrastructure is changed by repository refactoring alone.

##…

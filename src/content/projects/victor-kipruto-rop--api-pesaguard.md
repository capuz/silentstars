---
repo: "Victor-Kipruto-Rop/api.pesaguard"
name: "api.pesaguard"
description: "Production-grade fintech platform for real-time transaction ingestion, automated reconciliation, anomaly detection, fraud monitoring, audit trails, alerts, and financial reporting across M-Pesa, Airtel Money, and banking channels."
readmeQualityOk: true
url: "https://github.com/Victor-Kipruto-Rop/api.pesaguard"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["airtel", "airtelmoney", "banking", "banking-applications", "mpesa", "mpesa-api", "mpesa-backend", "mpesa-integration", "mpesa-payments", "mpesapi"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-04T11:32:28Z"
lastCommitAt: "2026-11-06T13:20:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Victor-Kipruto-Rop"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3e73a3eb4233557da957136b5fab14765af42886faa3b5cd8f7cfe224f8e182/Victor-Kipruto-Rop/api.pesaguard"
---

# PesaGuard

Real-time M-Pesa reconciliation and anomaly detection for SACCOs, e-commerce operators, and small fintechs.

## Current status

The repository contains the production application, migrations, Docker deployment, readiness checks, backup tooling, and CI/CD workflows. It must still pass the staging deployment gate before live payment traffic is enabled.

## Technology stack

- Python 3.12
- Flask API mounted behind a FastAPI control plane
- PostgreSQL 15+
- Redis 7+
- Redpanda/Kafka-compatible event streaming
- RQ background workers
- Docker and GitHub Actions
- Safaricom Daraja integrations

## Local verification

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r pesaguard_backend_pipeline/requirements-dev.txt
cp .env.example .env

export PYTHONPATH=.
pytest -v --tb=short --durations=10
python -m compileall -q pesaguard_backend_pipeline
```

## Local datasource registry integration

The server-side registry lookup client and tenant-scoped endpoint are documented in [Local datasource registry integration](https://github.com/Victor-Kipruto-Rop/api.pesaguard/blob/HEAD/docs/integrations/LOCAL_DATASOURCE_REGISTRY.md). This is a read-only lookup against…

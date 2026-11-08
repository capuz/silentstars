---
repo: "iamswayam/incidentweave"
name: "incidentweave"
description: "Evidence-grounded incident investigation for code repositories, built with hybrid retrieval, PostgreSQL/pgvector, and Gemini."
readmeQualityOk: true
url: "https://github.com/iamswayam/incidentweave"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "artificial-intelligence", "fastapi", "gemini", "incident-management", "pgvector", "postgresql", "python", "rag", "retrieval-augmented-generation"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 60
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T11:27:05Z"
lastCommitAt: "2026-11-08T14:14:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["iamswayam", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1339490594/90a498fe-3c11-4a5b-b689-150d9a69d24c"
---

*Retrieves repository evidence before asking an LLM to explain an incident. Every claim is cited and every outcome is audited.*

[Why](#why) · [Architecture](#architecture) · [Quick start](#quick-start) · [API](#api) · [Evaluation](#evaluation) · [Documentation](#documentation)

## Why

IncidentWeave indexes a local Python repository, retrieves source evidence with vector and
full-text search, checks whether that evidence is sufficient, and asks an LLM for a grounded
response only when the evidence passes the guard.

- Results carry source paths, line ranges, scores, chunk IDs, and validated citations.
- After one widened retrieval retry, insufficient evidence produces an explicit refusal.
- Investigations persist distinct answer, refusal, abstention, degraded, and error outcomes.

IncidentWeave is a bounded local service, not a production-hardened multi-user incident platform.

## Architecture

```mermaid
flowchart LR
    User[Developer or API client] --> Entry[FastAPI or CLI]
    Repo[Local Python repository] --> Ingest[Ingestion and chunking]
    Ingest --> Store[(PostgreSQL and pgvector)]
    Entry --> Query[Query embedding]
    Query --> Retrieve[Vector search and full-text…

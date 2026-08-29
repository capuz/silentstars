---
repo: "kubeflow/docs-agent"
name: "docs-agent"
description: "Kubeflow Documentation AI Agent to power the Kubeflow Website"
readmeQualityOk: true
url: "https://github.com/kubeflow/docs-agent"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 41
forks: 105
openIssues: 58
closedIssues: 15
watchers: 4
contributors: 176
recentReleases: 0
createdAt: "2025-07-19T02:32:50Z"
lastCommitAt: "2026-08-29T17:27:47Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 54
undervaluedScore: 43
maintainers: ["kmr-rohit", "Sharkyii", "SanthoshToorpu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7f42803062cabf0484f6b0a442b96fe25551c024e70218329973c43ae70f109/kubeflow/docs-agent"
---

# Kubeflow Documentation AI Assistant

**Author**: Santhosh Toorpu

The official LLM implementation of the Kubeflow Documentation Assistant powered by Retrieval-Augmented Generation (RAG). This repository provides a comprehensive solution for Kubeflow users to search across documentation and get accurate, contextual answers to their queries.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Milvus Vector Database](#milvus-vector-database)
  - [KServe Inference Service](#kserve-inference-service)
  - [Kubeflow Pipelines](#kubeflow-pipelines)
  - [API Server](#api-server)
- [Usage](#usage)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Repository layout

| Path | Purpose |
|------|---------|
| `docs-agent-mcp/` | MCP server, Kagent manifests, RAG pipelines, and Terraform platform stack |
| `legacy/` | Historical FastAPI servers, older manifests, and Feast-era pipeline copies |
| `frontend/` | Docs site chatbot assets (`docs_scripts/`, `docs_styles/`) |
| `.github/workflows/` | CI/CD (`oke-cicd.yaml` builds MCP, runs tests,…

---
repo: "nkswalih/kraivor"
name: "kraivor"
description: "Kraivor is an AI-powered system that analyzes real-world codebases and simulates how they behave under production stress, failures, and scaling conditions."
url: "https://github.com/nkswalih/kraivor"
language: "Python"
languages: ["Python", "JavaScript", "TypeScript"]
languagePcts: [48, 26, 25]
topics: ["ai-agents", "ai-workspace", "developer-os", "developer-tools", "engineering-intelligence", "performance-testing", "repository-analysis", "ai"]
stars: 32
forks: 0
openIssues: 5
closedIssues: 39
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-21T06:49:11Z"
lastCommitAt: "2026-06-26T06:47:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["nkswalih"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1216705316/baf1855b-6ff7-4156-9619-df1339271179"
discussionCount: 1
---

# Kraivor

One platform. Three products. Production-grade from day one.

Kraivor is a unified developer intelligence platform built as a microservices system. It combines a Repository Analyzer, Agentic AI System, and Developer Productivity Platform into a single authenticated workspace.

## Project Structure

```
kraivor/
├── services/           # Microservices (6 services)
│   ├── identity/       # Django DRF - Authentication & User Management
│   ├── core/           # Django DRF - Workspaces, Repos, Notes, Projects
│   ├── analysis/       # FastAPI - Repository Analyzer
│   ├── ai/             # FastAPI - Multi-Agent AI System
│   ├── notifications/  # FastAPI - Email, Push, Slack notifications
│   └── realtime/       # Node.js - WebSocket & Real-time updates
├── frontend/          # Next.js web application
├── infra/             # Infrastructure as Code
│   ├── docker/         # Nginx, Postgres configs
│   ├── kubernetes/     # K8s manifests
│   └── terraform/      # AWS infrastructure
└── .github/           # CI/CD workflows
```

## Prerequisites

- Docker & Docker Compose
- Python 3.11+
- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Kafka (or use Docker)

## Local Development…

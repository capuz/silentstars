---
repo: "DecisionRecordsORG/DecisionRecords"
name: "DecisionRecords"
description: "Open source architecture decision records (ADR) platform. Self-hosted with Docker, multi-tenant, WebAuthn authentication."
readmeQualityOk: true
url: "https://github.com/DecisionRecordsORG/DecisionRecords"
homepage: "https://decisionrecords.org"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 40]
topics: ["adr", "angular", "architecture-decisions", "documentation", "flask", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-01-14T14:17:14Z"
lastCommitAt: "2026-11-24T14:08:26Z"
lastReleaseAt: "2026-11-22T18:33:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 56
maintainers: ["lawrencepn"]
openGraphImageUrl: "https://opengraph.githubassets.com/684dec60c30ff1fbacb12234b3bebaae19f3f3d3be7485edfb9a432a3bbf3006/DecisionRecordsORG/DecisionRecords"
discussionCount: 0
---

# Decision Records

> Open source decision records for teams

Decision Records helps teams remember why decisions were made. It gives any team one shared place to record a decision, the situation that led to it, and what follows from it: a pricing change, a supplier choice, a hiring policy, or a software design.

Each record has the same three parts: Context, Decision, and Consequences. Records can be linked to each other, grouped into spaces, and replaced by later decisions without losing the history. Software teams will recognise the structure as the [Architecture Decision Record (ADR)](https://adr.github.io/) format; see [Decision record format](#decision-record-format).

## Quick Start

```bash
# Clone and run with Docker
git clone https://github.com/DecisionRecordsORG/DecisionRecords.git
cd DecisionRecords
cp .env.example .env
# Set SECRET_KEY and MASTER_PASSWORD in .env first
docker-compose up -d

# Open http://localhost:3000
```

On first run, the **Setup Wizard** will guide you through:
1. Creating your organization
2. Setting up your admin account

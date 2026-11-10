---
repo: "cds-snc/canadalogin-user-selfservice-webapp"
name: "canadalogin-user-selfservice-webapp"
description: "Custom CDS web application that integrates with the IBM Verify SaaS to enable users to manage their CanadaLogin profile."
readmeQualityOk: true
url: "https://github.com/cds-snc/canadalogin-user-selfservice-webapp"
language: "JavaScript"
languages: ["JavaScript", "Python", "TypeScript"]
languagePcts: [41, 36, 23]
stars: 6
forks: 1
openIssues: 167
closedIssues: 945
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2024-11-28T14:21:39Z"
lastCommitAt: "2026-11-10T14:49:07Z"
lastReleaseAt: "2025-12-03T17:39:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 73
maintainers: ["johnphan-cds", "renovate[bot]", "cheyenneboutilier-art"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ecbe58ca00a4d9c0843823e1e3de91a7d5d6bb2023ee95bf35dce7e73987858/cds-snc/canadalogin-user-selfservice-webapp"
discussionCount: 0
---

# CanadaLogin - User self-service web application

A modern and accessible web application that allows users to make changes to their CanadaLogin. Built with a React front-end using the [GC Design System](https://github.com/cds-snc/gcds-components), and a supporting FastAPI back-end API that integrates with the IBM Verify SaaS (IdP) to handle login, logout and profile updates.

## Architecture

This solution follows a BFF (backend for frontend) architectural pattern:

- Frontend: React-based SPA
- Backend: FastAPI Python service
- Authentication and Identity Store: IBM Security Verify CIAM SaaS
- Infrastructure (AWS): ECS, ECR, ALB, Secrets Manager, CloudFront, Route 53, WAF, CloudWatch

### Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/cds-snc/gc-signin-user-selfservice-webapp.git
```

### Running the Application Locally

#### 1. Run the backend

- See the [backend README](https://github.com/cds-snc/canadalogin-user-selfservice-webapp/blob/HEAD/backend/README.md)

#### 2. Run frontend

- See the [frontend README](https://github.com/cds-snc/canadalogin-user-selfservice-webapp/blob/HEAD/frontend/README.md)

### Developer Tooling

#### VS…

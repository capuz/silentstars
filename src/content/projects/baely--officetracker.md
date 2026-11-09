---
repo: "baely/officetracker"
name: "officetracker"
description: "Track daily office presence with summary stats"
readmeQualityOk: true
url: "https://github.com/baely/officetracker"
homepage: "https://officetracker.com.au"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 22]
stars: 9
forks: 2
openIssues: 1
closedIssues: 34
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-01-12T03:00:53Z"
lastCommitAt: "2026-11-09T03:30:46Z"
lastReleaseAt: "2026-06-19T14:19:39Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 69
maintainers: ["dependabot[bot]", "baely"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ef324ca824f0f02d1002de9c516082c91d99829254574e1ff5fb9fc57b8d04b/baely/officetracker"
---

# Office Tracker
A web application designed to track compliance with Return-to-Office (RTO) mandates, featuring a user-friendly calendar interface for logging office presence and generating comprehensive summary statistics and reports for compliance assessment.

## Features

- 📊 Track daily office presence on a monthly basis
- 🔄 Real-time updates and synchronization
- 📱 Responsive web interface
- 📊 Export reports in CSV and PDF formats
- 🔐 GitHub OAuth authentication (in integrated mode)
- 🚀 Multiple deployment options (standalone or integrated)
- 🐳 Docker support for easy deployment
- 🤖 Model Context Protocol (MCP) support for AI assistant integration

## Deployment Options

### Integrated Mode

The integrated mode offers a full-featured experience with:
- Cloud PostgreSQL database storage
- Redis caching
- GitHub OAuth authentication
- Multi-user support

#### Prerequisites
- Docker and Docker Compose
- GitHub OAuth credentials
- PostgreSQL database
- Redis instance

#### Configuration

1. Copy the sample configuration:
```shell
cp config/sample.env config/local.env
```

2. Configure your `local.env` with required credentials and settings

#### Running with Docker…

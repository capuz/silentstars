---
repo: "TheoMeunier/uptime-kotlin"
name: "uptime-kotlin"
description: "A fancy self-hosted monitoring tool "
readmeQualityOk: true
url: "https://github.com/TheoMeunier/uptime-kotlin"
homepage: "https://uptime-kotlin.com"
language: "Kotlin"
languages: ["Kotlin", "TypeScript"]
languagePcts: [52, 46]
topics: ["monitoring", "uptime-monitor", "docker", "monitor", "monitoring-tool", "self-hosted"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-12-08T16:24:50Z"
lastCommitAt: "2026-09-10T08:20:06Z"
lastReleaseAt: "2026-08-11T08:15:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 63
maintainers: ["TheoMeunier"]
openGraphImageUrl: "https://opengraph.githubassets.com/59c37c92fab32e9cec1178c28c0a2cd2235c4f288526309c71809eb031c5038b/TheoMeunier/uptime-kotlin"
---

</a>

<h2 align="center">Uptime Kotlin</h3>
    ·
  </p>
</div>

## About The Project

A simple, lightweight, and self-hostable uptime monitoring tool, built and optimized for cloud deployment. Ideal for
monitoring service availability without relying on external solutions.

<table>
  <tr>
    <td><img src="docs/images/dashboard.png" alt="dashboard" width="300"></td>
    <td><img src="docs/images/status-page.png" alt="status page" width="300"></td>
    <td><img src="docs/images/monitor-page.png" alt="monitor" width="300"></td>
  </tr>
</table>

### Key Features

- HTTP/HTTPS, TCP, DNS, ping, PostgreSQL, Microsoft SQL Server, MySQL/MariaDB, Redis, SMTP, Kafka and RabbitMQ
  monitoring
- Real-time dashboard with historical data
- Multi-channel notifications (Email, Slack, Discord, Teams, Webhook)
- Public status pages for your users
- JWT authentication with encrypted data
- Docker-ready deployment

### Built With

- [Kotlin](https://kotlinlang.org/)
- [Quarkus](https://quarkus.io/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Getting Started

1. Create keys for JWT token with `openssl`:

```bash
mkdir certs/ &&…

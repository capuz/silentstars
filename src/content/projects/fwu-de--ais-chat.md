---
repo: "FWU-DE/ais-chat"
name: "ais-chat"
description: "AIS.chat – Der KI-Chatbot für die Schule"
readmeQualityOk: true
url: "https://github.com/FWU-DE/ais-chat"
homepage: "https://app.ais-chat.schule"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 22
forks: 7
openIssues: 1
closedIssues: 6
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2025-02-18T12:49:17Z"
lastCommitAt: "2026-09-21T09:15:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 67
maintainers: ["dependabot[bot]", "TobiasWallura-xitaso", "rlaerm"]
openGraphImageUrl: "https://opengraph.githubassets.com/b41db816595b305f19774a8882a5867d29eddfb5ce893d32dac3797672fc1045/FWU-DE/ais-chat"
---

# AIS.chat

## Self-Hosted / Quick Start

This guide helps you run AIS.chat using pre-built Docker images with minimal configuration.

> [!NOTE]
> The Docker Compose setup and credentials described in this section are intended **only for local exploration and testing**.
> They use hard-coded default secrets and users and are **not safe for production deployments**.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Quick Start

1. **Start all services (pulling the latest images):**

   ```sh
   docker compose -f devops/docker/docker-compose.yml up -d --pull always
   ```

2. **Wait for initialization**

   The first startup will automatically:
   - Initialize empty databases and run migrations
   - Import the Keycloak realm and create predefined users
   - Create S3 bucket in RustFS

3. **Access the applications:**
   - **Chat-bot app**: http://localhost:3000 (credentials: `teacher` / `password`)
   - **Admin app**: http://localhost:3001 (credentials: `admin` / `password` or `editor` / `password`)
   - **API**: http://localhost:3002
   - **Keycloak**: http://localhost:8080 (credentials: `admin` /…

---
repo: "gchq/Bailo"
name: "Bailo"
description: "Managing the lifecycle of machine learning to support scalability, impact, collaboration, compliance and sharing."
readmeQualityOk: true
url: "https://github.com/gchq/Bailo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ml", "mlops", "nodejs", "typescript"]
stars: 97
forks: 22
openIssues: 17
closedIssues: 68
watchers: 5
contributors: 40
recentReleases: 0
createdAt: "2021-02-05T13:21:21Z"
lastCommitAt: "2026-10-21T08:49:08Z"
lastReleaseAt: "2024-08-14T14:54:33Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 47
maintainers: ["PE39806", "dependabot[bot]", "GB907762"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/336277921/359d96fb-3ab8-4090-b7b7-ec05b6f0eb99"
---

Making it easy to compliantly manage the machine learning lifecycle
    ·

## About The Project

Bailo helps you manage the lifecycle of machine learning to support scalability, impact, collaboration, compliance and
sharing.

## Getting Started

### Running Locally with Docker

#### Requirements

Follow the instructions below to get a local development environment running. You will need:

- [Node v26](https://nodejs.org/en/download/current)
- [Docker / Docker Compose](https://www.docker.com/get-started/)

#### Development Build

To run in development mode (modified files on your host machine will be reloaded into the running application):

> [!NOTE]
> Ensure Docker and Docker Compose are installed before running these commands.

```bash
git clone https://github.com/gchq/Bailo.git && cd Bailo
npm install
npm run certs

# This builds all the Bailo images, rerun it when you update dependencies.
docker compose build --parallel

# Then run the development instance of Bailo.
docker compose up -d

```

On first run, it may take a while (up to 30 seconds) to start up. It needs to build several hundred TypeScript modules.
These are cached however, so future starts only require a few…

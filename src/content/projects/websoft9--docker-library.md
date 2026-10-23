---
repo: "Websoft9/docker-library"
name: "docker-library"
description: "100+ Docker Compose examples of selfhosted FOSS based on official image, just run it."
readmeQualityOk: true
url: "https://github.com/Websoft9/docker-library"
homepage: "https://www.websoft9.com"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["bitnami", "docker", "docker-compose", "dockerhub", "image", "installation"]
stars: 68
forks: 36
openIssues: 4
closedIssues: 1019
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2022-10-18T07:06:03Z"
lastCommitAt: "2026-10-23T08:46:48Z"
lastReleaseAt: "2026-03-20T03:20:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 58
maintainers: ["zhaojing1987", "chendelin1982", "OpenCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/03132db7939f91b89551277f4acef11a63533b82e8ba7a72f23491ea1759b285/Websoft9/docker-library"
discussionCount: 1
---

# Websoft9 Docker Library

This repository is the template library behind the [Websoft9 App Store](https://www.websoft9.com/apps). It contains [100+ application packages](https://github.com/Websoft9/docker-library/blob/HEAD/apps/) built on [Docker Compose](https://docs.docker.com/compose/), such as WordPress, MySQL, Odoo, MongoDB, GitLab, Grafana, n8n, Nextcloud, and ONLYOFFICE.

Each directory under `apps/` is one independent deployment unit: a complete, versioned package that can be started with `docker compose up`, or deployed through the Websoft9 console.

Core design goals:

- one app directory = one deployable unit
- every app runs with `docker compose up`
- consistent environment, network, and file conventions
- machine-readable metadata for the Websoft9 platform and AI agents
- repeatable, auditable maintenance

## Quick start

### AI agent deployment

Use the following prompt with your AI agent:

```text
git colone https://github.com/Websoft9/docker-library.git, then deploy one app for me using the `install-app` skill.
Start by listing `apps/`, ask me which app to deploy if I did not specify one,
and return the final access URL plus a short validation summary.
```

###…

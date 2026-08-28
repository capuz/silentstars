---
repo: "hex22a/reconductor"
name: "reconductor"
description: "Network scanner and vulnerability manager"
readmeQualityOk: true
url: "https://github.com/hex22a/reconductor"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-13T10:27:15Z"
lastCommitAt: "2026-08-28T14:34:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["hex22a"]
openGraphImageUrl: "https://opengraph.githubassets.com/3431760b5990eb4919c2eb4b1ee0c05889bab8e72076e2746accbe17b54a7f4e/hex22a/reconductor"
---

# reconductor

This is a Reconductor monorepo.
Reconductor is a deployable network scanner.

## Installation

1. Install container manager. [Podman](https://podman.io/docs/installation) is recommended
1. [Node](https://github.com/nvm-sh/nvm) and [pnpm](https://pnpm.io/)

Local [postgres](https://www.postgresql.org/download/) and [redis](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/) installations are also recommended for local development, though You can absolutely use containerized versions 

Copy and fill **.env** files

```shell
cp .env.example .env
```

```shell
cp .env.test.example .env.test
```

> *TIP:* You can use something like `openssl rand -hex 32` to get random strings for passwords

## Spin up the local environment

[docker-complse.yml](https://github.com/hex22a/reconductor/blob/HEAD/docker-compose.yml) has several profiles for different scenarios

**Backend** spins database, redis, rabbitmq and backend server (useful for workers and frontend development)

```shell
podman compose -f docker-compose.yml --profile=backend up -d
```

**Backend + Workers** adds rust workers (useful for frontend development and debugging)

```shell
podman…

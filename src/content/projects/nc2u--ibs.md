---
repo: "nc2U/ibs"
name: "ibs"
description: "Django 5.2 + Vue3 + Svelte using Nginx + MariaDB or PostgreSQL (deploy as Docker or Kubernetes)"
url: "https://github.com/nc2U/ibs"
language: "Vue"
languages: ["Vue", "Python"]
languagePcts: [40, 29]
topics: ["django", "mariadb", "mysql", "nginx", "svelte", "docker", "helm", "kubernetes", "typescript", "bootstrap5"]
stars: 20
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-02-01T18:52:24Z"
lastCommitAt: "2026-06-29T07:24:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["nc2U"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e7aff9a0966fb2a6f202142820569272ca77a57d53714645d975d3a05d29a7/nc2U/ibs"
---

# Django 6.x + Vue3 using Nginx + PostgreSQL (deploy as Docker or Kubernetes)

## Deploy Using Docker

#### Requirement in your system

- docker
- docker-compose
- node (with pnpm)

### Usage

#### 1. Clone this Repository

```bash
git clone https://github.com/nc2U/ibs
cd ibs/deploy
```

#### 2. Copy docker-compose.yml

```bash
cd deploy
cp docker-compose.yml.tmpl docker-compose.yml
```

#### 3. Write environments in docker-compose.yml

Check what must be defined in a docker-compose.yml file.

- required:
    - POSTGRES_DB
    - POSTGRES_USER
    - POSTGRES_PASSWORD
    - MYSQL_DATABASE
    - MYSQL_USER
    - MYSQL_PASSWORD
    - MYSQL_ROOT_PASSWORD
    - DATABASE_TYPE
    - DATABASE_NAME
    - DATABASE_USER
    - DATABASE_PASSWORD
    - DOMAIN_NAME
    - EMAIL_HOST
    - EMAIL_PORT
    - EMAIL_HOST_USER
    - EMAIL_HOST_PASSWORD
    - DEFAULT_FROM_EMAIL
    - DJANGO_SETTINGS_MODULE

Enter the actual data for your environment as described in the following items.
If you use a database image such as postgresql with Docker, be sure to use the default port.

- postgres:
    - POSTGRES_DB: my-db-name # **postgres database information**
    - POSTGRES_USER: my-db-user # **postgresql…

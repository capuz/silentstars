---
repo: "heyvaldemar/gitlab-traefik-letsencrypt-docker-compose"
name: "gitlab-traefik-letsencrypt-docker-compose"
description: "GitLab with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/gitlab-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["cicd", "cicd-pipeline", "git", "gitlab", "gitlab-api", "gitlab-ci", "gitlab-ci-cd", "gitlab-ci-pipeline", "gitlab-ci-runner", "gitlab-cicd"]
stars: 34
forks: 15
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2023-08-22T00:24:44Z"
lastCommitAt: "2026-11-01T22:59:19Z"
lastReleaseAt: "2026-09-11T17:07:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 66
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f73201bee407288d9435e22aa3414745df644e316e9a9d5d9cd4a803ef711fae/heyvaldemar/gitlab-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# GitLab + Traefik + Let's Encrypt on Docker Compose

## Contents

- [Why this stack?](#why-this-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Features](#features)
  - [Typical use cases](#typical-use-cases)
- [Registering the runner](#registering-the-runner)
- [Email (SMTP)](#email-smtp)
- [Supply chain trust](#supply-chain-trust)
- [Production checklist](#production-checklist)
- [Upgrading an existing deployment](#upgrading-an-existing-deployment)
- [Testing](#testing)
- [Security Notes](#security-notes)
- [About the maintainer](#about-the-maintainer)

This repository deploys GitLab EE (free tier) behind Traefik with automatic Let's Encrypt TLS, backed by an external PostgreSQL 17, with git-over-SSH routed through a dedicated Traefik TCP entrypoint and a GitLab Runner container ready to register. One `docker compose up` away from a complete DevOps platform at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-gitlab-using-docker-compose/](https://www.heyvaldemar.com/install-gitlab-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual omnibus install | Kubernetes (Helm) | Other…

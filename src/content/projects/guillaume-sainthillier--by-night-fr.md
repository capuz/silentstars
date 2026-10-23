---
repo: "guillaume-sainthillier/by-night.fr"
name: "by-night.fr"
description: "Plateforme de gestion d'événements en France"
readmeQualityOk: true
url: "https://github.com/guillaume-sainthillier/by-night.fr"
homepage: "https://by-night.fr"
language: "PHP"
languages: ["PHP"]
languagePcts: [79]
topics: ["php", "symfony", "docker", "elasticsearch", "bootstrap", "rabbitmq", "frankenphp", "preact", "redis", "tabler"]
stars: 9
forks: 4
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2014-10-07T18:15:25Z"
lastCommitAt: "2026-10-23T12:04:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 67
maintainers: ["guillaume-sainthillier", "renovate[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/24904534/cd479500-e39a-11e9-8dee-c924754a730e"
---

# By Night

Plateforme de gestion d'événements en France.

## DEMO

https://by-night.fr

## Stack technique

- PHP 8.5 (FrankenPHP)
- Symfony 8.1
- MySQL 8.0
- Elasticsearch 9
- Cloudflare (CDN, cache HTTP)
- Redis
- RabbitMQ
- Vite
- Sass
- Bootstrap 5 / Tabler
- Preact
- Docker
- OVH Object Storage (S3)

## Docker

The application image is built `FROM` a pre-built runtime base
(`guystlr/by-night-base`) that bakes in the PHP extensions and the MJML rendering
extension (`ext-mjml`), so the app build never recompiles them. The base uses
immutable version tags (`php85-v1`, `php85-v2`, …). The single source of truth is
**`docker/base/VERSION`**, and the app's `ARG BASE_IMAGE_TAG` has **no default** — it
must be passed explicitly on every build.

`.github/workflows/build-base-image.yml` publishes the base on `main` / manual
dispatch — since published tags are immutable, it is a no-op when the
`docker/base/VERSION` tag already exists. The release workflow passes
`BASE_IMAGE_TAG` from `docker/base/VERSION` automatically and republishes a missing
base tag itself before building the app, so releases are self-healing. Every PR builds
the images (base when `docker/base/` changes, then app,…

---
repo: "cds-snc/gc-articles"
name: "gc-articles"
description: "This repo is for GC Articles web publishing product undertaken by CDS platform August 2021"
readmeQualityOk: true
url: "https://github.com/cds-snc/gc-articles"
language: "PHP"
languages: ["PHP", "CSS"]
languagePcts: [41, 24]
stars: 8
forks: 4
openIssues: 6
closedIssues: 10
watchers: 17
contributors: 23
recentReleases: 0
createdAt: "2021-08-18T15:09:05Z"
lastCommitAt: "2026-11-06T13:20:02Z"
lastReleaseAt: "2021-10-28T17:34:57Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 91
undervaluedScore: 63
maintainers: ["patheard", "renovate-cds[bot]", "omartehsin1"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae3d1072b8e142e5cd322bd8f33f0c59a3b81f20be41cbb47888b75e903c78ed/cds-snc/gc-articles"
---

# GC Articles

## Demo

[GC Articles Live Demo](https://articles.cdssandbox.xyz/) (MVP)

## Local dev

Docker-compose and VS Code Remote Container environment featuring:

- apache (reverse-proxy to wordpress/php-fpm)
- mariadb (instead of mysql)
- wordpress (wordpress/php-fpm)
- wp-cli & composer (devcontainer)
- phpmyadmin (db admin)

## Requirements

Including installation instructions on a Mac.

- NPM (install [Node](https://nodejs.org/en/download/))
- Docker (install [Docker Desktop](https://www.docker.com/products/docker-desktop))
- Docker-compose (included with Docker Desktop)
- [VS Code](https://code.visualstudio.com/download) w/ Remote Containers extension (optional)
- [Composer](https://formulae.brew.sh/formula/composer)

## Config

Clone the repo and `cd` to the project directory.

```sh
git clone git@github.com:cds-snc/gc-articles.git
cd gc-articles
```

Copy the `.env.example` file to `.env` and customize as needed.

```sh
cp .env.example .env
```

First thing you'll want to add is an `ENCRYPTION_KEY` which will be used for encrypting sensitive information in the database such as the Notify API keys.

The encryption key is a base64 encoded random string. There is a…

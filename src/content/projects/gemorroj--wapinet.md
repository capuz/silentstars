---
repo: "Gemorroj/wapinet"
name: "wapinet"
description: "wapinet.ru"
originalDescription: "wapinet.ru"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Gemorroj/wapinet"
language: "PHP"
languages: ["PHP", "Twig"]
languagePcts: [62, 33]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-04-18T13:25:46Z"
lastCommitAt: "2026-11-21T13:30:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 67
maintainers: ["Gemorroj"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ca6c8beac20d03628de6b8aa25e22e2dce06cfc98bef61d6cc04481c82e5f5/Gemorroj/wapinet"
---

# Сайт wapinet.ru

##### Лицензия GPL v3

##### Technologies used:
- Symfony 8.2
- Angular 22 + Taiga UI 5 (SPA, `frontend/`)
- PHP 8.5
- MySQL 8.4
- Manticore
- 7zip
- ffmpeg
- systemd

### Local development in Docker

`docker-compose.yml` is for development only. You need `.env.local` (not committed): copy `.env.dist` and specify the container hosts:

```dotenv
DATABASE_URL="mysql://root:@mysql:3306/wapinet?serverVersion=8.4"
MANTICORE_HOST=manticore
MAILER_DSN=smtp://mailpit:1025
PHP_PATH=/usr/local/bin/php
P7Z_PATH=/usr/local/bin/7zz
```

Compose sets only container variables; the application reads everything else from `.env.local` (the real environment overrides dotenv, so settings must not be duplicated in compose). In dev, MySQL is `root` with no password, as in `.env.dist`; the database name `wapinet` is also specified in `.docker/manticore/manticore.conf` (the indexer).

```bash
docker compose up -d --build
```

---
repo: "FreemapSlovakia/freemap-v3-nodejs-backend"
name: "freemap-v3-nodejs-backend"
description: "API server (backend) for web application (freemap-v3-nodejs)"
readmeQualityOk: true
url: "https://github.com/FreemapSlovakia/freemap-v3-nodejs-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 4
openIssues: 2
closedIssues: 22
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2017-03-19T13:16:44Z"
lastCommitAt: "2026-07-05T20:16:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 84
maintainers: ["zdila", "biglaci", "alexanderzatko"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f422f201fa075774cafb3dea171dcb427d8742a6a93bb85606e01719b85d170/FreemapSlovakia/freemap-v3-nodejs-backend"
---

# Freemap 3 API

Backend API server for the [Freemap](https://www.freemap.sk) web map application. It is a [Koa](https://koajs.com/)-based HTTP (and WebSocket) server backed by MariaDB that powers the features of the [frontend SPA](https://github.com/FreemapSlovakia/freemap-v3-react): user accounts and OAuth login, the photo gallery, GPS live tracking, saved (personal) maps, the elevation/profile service, offline map (`.mbtiles`) downloads, and premium/credit purchases.

## Requirements

- Node 22+
- pnpm
- MariaDB Database Server
- exiftran (for lossless rotation of uploaded JPEGs)
- ImageMagick with HEIF support (for converting uploaded HEIF/HEIC photos to JPEG)

## Database setup

The application stores user accounts, photos metadata, tracking data, user maps,
purchases and auth tokens in MariaDB. All tables (and migrations) are created
automatically on startup by `initDatabase()` in [src/database.ts](https://github.com/FreemapSlovakia/freemap-v3-nodejs-backend/blob/HEAD/src/database.ts);
you only need to provide an empty database and a user with privileges to create
and alter tables.

```sql
CREATE DATABASE freemap CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER…

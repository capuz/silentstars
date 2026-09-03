---
repo: "FreemapSlovakia/freemap-v3-nodejs-backend"
name: "freemap-v3-nodejs-backend"
description: "API server (backend) for web application (freemap-v3-nodejs)"
readmeQualityOk: true
url: "https://github.com/FreemapSlovakia/freemap-v3-nodejs-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 2
closedIssues: 22
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2017-03-19T13:16:44Z"
lastCommitAt: "2026-09-03T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 79
maintainers: ["zdila"]
openGraphImageUrl: "https://opengraph.githubassets.com/375d8a54d26ec08848b91c722f7b48475aaa157073311929f0c9eae4c7339fe4/FreemapSlovakia/freemap-v3-nodejs-backend"
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

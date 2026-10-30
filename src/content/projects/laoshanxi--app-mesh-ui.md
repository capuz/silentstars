---
repo: "laoshanxi/app-mesh-ui"
name: "app-mesh-ui"
description: "WEB GUI for github.com/laoshanxi/app-mesh"
readmeQualityOk: true
url: "https://github.com/laoshanxi/app-mesh-ui"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [62, 27]
topics: ["nodejs", "vue"]
stars: 15
forks: 4
openIssues: 1
closedIssues: 13
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2019-11-04T15:03:52Z"
lastCommitAt: "2026-10-30T11:03:04Z"
lastReleaseAt: "2021-04-24T04:55:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 65
maintainers: ["laoshanxi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67c341e3e81ce364ce9c2939e24398149370b67b3c8df94fc1e8c1509be1e9c9/laoshanxi/app-mesh-ui"
---

# App Mesh Web GUI

This is the Web GUI implementation for [App Mesh](https://github.com/laoshanxi/app-mesh).

## Features

- Modern web interface built with Vue.js
- Visual management for all App Mesh core functionalities
- Intuitive application monitoring and management interface
- Quick deployment via Docker container

## Development Guide

### Environment Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Preview production build
npm run preview

# Preview with bundle analyzer report
npm run preview -- --report

# Lint code
npm run lint

# Lint and auto-fix
npm run lint -- --fix
```

### Build Docker Image

```bash
docker build -t appmesh-ui .
```

## Deployment Guide

### Method 1: Connect to Local App Mesh

```shell
docker run \
  --name=appmesh-ui \
  -d \
  --restart=always \
  -p 443:443 \
  -e APP_MESH_API_URL=https://`hostname`:6060 \
  -e VUE_APP_TITLE=`hostname` \
  -v /opt/appmesh/ssl/server.pem:/etc/nginx/conf.d/server.crt:ro \
  -v /opt/appmesh/ssl/server-key.pem:/etc/nginx/conf.d/server.key:ro \
  laoshanxi/appmesh-ui
```

### Method 2: Host Network Mode

When App Mesh runs on the host OS, use this recommended command:…

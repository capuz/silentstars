---
repo: "wppconnect-team/wa-js-api-server"
name: "wa-js-api-server"
description: "WPPConnect/WA-JS API SERVER is a small api server to provide url preview for @wppconnect/wa-js library"
readmeQualityOk: true
url: "https://github.com/wppconnect-team/wa-js-api-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 22
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-05-04T01:10:09Z"
lastCommitAt: "2026-08-26T04:15:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 58
maintainers: ["renovate[bot]", "joaosouz4dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f4b756c693ee87ee9ddf353dbd147e8b37906841d4b224238427254b19d7218/wppconnect-team/wa-js-api-server"
fundingLinks: ["GITHUB:https://github.com/joaosouz4dev", "GITHUB:https://github.com/manfe", "OPEN_COLLECTIVE:https://opencollective.com/wppconnect"]
---

# WPPConnect/WA-JS API SERVER

> WPPConnect/WA-JS API SERVER is a small api server to provide url preview for @wppconnect/wa-js library

## Our online channels

## How does it work

This project generate PNG images from JSON respose for URL preview.

## Starting

Steps to run locally:

```bash
# checkout the project
git clone https://github.com/wppconnect-team/wa-js-api-server.git

# enter in the folder
cd wa-js-api-server

# if you want to get the updates
git pull

# install the depencencies
npm install

# build javascript files
npm run build

# if you want to change some configuration, you can set en ENVIRONMENT variables or copy the .env to .env.local
# cp .env .env.local

# lauch local server
node ./dist/server.js
```

## Docker-Compose

```bash
# checkout the project
git clone https://github.com/wppconnect-team/wa-js-api-server.git

# enter in the folder
cd wa-js-api-server

# if you want to change some configuration, you can set en ENVIRONMENT variables or copy the .env to .env.local
# cp .env .env.local

# create container
docker-compose -f docker-compose.yml up --build -d
```

## Dockerfile

```bash
# checkout the project
git clone…

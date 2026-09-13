---
repo: "soruly/trace.moe-www"
name: "trace.moe-www"
description: "Anime Scene Search by Image"
readmeQualityOk: true
url: "https://github.com/soruly/trace.moe-www"
homepage: "https://trace.moe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["cbir", "anime", "image-search"]
stars: 44
forks: 7
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-02-13T15:29:02Z"
lastCommitAt: "2026-09-13T08:29:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 59
maintainers: ["soruly", "dependabot[bot]", "Vankerkom"]
openGraphImageUrl: "https://opengraph.githubassets.com/4949a8b3bceef0e5f76fda3f623d430025276a73a23f8215e5af63b05f0bbdae/soruly/trace.moe-www"
fundingLinks: ["GITHUB:https://github.com/soruly", "PATREON:https://patreon.com/soruly", "CUSTOM:https://www.paypal.me/soruly/"]
---

# trace.moe-www

Front-end website for [trace.moe](https://github.com/soruly/trace.moe)

## Getting Started

```
docker run -it --rm -p 3000:3000 ghcr.io/soruly/trace.moe-www:latest
```

## Development

```
git clone https://github.com/soruly/trace.moe-www.git
cd trace.moe-www
npm install
npm run dev
```

Production build will generate a static website

```
npm run build
```

Serve the static website with

```
npm run start
```

### Run as systemd

Put this file to `/etc/systemd/system/trace.moe-www.service`

```
[Unit]
Description=trace.moe-www
Wants=network-online.target
After=network-online.target

[Service]
User=____
Group=____
WorkingDirectory=/home/____/project/trace.moe-www
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm run start
Restart=always

[Install]
WantedBy=multi-user.target
```

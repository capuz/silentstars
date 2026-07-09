---
repo: "blueprintnotincluded/blueprintnotincluded"
name: "blueprintnotincluded"
description: "Container for 3 components of blueprintnotincluded.org"
readmeQualityOk: true
url: "https://github.com/blueprintnotincluded/blueprintnotincluded"
homepage: "https://blueprintnotincluded.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 33
forks: 7
openIssues: 15
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-03-05T00:33:46Z"
lastCommitAt: "2026-07-09T20:45:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 54
maintainers: ["Sinetheta"]
openGraphImageUrl: "https://opengraph.githubassets.com/45f420d6098ba169c5b991ea49dd55f0a0b454cc53c17e2e60557f7acafa5f32/blueprintnotincluded/blueprintnotincluded"
---

# Blueprintnotincluded

This is the source repo of blueprintnotincluded.org

It is a combined curated version of the original blueprintnotincluded web app.

## Development Setup

### Development (Recommended)
For ARM64 Macs and local development with live reloading:

```bash
# One-time setup: copy environment configuration
cp .env.sample .env

# Start dependencies only (database + mail)
./dev-setup.sh

# In separate terminals:
npm run dev              # Backend with live reloading
cd frontend && npm start # Frontend with live reloading
```

- **Frontend**: http://localhost:4200 (Angular dev server with API proxy)
- **Backend API**: http://localhost:3000 (Express with ts-node-dev)
- **Database**: mongodb://localhost:27017
- **Mail testing**: http://localhost:8025 (Mailpit web UI)

### Production Testing
Test with pre-built images (may require AMD64 emulation on ARM64 Macs):

```bash
docker compose up
```

Visit http://localhost:3000
To check incoming emails visit: http://localhost:8025

## Docker image building

Build the image

`docker build . -t bpni:latest`

Run mongodb

`docker run -d -p 27017:27017 mongo:8.0.23`

Run the image and backend

`docker run -d -p 3000:3000 -e…

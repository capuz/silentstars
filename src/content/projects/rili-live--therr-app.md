---
repo: "rili-live/therr-app"
name: "therr-app"
description: "A geo-social network for sharing content on the go. Travel the globe to activate moments and connect with people who were there once before. Or, host an event and share content exclusively with attendees."
readmeQualityOk: true
url: "https://github.com/rili-live/therr-app"
homepage: "https://therr.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["mobile", "app", "photography", "geolocation", "react-native", "geosocial", "geosocialnetwork"]
stars: 11
forks: 4
openIssues: 44
closedIssues: 8
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-08-08T01:44:26Z"
lastCommitAt: "2026-10-21T20:00:37Z"
lastReleaseAt: "2021-06-23T13:16:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 67
maintainers: ["rililive", "zizzle6717", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e5fba15279643513ce6b5a8a3ab4da08ad53f1c58ceb5b4fa43daa260f76cca/rili-live/therr-app"
---

# Therr App

main: [](https://circleci.com/gh/rili-live/therr-app/tree/main) | stage: [](https://circleci.com/gh/rili-live/therr-app/tree/stage)
#
## Mobile Build
main: [](https://appcenter.ms)
#

## Description
A social network that connects people by proximity through the distance of time

## Getting Started

### Option 1: Docker Compose - Backend Services (Recommended)

Run backend services in Docker, frontend locally. Best balance of convenience and debugging.

```bash
# Start backend stack (first run takes ~5-10 min)
npm run docker:dev:up

# View logs
npm run docker:dev:logs

# Stop everything
npm run docker:dev:down

# Clean restart (wipes databases)
npm run docker:dev:clean && npm run docker:dev:up
```

Then start frontend apps locally (in separate terminals):
```bash
cd therr-client-web && npm run dev          # Web Client: http://localhost:7070
cd therr-client-web-dashboard && npm run dev # Dashboard: http://localhost:7071
```

Backend services available at:
- API Gateway: http://localhost:7770
- Users Service: http://localhost:7771
- Messages Service: http://localhost:7772
- Maps Service: http://localhost:7773
- Reactions Service: http://localhost:7774
- Push…

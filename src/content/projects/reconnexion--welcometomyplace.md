---
repo: "reconnexion/welcometomyplace"
name: "welcometomyplace"
description: "An app to foster living together based on welcome, trust and mutual aid"
readmeQualityOk: true
url: "https://github.com/reconnexion/welcometomyplace"
homepage: "https://welcometomyplace.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [75, 20]
topics: ["solid", "activitypub", "activitypods", "semapps"]
stars: 18
forks: 2
openIssues: 28
closedIssues: 3
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2022-02-09T17:14:42Z"
lastCommitAt: "2026-10-25T22:11:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 55
maintainers: ["srosset81", "bdunogier"]
openGraphImageUrl: "https://opengraph.githubassets.com/99bfcf21792ab9b1f8871c15fa9464d8194fa1eeeb5ed2e2ca550940361081c0/reconnexion/welcometomyplace"
---

# Welcome to my place

This application is about events which are private by default: you only see those you have been invited to. Anyone is free to create an event and share it with its network. After an event, all participants can add the contact of all other participants. But at the beginning, you must know the contact link (or the ID of type `@bob@podprovider.com`) to start your personal network.

All data are stored directly in users Pods. See the [ActivityPods](https://github.com/activitypods/activitypods) project for more information.

## Launch locally

### Requirements

- Git
- Makefile
- [Docker](https://docs.docker.com/engine/install/) (make sure you have the `docker-compose-plugin` installed)
- [NodeJS](https://nodejs.org) 20.0 or above
- [Yarn](https://yarnpkg.com/)

### Setup environment variables

A single environment variable is required: the MapBox access token to autocomplete the location field on the Pod provider and app frontends.

Fortunately MapBox has a generous free tier with 100,000 requests per month, so you should not need to pay anything. But you still need to get the token. [See this page](https://docs.mapbox.com/help/getting-started/access-tokens/)…

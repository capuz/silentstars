---
repo: "reconnexion/mutual-aid.app"
name: "mutual-aid.app"
description: "Classified ads to support each other within a trusted network"
readmeQualityOk: true
url: "https://github.com/reconnexion/mutual-aid.app"
homepage: "https://mutual-aid.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["activitypods"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2023-01-19T18:27:34Z"
lastCommitAt: "2026-10-25T22:11:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 60
maintainers: ["srosset81"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e137f2e159a779892be3ea461a5ca70aaeea5951a315641262472f32157e7e1/reconnexion/mutual-aid.app"
---

# Mutual-Aid.app

Mutual-Aid.app is an app for classified ads that are only visible to people who are part of your trusted network. Contrary to most of sites of this kind which are very "business" oriented, the main intention of this site is to help each other. This does not prevent you from buying or selling, because for the moment we all need money to live.

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

Fortunately MapBox has a generous free tier with 100,000 requests per month, so you should not need to pay anything. But you still need to get the token. [See this page](https://docs.mapbox.com/help/getting-started/access-tokens/) for more information.

Once you have your…

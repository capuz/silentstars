---
repo: "Greenstand/treetracker-query-api"
name: "treetracker-query-api"
description: "To fetch Greenstand map data for client's like web map, wallet app, and so on."
readmeQualityOk: true
url: "https://github.com/Greenstand/treetracker-query-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["gis", "domain-driven-design", "rest-api", "openapi3"]
stars: 18
forks: 67
openIssues: 63
closedIssues: 125
watchers: 9
contributors: 54
recentReleases: 0
createdAt: "2021-11-25T03:25:18Z"
lastCommitAt: "2026-10-23T08:46:27Z"
lastReleaseAt: "2022-01-13T01:19:42Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 71
undervaluedScore: 55
maintainers: ["mahdi2ba", "semantic-release-bot", "samwel141"]
openGraphImageUrl: "https://opengraph.githubassets.com/c612c60c398e6df4529f779e96cf8db0adb6781fd7e10dd18ddf0c3baf6ddda7/Greenstand/treetracker-query-api"
---

# Treetracker Query API

This API exposes a RESTful interface to query the treetracker data, capture, planter and organization and others.

One of query api's client is our web map app: https://github.com/Greenstand/treetracker-web-map-client/

# Development toolkit

This repository was created from Greenstand's template for microservice projects. This means it comes with many development tools that we use for development and deployment. As a contributor to this repository, you should learn and use these tools. They are outlined below.

- Conventional Commits
- husky
- prettier / lint
- github actions
- Jest
- TypeScript

# Getting Started

## Project Setup

Open terminal and navigate to a folder to install this project:

```
git clone https://github.com/Greenstand/treetracker-repository-name.git

```

Install all necessary dependencies:

```
npm ci
```

Run the server with database settings:

```
DATABASE_URL=[...] npm run dev
```

Please join our slack channel to get help with setting up the database.

# Workflow with Github

[check out here](https://github.com/Greenstand/treetracker-web-map-client#workflow-with-github)

# Development Specification

- Every endpoint should have…

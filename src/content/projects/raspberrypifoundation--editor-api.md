---
repo: "RaspberryPiFoundation/editor-api"
name: "editor-api"
description: "Code Editor backend"
readmeQualityOk: true
url: "https://github.com/RaspberryPiFoundation/editor-api"
homepage: "https://editor.raspberrypi.org"
language: "Ruby"
languages: ["Ruby", "Python"]
languagePcts: [73, 24]
stars: 25
forks: 5
openIssues: 1
closedIssues: 169
watchers: 9
contributors: 46
recentReleases: 0
createdAt: "2021-12-23T10:57:51Z"
lastCommitAt: "2026-11-05T11:25:02Z"
lastReleaseAt: "2023-07-07T14:50:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["dependabot[bot]", "zetter-rpf", "cocomarine"]
openGraphImageUrl: "https://opengraph.githubassets.com/7552b31a8c5a61e22fea25f453dab11f351e8d05f9d8e0f59311bf4ce468b670/RaspberryPiFoundation/editor-api"
---

# Raspberry Pi Foundation Code Editor API

The editor API is a Rails monolith and is hosted at [`editor-api.raspberrypi.org`](https://editor-api.raspberrypi.org/). Through the combination of a REST interface and a GraphQL API, it provides mechanisms for:

- Session management
- User auth (delegated to [Raspberry Pi Accounts / Open ID Connect](https://github.com/RaspberryPiFoundation/profile)) and permissions (managed using the `cancancan` gem)
- Persistence of projects, including code files, data, images and metadata
- Management of schools, school classes, lessons, teachers and students for Code Editor for Education (CEfE)

## Getting Started

### Initial Setup

Copy the `.env.example` file into a `.env` file.

From the project directory build the app using docker:

```
docker-compose build
```

Set up the database:

```
docker compose run --rm api rails db:setup
```

### Running the app

Start the application and its dependencies via docker:

```
docker-compose up
```

### Using the dev-container

There is a dedicated image called `dev-container`, and the easiest way to use this is to use the override:

`cp docker-compose.override.yml.example docker-compose.override.yml`

Now…

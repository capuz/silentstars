---
repo: "Coyote-OSS/coyote"
name: "coyote"
description: "Open source system for online forums, used for 4programmers.net"
readmeQualityOk: true
url: "https://github.com/Coyote-OSS/coyote"
homepage: "https://4programmers.net"
language: "PHP"
languages: ["PHP"]
languagePcts: [67]
topics: ["php", "laravel", "twig", "postgresql", "redis", "webpack", "website", "vue", "community", "forum"]
stars: 120
forks: 28
openIssues: 32
closedIssues: 540
watchers: 9
contributors: 24
recentReleases: 0
createdAt: "2015-02-03T18:05:38Z"
lastCommitAt: "2026-11-05T11:24:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 48
maintainers: ["danon"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b2fbb4ea31192c39f12ec3d60ecde584e6dfe9ed70468be413830f8ceb0c9a4/Coyote-OSS/coyote"
fundingLinks: ["GITHUB:https://github.com/adam-boduch"]
---

# Coyote

Coyote is an open-source library to host forums, e.g. https://4programmers.net/.

[4programmers.net]: https://4programmers.net/

## How to report security problems?

We kindly ask you to report security problems to: support@4programmers.net 

## How can you help?

We highly encourage you to participate in the library development! Checkout current issues and find something for yourself
to work on.

1. Fork the repository
2. Push your change
3. Raise a pull request for us to review!

## Installation

1. Create a local file `.env`, based on `.env.default`
   ```bash
   cp .env.default .env
   ```
2. Bring up the application in docker containers:
   ```
   docker compose up
   ```
3. Install dependencies:
   - Developer mode (debug, source maps, hmr):
     ```
     make file-permission composer-install migrate seed es-create es-index
     make yarn-install yarn-prod
     make install-passport        # Optional
     make install-push            # Optional
     ```
   
   Should the starting fail on Windows, remove `-u nginx` from commands in `Makefile`.
4. The application is running
   - Visit `localhost:8880`
   - Login to administrator account with credentials:…

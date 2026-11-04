---
repo: "sasjs/server"
name: "server"
description: "Build Apps on Base SAS"
readmeQualityOk: true
url: "https://github.com/sasjs/server"
homepage: "https://server.sasjs.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["sas", "sasjs"]
stars: 22
forks: 3
openIssues: 7
closedIssues: 171
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2021-06-09T06:05:56Z"
lastCommitAt: "2026-11-04T11:27:54Z"
lastReleaseAt: "2022-01-08T19:28:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 67
maintainers: ["allanbowe", "sasjs-dev[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd487babf58c5af782d34105b6db5960bf44ea52b872c9c296fc5aca4baeec2/sasjs/server"
discussionCount: 0
---

# SASjs Server

SASjs Server provides a NodeJS wrapper for calling the SAS binary executable. It can be installed on an actual SAS server, or locally on your desktop. It provides:

- Virtual filesystem for storing SAS programs and other content
- Ability to execute Stored Programs from a URL
- Ability to create web apps using simple Desktop SAS
- REST API with Swagger Docs

One major benefit of using SASjs Server alongside other components of the SASjs framework such as the [CLI](https://cli.sasjs.io), [Adapter](https://adapter.sasjs.io) and [Core](https://core.sasjs.io) library, is that the projects you create can be very easily ported to SAS 9 (Stored Process server) or Viya (Job Execution server).

SASjs Server is available in two modes - Desktop (without authentication) and Server (with authentication, and a database)

## Installation

Two channels - the npm package and the standalone executable. Both read the same
environment variables and serve the same API.

### npm

Run the latest release without installing it:

```bash
npx @sasjs/server
```

Or install it once and run `sasjs-server` from then on:

```bash
npm install -g @sasjs/server
sasjs-server
```

Requires Node 22 or…

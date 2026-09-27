---
repo: "sasjs/server"
name: "server"
description: "Build Apps on Base SAS"
readmeQualityOk: true
url: "https://github.com/sasjs/server"
homepage: "https://server.sasjs.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["sas", "sasjs"]
stars: 22
forks: 3
openIssues: 18
closedIssues: 149
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2021-06-09T06:05:56Z"
lastCommitAt: "2026-09-27T09:27:24Z"
lastReleaseAt: "2022-01-08T19:28:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 66
maintainers: ["sasjs-dev[bot]", "allanbowe", "YuryShkoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60af130d2a901bd624a2315009da798a0e92bf3bdc10e78403d49cf19eefafb/sasjs/server"
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

Installation can be made programmatically using command line, or by manually downloading and running the executable.

### Programmatic

Fetch the relevant package from github using `curl`, eg as follows (for linux):

```bash
curl -L https://github.com/sasjs/server/releases/latest/download/linux.zip > linux.zip
unzip linux.zip
```

The app can…

---
repo: "ACE-Collective/ace3"
name: "ace3"
description: "Analysis Correlation Engine 3"
readmeQualityOk: true
url: "https://github.com/ACE-Collective/ace3"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 8
forks: 3
openIssues: 51
closedIssues: 55
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-31T04:49:18Z"
lastCommitAt: "2026-11-05T14:05:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["unixfreak0037", "automationator", "Jcpetrucci"]
openGraphImageUrl: "https://opengraph.githubassets.com/670d41a59fcb313af0358a976b18dc7f237ef1ec76a3a76596f1b61c7af9ff38/ACE-Collective/ace3"
---

# Analysis Correlation Engine v3

This project is a continuation of [this project from 2014](https://github.com/ace-ecosystem/ACE). 

I'm in the process of creating what I consider to be the "3.0" version of ACE.
See below for the roadmap. Until I get to that point I'm not going to build any
migration utilities. That means I'll be introducing breaking changes as I go,
so you may need to rebuild your containers (and volumes) from scratch.

## Quick Setup

```bash
docker compose build
docker compose up

# once you've built it you can do this instead
docker compose up --build

# to build with all latest python package requirements
docker compose build --build-arg USE_UNPINNED_REQUIREMENTS=true
```

And then connect on [https://localhost:5000/ace](https://localhost:5000/ace) username **analyst** password **analyst**.

Optionally execute `bin/attach-container.sh` to gain a shell to the containerized environment. Then use the `ace` command line to interact from the cli.

```bash
ace --help
```

Copy `.env.example` to `.env` if you need to change any of the defaults. To run more than one
ACE instance on the same machine, see…

---
repo: "GitRbit/rbit"
name: "rbit"
description: "Blazing fast, self hosted Git hosting in Rust. One binary, no external services."
readmeQualityOk: true
url: "https://github.com/GitRbit/rbit"
homepage: "https://rbit.ori.click"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["code-hosting", "git", "git-server", "rust", "self-hosted"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-10-18T17:52:02Z"
lastCommitAt: "2026-10-19T09:14:06Z"
lastReleaseAt: "2026-10-19T07:33:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 57
maintainers: ["ChaseTheCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0d3d0b3870f02be0a24b50f3980e6f551c54e3f3525ee518f55c857d0af1063/GitRbit/rbit"
discussionCount: 0
---

# rbit

**Blazing fast, self-hosted Git — written in Rust, shipped as one binary, with no external services.**

rbit gives you repositories, issues, pull requests, reviews and CI checks on your own server, and it is
built around three things: **speed**, **security** and **performance**. No Postgres, no Redis, no
JavaScript runtime — download it, run it, push.

**[Quick start](#quick-start)** · [Why rbit](#why-rbit) · [Features](#features) · [Install](#install) ·
[First steps](#first-steps) · [Configuration](#configuration) · [Command line](#command-line) ·
[Development](#development) · [Community](#community)

## Quick start

```bash
docker run -d --name rbit -p 3000:3000 -v rbit-data:/data ghcr.io/gitrbit/rbit:latest
```

Open <http://localhost:3000> and sign up — **the first account becomes the site administrator**.
Create a repository (or import one from GitHub or Gitea), then push:

```bash
git remote add rbit http://localhost:3000/<you>/<repo>.git
git push rbit main
```

No Docker? Download a [release binary](#release-binaries) and run `./rbit serve`, or build
[from source](#from-source). For a production server, follow…

---
repo: "hacdias/eagle"
name: "eagle"
description: "🔌 My website's blogging platform."
readmeQualityOk: true
url: "https://github.com/hacdias/eagle"
homepage: "https://hacdias.com"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["api", "indieweb", "webmentions"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 107
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-10-07T17:33:14Z"
lastCommitAt: "2026-10-29T10:20:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 62
maintainers: ["hacdias", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f906f6806fa169e0b8d7be3b8b00f0f9d7e0156f00e3d0a7c08f8ca00e10840/hacdias/eagle"
fundingLinks: ["GITHUB:https://github.com/hacdias", "KO_FI:https://ko-fi.com/hacdias"]
---

# Eagle

> Is there something that you think that could be pulled over to an external module? Please [let me know](https://github.com/hacdias/eagle/issues/new)!

This powers my website. It is open-source. However, I won't be supporting other people's use cases as this is just a personal project for personal use. If you're interested in doing something similar, I encourage you to take a look at the code.

## Install

```console
go install go.hacdias.com/eagle@latest
```

Or:

```console
docker pull ghcr.io/hacdias/eagle:latest
```

## Features

- Single user system.
- Admin panel to create, edit and browse entries, moderate mentions, and manage tokens.
- Scheduled posts.
- Git integration: commits on save and pulls source updates via GitHub webhook.
- Receive and send [Webmentions](https://webmention.net/). Incoming must be configured via [Webmention.io](https://webmention.io).
- Comment endpoint, allowing to directly submit comments via the website.
- OAuth 2 authorization server, compatible with [IndieAuth](https://indieauth.spec.indieweb.org/), to login elsewhere with your website and to authorize MCP clients.
- WebFinger and `/.well-known/avatar` endpoints.
- Notifications…

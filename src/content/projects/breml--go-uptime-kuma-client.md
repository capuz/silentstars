---
repo: "breml/go-uptime-kuma-client"
name: "go-uptime-kuma-client"
description: "Go Client for Uptime Kuma API"
readmeQualityOk: true
url: "https://github.com/breml/go-uptime-kuma-client"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 17
forks: 7
openIssues: 7
closedIssues: 169
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-27T12:30:10Z"
lastCommitAt: "2026-11-07T16:11:52Z"
lastReleaseAt: "2026-07-25T07:25:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["breml", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db74e561edf0972259769edfacfa71281ed75988ca5e07a9e744ceb866672a6f/breml/go-uptime-kuma-client"
---

# go-uptime-kuma-client

Go client library for the Uptime Kuma API using Socket.IO for real-time communication.

## Installation

```bash
go get github.com/breml/go-uptime-kuma-client
```

## Requirements

Uptime Kuma 2.x and 3.x, tested against 2.5.6 and the 3.0 nightly image. The
two lines authenticate differently, see [Authentication](#authentication); the
client detects which one it talks to.

Uptime Kuma 1.x is not supported and connecting to it is not expected to work.
It speaks a different login protocol: it never announces `loginRequired`, so the
client cannot tell a server that wants a login from one that does not, and it
reports rejected logins with untranslated messages that the client does not map
to its sentinel errors.

## Features

- **Monitor Management**: HTTP, TCP, Ping, DNS, Redis, PostgreSQL, gRPC, Real Browser,
  and more
- **Notification Providers**: Ntfy, Slack, Teams, Generic, and other notification
  types
- **Tag Management**: Organize monitors with tags
- **Proxy Configuration**: Route monitor requests through HTTP/HTTPS/SOCKS proxies
- **Maintenance Windows**: Schedule maintenance periods
- **Status Pages**: Create and manage public status pages
-…

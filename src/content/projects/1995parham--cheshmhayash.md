---
repo: "1995parham/cheshmhayash"
name: "cheshmhayash"
description: "NATS Visualization Dashboard"
readmeQualityOk: true
url: "https://github.com/1995parham/cheshmhayash"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 31]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2021-06-28T06:10:26Z"
lastCommitAt: "2026-10-20T08:49:29Z"
lastReleaseAt: "2026-09-03T21:09:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 59
maintainers: ["1995parham", "dependabot[bot]", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d98a6813fde3448062c1b876ddbb95e4cfd5fb2d9434f767d0f396503c1822a/1995parham/cheshmhayash"
---

# cheshmhayash 👀

## Introduction

`cheshmhayash` is a NATS administration dashboard and HTTP gateway. It talks
to your clusters **over the NATS protocol itself** — the same system-account
channels (`$SYS.REQ.*`) and JetStream API (`$JS.API.*`) that
[`natscli`](https://github.com/nats-io/natscli) uses — and exposes them as
plain HTTP + JSON for browsers, scripts, and internal tooling.

Because every endpoint is served through a single authenticated NATS
connection, you do **not** need the server's HTTP monitoring port (`:8222`)
open; only the client port (`:4222`, or wherever) is required.

## Screenshots

## Features

### Read endpoints

Responses are forwarded verbatim from the NATS server — the JSON payload is
the same one you would get from the HTTP monitoring interface.

- Cluster-wide server discovery (`$SYS.REQ.SERVER.PING`)
- Targeted per-server endpoints: `VARZ`, `CONNZ`, `ROUTEZ`, `GATEWAYZ`,
  `LEAFZ`, `SUBSZ`, `JSZ`, `ACCOUNTZ`, `HEALTHZ`, `STATSZ`
- Account-scoped endpoints: `CONNZ`, `LEAFZ`, `SUBSZ`, `JSZ`, `INFO`
- Cluster-wide JetStream overview built from
  `$SYS.REQ.SERVER.PING.JSZ` — every account, every stream, every
  consumer, in a single round-trip
-…

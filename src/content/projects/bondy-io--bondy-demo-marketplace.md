---
repo: "bondy-io/bondy-demo-marketplace"
name: "bondy-demo-marketplace"
description: "Example demonstrating a market maker using Bondy for AuthN/Z, RPC and PubSub in Python and JS "
readmeQualityOk: true
url: "https://github.com/bondy-io/bondy-demo-marketplace"
language: "TypeScript"
languages: ["TypeScript", "Vue", "Python"]
languagePcts: [29, 21, 21]
topics: ["authn", "authz", "bondy", "demo-app", "event-mesh", "pubsub", "rpc", "service-mesh", "wamp-protocol", "microservices"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-10-26T08:40:21Z"
lastCommitAt: "2026-08-29T17:28:06Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 33
maintainers: ["aramallo"]
openGraphImageUrl: "https://opengraph.githubassets.com/da745ca3a6e68207daca5466a8af640ec7c68c5a6c76e7d786327a2027407f89/bondy-io/bondy-demo-marketplace"
---

# Bondy marketplace demo

A small auction marketplace built on [Bondy](http://www.bondy.io), demonstrating
routed **RPC** and **publish/subscribe** over WAMP. Lots are listed with a
deadline; bidders compete; when the deadline passes the market publishes the
result to everyone watching.

It is a demo for developers: the interesting part is not the auction, it is
watching one router carry calls and events between a Python service, four
bidding bots, a browser and an HTTP API — with authentication and per-identity
authorisation actually switched on.

## Run it

```bash
git clone <this repo> && cd bondy-demo-marketplace
make
```

That is the whole setup. `make` generates credentials for this machine, builds
the images and starts Bondy, the market service, the web app and four bots.

| | |
| --- | --- |
| Web app | <http://localhost:8080> |
| Bondy WebSocket | `ws://localhost:28080/ws` |
| HTTP API | <http://localhost:28080/market> (OAuth2 — see below) |

```bash
make logs     # follow every service
make down     # stop, keeping images and the market's state
make clean    # remove containers, local images and persisted state
make help     # every target
```

Bondy's host ports are…

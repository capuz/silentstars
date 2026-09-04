---
repo: "ballerina-platform/module-ballerina-http"
name: "module-ballerina-http"
description: "Ballerina HTTP Module"
readmeQualityOk: true
url: "https://github.com/ballerina-platform/module-ballerina-http"
language: "Java"
languages: ["Java", "Ballerina"]
languagePcts: [57, 42]
topics: ["ballerina", "http", "websocket", "hacktoberfest", "http-client", "http-server", "http2", "integration", "rest", "wso2"]
stars: 131
forks: 104
openIssues: 0
closedIssues: 0
watchers: 64
contributors: 121
recentReleases: 0
createdAt: "2020-08-19T02:37:49Z"
lastCommitAt: "2026-09-04T08:10:05Z"
lastReleaseAt: "2021-02-20T07:15:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 44
maintainers: ["daneshk", "ballerina-cicd-bot", "TharmiganK"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3734c4087f07b2a60679d363586575e9315376ecdb8da73a3edf96ce72038ae/ballerina-platform/module-ballerina-http"
---

Ballerina HTTP Library
===================

This library provides APIs for connecting and interacting with HTTP and HTTP2 endpoints. It
facilitates two types of network entry points as the `Client` and `Listener`.

### Client

The `Client` is used to connect to and interact with HTTP endpoints. They support connection pooling and can be
configured to have a maximum number of active connections that can be made with the remote endpoint. The `Client`
activates connection eviction after a given idle period and also supports follow-redirects so that you do not
have to manually handle 3xx HTTP status codes.

#### Resiliency

The `Client` handles resilience in multiple ways such as load balancing, circuit breaking, endpoint timeouts, and via a
retry mechanism.

Load balancing is used in the round-robin or failover manner.

When a failure occurs in the remote service, the client connections might wait for some time before a timeout occurs.
Awaiting requests consume resources in the system. Circuit Breakers are used to trip after a certain number of failed
requests to the remote service. Once a circuit breaker trips, it does not allow the client to send requests to the
remote service for…

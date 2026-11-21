---
repo: "0barman/open-net"
name: "open-net"
description: "Reusable async networking for Rust, designed to save development time and AI coding tokens. HTTP/WebSocket clients, network monitoring, configurable retries, WebSocket reconnection and heartbeats, and managed client lifecycles."
readmeQualityOk: true
url: "https://github.com/0barman/open-net"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 30
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-21T06:32:13Z"
lastCommitAt: "2026-11-21T13:30:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 18
maintainers: ["0barman"]
openGraphImageUrl: "https://opengraph.githubassets.com/68adde66cdd24d7de9493c81a1035ea3497330cb663dfa3b7a9db0c29cf90fb0/0barman/open-net"
---

# open-net

This README and the linked integration guides cover **open-net 0.3.3**.
See [installation and version compatibility](https://github.com/0barman/open-net/blob/HEAD/doc/README.md) for setup and
the API and privacy changes from 0.3.2.

## Overview

open-net is an asynchronous networking library for Rust applications. It provides
`NetStatusClient` for observing network state, `HttpClient` for HTTP requests and
responses, and `WebSocketClient` for persistent WebSocket connections. `OpenNet`
manages named clients and shared engine resources. HTTP clients can also be
constructed independently with `HttpClient::new`.

Reuse open-net's HTTP and WebSocket clients, network status subscriptions,
configurable retry policies, WebSocket reconnection and heartbeats, and client
lifecycle management across applications. These shared capabilities let you
focus on business logic while avoiding repeated implementation and debugging of
common networking infrastructure.

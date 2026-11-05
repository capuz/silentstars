---
repo: "bondy-io/bondy-connect"
name: "bondy-connect"
description: "Bondy Connect is an open source, always-on and scalable application networking platform connecting all elements of a distributed application—offering service and event mesh capabilities combined. Bondy implements the open Web Application Messaging Protocol (WAMP) and is written in Erlang. "
readmeQualityOk: true
url: "https://github.com/bondy-io/bondy-connect"
homepage: "https://www.bondy.io"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [92]
topics: ["erlang", "microservices", "api-gateway", "rpc", "iot", "wamp-protocol", "service-mesh", "service-discovery", "router", "publish-subscribe"]
stars: 156
forks: 18
openIssues: 4
closedIssues: 14
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2021-11-17T07:29:55Z"
lastCommitAt: "2026-11-04T14:26:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 40
maintainers: ["aramallo", "francolopez-leapsight"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/428948603/8837d811-6bc9-408f-ad55-88f79f5ce160"
discussionCount: 1
---

<br>

# Bondy Connect

### The distributed application networking platform

Bondy Connect is an open-source application networking platform. It connects
the parts of a distributed application — web and mobile apps, IoT devices,
backend services and AI agents — through one protocol. Each part calls and
notifies the others without knowing where they run.

Bondy Connect implements the
[Web Application Messaging Protocol](https://wamp-proto.org) (WAMP), an open
standard that combines Remote Procedure Calls (RPC) and Publish/Subscribe.
Around the WAMP router, Bondy Connect adds an HTTP API Gateway, an MCP gateway,
an HTTP connector, broker bridges, identity management and role-based access
control. A Bondy Connect cluster replicates realms, identities, permissions and
API specifications to every node.

> **Bondy is now Bondy Connect.** From 1.0.0:
>
> - The release and its start script are named `bondy-connect`. Run
>   `bin/bondy-connect`, not `bin/bondy`.
> - The Docker images are `leapsight/bondy-connect` and
>   `ghcr.io/bondy-io/bondy-connect`.
> - The repository is `github.com/bondy-io/bondy-connect`.
>
> The `/bondy` paths, node names, `BONDY_*` environment variables and
>…

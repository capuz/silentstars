---
repo: "LucaWolf/grabbit"
name: "grabbit"
description: "Go wrapper for RabbitMQ client with managed connections, channels and topologies"
readmeQualityOk: true
url: "https://github.com/LucaWolf/grabbit"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["rabbitmq", "rabbitmq-reconnect", "golang", "golang-examples", "golang-library"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-10-29T13:47:39Z"
lastCommitAt: "2026-11-26T12:55:26Z"
lastReleaseAt: "2022-12-31T15:51:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 39
maintainers: ["LucaWolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab7754ff900ceed8e4a48be7cf1899820e0f3d67c35551dc0bdd2da297afb07/LucaWolf/grabbit"
---

# grabbit
Golang wrapper for RabbitMQ managed connections.

Version 1.2.0 (requires Go 1.25.7 or above).<br>

## Rationale
This is an alternative library providing auto-reconnection support. It's been heavily inspired by other projects
 (listed in credits) and my previous experiments. 
The reason for a new project (instead of cloning/contributing to an existing one) is that internals may start to 
diverge too much from the original and risk non-adoption.

## Usage
Please use the [wiki](https://github.com/LucaWolf/grabbit/wiki#how-tos) page for a detailed list of how to get 
the most out of this library. We also have a DeepWiki page for the
 [core concepts](https://deepwiki.com/LucaWolf/grabbit/2-core-components)'s architecture and more.

## Examples
Ten runnable demos live in [`examples/`](https://github.com/LucaWolf/grabbit/blob/HEAD/examples/README.md), covering connection and
channel lifecycle, context ownership, publishing (routing and confirmations), batch
consumers, and per-record concurrent consumers.

The quickest way to run them is with the bundled, Podman-managed LavinMQ HA cluster:

```sh
make lavinmq-up
make run EXAMPLE=consumer
make lavinmq-down
```

---
repo: "Tochemey/goakt-examples"
name: "goakt-examples"
description: "Examples for Go-Akt"
readmeQualityOk: true
url: "https://github.com/Tochemey/goakt-examples"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["actors", "golang"]
stars: 16
forks: 8
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-06-11T05:55:01Z"
lastCommitAt: "2026-11-01T22:58:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 46
maintainers: ["Tochemey"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de6ba388acaff6303f371d7d2b7311b9724b6520818b2a43231189bddbcaa57/Tochemey/goakt-examples"
discussionCount: 0
---

# GoAkt Examples

Examples for [GoAkt](https://github.com/Tochemey/goakt) v4. For the v3.14 examples, see the [v3 branch](https://github.com/Tochemey/goakt-examples/tree/release/v3.14).

## Getting Started

```bash
git clone https://github.com/Tochemey/goakt-examples
cd goakt-examples
```

To build all examples:

```bash
make build
```

Code generation (protobuf, Connect, OpenAPI) and the Docker images for the cluster examples are driven by the root [Makefile](https://github.com/Tochemey/goakt-examples/blob/HEAD/Makefile) and only need [Docker](https://docs.docker.com/get-docker/):

```bash
make all      # regenerate the protobuf and OpenAPI code
make images   # build every example Docker image
make help     # list all targets
```

## Examples

### Core Concepts

- [goakt-hello-world](https://github.com/Tochemey/goakt-examples/blob/HEAD/goakt-hello-world): a minimal actor system. Spawns an actor, sends it messages, and shuts down gracefully.
- [goakt-ping-pong](https://github.com/Tochemey/goakt-examples/blob/HEAD/goakt-ping-pong): two actors exchanging messages using the Tell pattern.
- [goakt-behaviors](https://github.com/Tochemey/goakt-examples/blob/HEAD/goakt-behaviors): an…

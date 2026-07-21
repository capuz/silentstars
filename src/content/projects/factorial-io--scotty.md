---
repo: "factorial-io/scotty"
name: "scotty"
description: "Scotty is a combination of an api server and a cli application to manage a set of short-living, docker-compose-based applications"
readmeQualityOk: true
url: "https://github.com/factorial-io/scotty"
homepage: "https://scotty.factorial.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["docker", "docker-compose", "paas", "rust", "micro-paas"]
stars: 13
forks: 1
openIssues: 5
closedIssues: 33
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2024-10-16T15:59:53Z"
lastCommitAt: "2026-07-21T06:11:45Z"
lastReleaseAt: "2024-12-13T15:25:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 71
maintainers: ["renovate[bot]", "stmh", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/158025710418a2e6bb9806445282d8146b44117a736eac1ebdab5ca7ce0f3808/factorial-io/scotty"
---

</div>

## About

**scotty -- yet another micro platform as a service** is a Rust
server providing an API to create, start, stop or destroy a
Docker Compose-based application on your own hardware.

The repo contains two applications:

* `scotty` a Rust-based HTTP server providing an API to talk with the
  service and to start, stop and run Docker Compose-based applications.
  The service provides a user interface at e.g. `http://localhost:21342/`.
  The API is documented at `http://localhost:21342/rapidoc`
* `scottyctl`, a CLI application to talk with the service and execute
  commands from your shell

## Installation

Please have a look at the detailed installation instructions [here](https://github.com/factorial-io/scotty/blob/HEAD/docs/content/installation.md)

## CLI usage

You need to pass the address to the server to the CLI, either by providing
the `--server`-argument or by setting the `SCOTTY_SERVER` env-var.

```shell
scottyctl help
```

will show some help and a list of available commands. You can get help
with `scottyctl help <command>`. A complete list of commands is available [here](https://github.com/factorial-io/scotty/blob/HEAD/docs/content/cli.md)

Move files…

---
repo: "nikitakarpei/my-yacy-node"
name: "my-yacy-node"
description: "A lightweight, composable reimplementation of a YaCy peer as small Go services"
readmeQualityOk: true
url: "https://github.com/nikitakarpei/my-yacy-node"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["composable-architecture", "distributed", "golang", "lightweight", "microservices", "nats-jetstream", "p2p", "search-engine", "web-crawler", "yacy"]
stars: 6
forks: 2
openIssues: 22
closedIssues: 50
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-19T02:36:02Z"
lastCommitAt: "2026-10-24T00:16:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 53
maintainers: ["nikitakarpei", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/72fb25d274fd3945fd4d1cca386649dc356620eba2db03b9d0634218d7e44c92/nikitakarpei/my-yacy-node"
---

# What this is

A lightweight reimplementation of a [YaCy](https://yacy.net) peer, built as
small, single-purpose Go services.

> “YaCy is a distributed Web Search Engine, based on a peer-to-peer network.”
> — [YaCy FAQ](https://yacy.net/faq/)

Start with [Build your own search stack](https://github.com/nikitakarpei/my-yacy-node/blob/HEAD/doc/build-your-own-search-stack) to see
how to compose the services into working deployments.

## Motivation

A standard YaCy node can exceed the memory available on small machines such as
a Raspberry Pi, especially as the corpus grows. This project started with that
constraint and became an experiment in a different way of building a YaCy peer.

## Documentation

Each service under `services/`, distribution under `distributions/`, and plugin
under `plugins/` has its own `doc/` directory:

- `specification.md` covers scope, requirements, and known limitations.
- `configuration.md` covers operator-facing settings.

## Project status

This project is under active development. It follows its own design instead of
mirroring the Java version. Some features are not available yet, and others
work differently.

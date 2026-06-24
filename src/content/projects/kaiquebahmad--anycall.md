---
repo: "KaiqueBahmad/anycall"
name: "anycall"
description: "Use redis as a channel for function invocations between multiple languages"
url: "https://github.com/KaiqueBahmad/anycall"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [59, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T22:48:23Z"
lastCommitAt: "2026-06-24T00:25:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["KaiqueBahmad"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad19113a7f7dbf7e01c647020acbf2340002817662f971da4e08f005ce1b9dee/KaiqueBahmad/anycall"
---

# anycall

![Python](https://img.shields.io/pypi/pyversions/anycall-py)
![License](https://img.shields.io/github/license/KaiqueBahmad/anycall)
![Stars](https://img.shields.io/github/stars/KaiqueBahmad/anycall)

Call functions across services written in different languages, using the
Redis you already have — no .proto files, no exposed ports, no per-service
plumbing to maintain.

A client publishes a request to Redis; any available server can pick it up,
run it, and return the result. Calls can be **synchronous** (block until the
response) or **detached** — fire the call, get back an id, and attach to it
later (even from a different client) to collect the result. _(Detached calls
and consumer handlers are 🚧 **WIP** — see the marked sections below.)_

Because the broker sits in the middle — unlike point-to-point RPC such as
gRPC — you get automatic load balancing, horizontal scaling, and loose
coupling between services for free, with one consistent API across languages.

**Status:** Java and Python are under active development. The examples below
reflect the current target API.

## Installation

Install AnyCall for your language:

**Python:** `pip install anycall-py` (import as…

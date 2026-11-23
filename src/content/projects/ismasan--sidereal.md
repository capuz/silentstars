---
repo: "ismasan/sidereal"
name: "sidereal"
description: "Toolkit for building reactive, multi-player web-apps in Ruby"
readmeQualityOk: true
url: "https://github.com/ismasan/sidereal"
homepage: "https://ismasan.github.io/sidereal/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
topics: ["cqrs", "hypermedia", "reactive", "web-development"]
stars: 22
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T14:43:13Z"
lastCommitAt: "2026-11-23T12:48:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 39
maintainers: ["ismasan"]
openGraphImageUrl: "https://opengraph.githubassets.com/f56fe335cdf12745daa4fbaf7be0078297ba839c070b21098ca767fe3a4a45b0/ismasan/sidereal"
---

# Sidereal

A Ruby gem for building server-driven, reactive web applications. Sidereal combines a Rack-compatible router with an event-driven architecture using typed messages, commands, pages, SSE, and pub/sub.

* All commands are handled by an asynchronous runtime. No distinction between "controllers" and "background jobs".
* Async command handlers automatically notify completion to pub/sub interface.
* Long-lived SSE connection can subscribe to pub/sub and push server-rendered templates back to browser.
* Swappable backends for (optional) Event Sourcing support.

Only one way to reason about business logic handling and UI updates, whether one-off or long-running, re-tryable tasks.

I talked about the motivation and techniques [here](https://www.youtube.com/watch?v=Q6owchf4WEo).

Built on [Datastar](https://data-star.dev/) (SSE streaming, HTML morphing), [Phlex](https://www.phlex.fun/) (HTML rendering), [Plumb](https://github.com/ismasan/plumb) (typed data), [Async](https://github.com/socketry/async) (fiber concurrency). Designed to run on [Falcon](https://github.com/socketry/falcon).

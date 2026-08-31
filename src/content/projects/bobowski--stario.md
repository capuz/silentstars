---
repo: "Bobowski/stario"
name: "stario"
description: "Bringing back joy of building web applications."
readmeQualityOk: true
url: "https://github.com/Bobowski/stario"
homepage: "https://stario.dev"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["async", "framework", "hypermedia", "python", "web", "datastar", "http", "http-server"]
stars: 123
forks: 11
openIssues: 1
closedIssues: 10
watchers: 3
contributors: 6
recentReleases: 4
createdAt: "2025-09-10T10:06:10Z"
lastCommitAt: "2026-08-31T10:02:48Z"
lastReleaseAt: "2026-08-21T23:35:07Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 38
maintainers: ["Bobowski", "torcadev", "litvak-daniil"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1054062430/efe9d683-f2ac-4f7e-abe6-87b68799dee6"
discussionCount: 6
---

<picture>
  </picture>
</p>

  <strong>Stario</strong><br>
  Craft realtime hypermedia apps that are a joy to write and ship.
</p>

  ·
</p>

---

Stario is a small Python framework for enjoyable realtime hypermedia apps. It helps you build web apps where HTTP, HTML, and streaming stay visible in your code. Handlers are plain async functions; routes are registered explicitly; responses go through a dedicated writer. When the UI needs live updates, you can add [Datastar](https://stario.dev/docs/reference/datastar) and [Relay](https://stario.dev/docs/reference/toolbox#relay) without throwing away the same request/response mental model. The [realtime tiles](https://stario.dev/docs/tutorials/realtime-tiles) tutorial walks through the full pattern end to end.

Full guides, API reference, and tutorials live at [stario.dev](https://stario.dev). This page is a short orientation for people landing on the repository.

## Where Stario fits

Stario is an asyncio-native HTTP stack: you write async handlers and register routes on an `App`, and the `stario` CLI runs a built-in HTTP server (TCP or a Unix domain socket). It is not an ASGI application you mount in Uvicorn or Hypercorn; wiring goes…

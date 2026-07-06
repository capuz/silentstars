---
repo: "Toyz/hope"
name: "hope"
description: "Because I had hope for a docker manager"
readmeQualityOk: true
url: "https://github.com/Toyz/hope"
homepage: "https://mininote.ink/s/dzW9c7aSbkHOGeD5-jH1qA/deployment"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [62, 38]
topics: ["docker", "golang", "cluster-manager"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-30T01:20:03Z"
lastCommitAt: "2026-07-06T07:06:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["Toyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2f99ed2f8ac945743ddee3c89e670674d49d05c2fe8ea804aed0c42de475b14/Toyz/hope"
---

# hope

A clean, self-hostable manager for a Docker Compose cluster. One Go binary
([sov](https://github.com/Toyz/sov) backend) embeds a [loom](https://github.com/Toyz/loom)
frontend, reads Docker Compose labels to group containers into stacks, and drives
full stack lifecycle — all over the Docker API, so it works against a local
socket or a remote daemon with no compose files on disk.

**Docs:** https://mininote.ink/s/dzW9c7aSbkHOGeD5-jH1qA

> Screenshots below use a demo dataset — not a real cluster.

| Stack control + replica grouping | Streaming logs |
| --- | --- |
|  |  |

## Features

- **Mission-control overview** — every stack at a glance; trouble lights up, the
  rest stays quiet. A fleet ribbon + synthesized health verdict.
- **Stack control** — start / stop / restart / pull / redeploy per stack, and per
  container, driven entirely through the Docker API (no `docker compose` shell-out,
  no mounted compose files). Redeploy pulls images and recreates containers in
  place, preserving config, networks, and compose labels.
- **Replica grouping** — services with multiple containers collapse into one row
  with bulk actions; expand for per-replica control.
- **Live logs &…

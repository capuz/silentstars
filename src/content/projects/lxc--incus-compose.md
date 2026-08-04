---
repo: "lxc/incus-compose"
name: "incus-compose"
description: "Bring the familiar Docker Compose workflow to Incus — run compose.yaml files natively on Incus"
readmeQualityOk: true
url: "https://github.com/lxc/incus-compose"
homepage: "https://docs.incus-compose.org"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["compose", "compose-spec", "container-orchestration", "devops", "homelab", "linux-containers", "lxc", "lxd", "incus"]
stars: 46
forks: 4
openIssues: 8
closedIssues: 26
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-06-16T22:10:21Z"
lastCommitAt: "2026-08-04T06:11:44Z"
lastReleaseAt: "2026-07-10T17:33:59Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 44
maintainers: ["jochumdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/11ed6be9f273da321c298efa14b3c366774c6babdcf40c8ede5bbdb105216b9a/lxc/incus-compose"
---

# incus-compose

Bring the familiar Docker Compose workflow to Incus. `incus-compose` implements the Compose specification for the Incus ecosystem, allowing you to define and run multi-container applications using the `compose.yaml` files you already know.

## Demos

Recorded during the beta - the workflow is unchanged in current releases:

- [30-service dependency graph, 30 parallel workers](https://asciinema.org/a/1260145)
- [Immich - a full photo-management stack](https://asciinema.org/a/1259458)

## Why incus-compose?

[Incus](https://linuxcontainers.org/incus/) provides powerful system containers and virtual machines with superior security and isolation, but lacks the declarative multi-container orchestration that Docker Compose offers. This tool bridges that gap:

- Use existing `docker-compose.yml` files with Incus containers
- Leverage Incus's native OCI registry support for image pulling
- Run Docker/OCI images directly from registries
- Manage complex multi-container applications with familiar commands
- Benefit from Incus's resource efficiency and security model

New to Incus? See [Why Incus?](https://docs.incus-compose.org/why-incus) for what the platform brings over
a…

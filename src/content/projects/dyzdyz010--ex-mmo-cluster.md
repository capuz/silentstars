---
repo: "dyzdyz010/ex_mmo_cluster"
name: "ex_mmo_cluster"
description: "MMO server cluster in Elixir test."
readmeQualityOk: true
url: "https://github.com/dyzdyz010/ex_mmo_cluster"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [65]
stars: 18
forks: 2
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-02-26T08:51:52Z"
lastCommitAt: "2026-09-20T08:46:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 65
maintainers: ["dyzdyz010"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a7b2d48da63be1ab22d3806594d6421027731e512cad54cac989861238f35d/dyzdyz010/ex_mmo_cluster"
---

# The Genesis Initiative

### A planet-scale, server-authoritative, emergent voxel MMO — built on the BEAM, accelerated by Rust.

*Every block is server truth. Every law of the world is simulated. Nothing the client says is taken on faith.*

</div>

---

`ex_mmo_cluster` is the beating heart of **The Genesis Initiative**: a distributed game server that generates an **unbounded** procedural voxel universe, simulates its physics and emergent systems, and streams that world — as authoritative truth — to the current **[Voxim](https://github.com/dyzdyz010/ex_mmo_cluster/blob/HEAD/../Voxim)** client (Unreal Engine 5.8); **[Voxia](https://github.com/dyzdyz010/ex_mmo_cluster/blob/HEAD/clients/Voxia)** is an algorithm, behavior and performance reference.

It is an experiment in answering one question: *what does an MMO look like when the server is genuinely the source of truth, the world is procedurally infinite, and the engine underneath it never stops scaling?*

## Why this is different

- **🌍 Server-authoritative by construction.** Movement, voxel edits, physics, object state, and field interactions are all confirmed by the server. Clients render and predict — they never invent.…

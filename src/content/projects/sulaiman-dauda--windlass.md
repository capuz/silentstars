---
repo: "Sulaiman-Dauda/windlass"
name: "windlass"
description: "Lightweight self-hosted Docker Compose control plane: projects, Git deployments, HTTPS domains, logs and backups. Wraps the real docker compose rather than replacing it, so your containers keep running if Windlass stops."
readmeQualityOk: true
url: "https://github.com/Sulaiman-Dauda/windlass"
homepage: "https://windlass.run"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [76, 23]
topics: ["caddy", "control-panel", "deployment", "devops", "docker", "docker-compose", "golang", "homelab", "paas", "self-hosted"]
stars: 28
forks: 3
openIssues: 9
closedIssues: 10
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-13T21:46:29Z"
lastCommitAt: "2026-11-07T16:12:11Z"
lastReleaseAt: "2026-07-20T13:31:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 40
maintainers: ["Sulaiman-Dauda", "dependabot[bot]", "MrBeldum"]
openGraphImageUrl: "https://opengraph.githubassets.com/01f5f1e00677873d68be672cc96e02a810c6ce7903c3d63a01b2d5db56892f96/Sulaiman-Dauda/windlass"
discussionCount: 1
---

# Windlass

**A self-hosted panel for Docker Compose that never rewrites your compose file.**

Windlass gives one server Git deployments, HTTPS domains, logs, a terminal, metrics,
backups and users, and does all of it by running the real `docker compose` CLI on your own
`compose.yaml`. No Swarm, no Postgres, no Redis: one Go binary, one SQLite file and Caddy.
The process idles at about 24 MB, and CI fails any build that reaches 40 MB.

```sh
curl -fsSL https://get.windlass.run | sudo sh
```

Runs on Linux, x86_64 or arm64. Claiming the instance and setting the panel domain are under
[Install](#install).

## Why Windlass

- **Your compose file stays yours.** Windlass adds no labels, networks or renamed volumes to
  it. Routes go to Caddy through its API, so `docker compose up -d` by hand still works, and
  the panel reads the same files you edit.
- **The panel is not in the request path.** Stop Windlass and your sites keep serving: the
  containers are ordinary Compose containers with a restart policy, and Caddy keeps its
  routes. See [life without the panel](https://github.com/Sulaiman-Dauda/windlass/blob/HEAD/docs/life-without-the-panel.md).
- **Nothing to migrate off.**…

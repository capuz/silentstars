---
repo: "mrpap/tuinnel-plus"
name: "tuinnel-plus"
description: "Run and manage all your Cloudflare Tunnels in one place: a background service with a web UI, a terminal dashboard and a CLI. Tunnels keep running after you close it."
readmeQualityOk: true
url: "https://github.com/mrpap/tuinnel-plus"
homepage: "https://www.npmjs.com/package/tuinnel-plus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["cli", "cloudflare", "cloudflare-tunnel", "cloudflared", "dashboard", "tui", "tunnel", "developer-tools", "linux", "macos"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-02T08:04:07Z"
lastCommitAt: "2026-11-26T12:56:36Z"
lastReleaseAt: "2026-11-26T12:58:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 45
maintainers: ["mrpap"]
openGraphImageUrl: "https://opengraph.githubassets.com/3005357fd99489cafcab50f6e98b5d90d0a8ef2c512a33288fcbfc4940e507a3/mrpap/tuinnel-plus"
---

# tuinnel-plus

Manage [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) from a terminal dashboard, a web UI, or the command line. Expose local servers on subdomains of your own domains — add, edit, delete, start and stop tunnels, watch their logs and metrics, and keep them running in the background.

Based on [tuinnel](https://github.com/NickDunas/tuinnel) by Nick Dunas.

```
$ tuinnel-plus

┌─────────────────┬──────────────────────────────────────┐
│  TUNNELS        │  [1:Details] [2:Logs] [3:Metrics]    │
│  ◉ app :3000    │                                      │
│  ◌ api :8080    │  Status: ◉ Connected  Uptime: 00:12  │
│                 │  Public: https://app.mysite.com      │
└─────────────────┴──────────────────────────────────────┘
 a Add  d Delete  e Edit  s Start/Stop  r Restart  ? Help
```

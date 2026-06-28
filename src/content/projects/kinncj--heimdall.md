---
repo: "kinncj/Heimdall"
name: "Heimdall"
description: "Heimdall is a lightweight, cross-platform hardware monitoring system with a real-time terminal dashboard."
url: "https://github.com/kinncj/Heimdall"
language: "Go"
languages: ["Go"]
languagePcts: [72]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-27T00:52:57Z"
lastCommitAt: "2026-06-28T03:09:01Z"
lastReleaseAt: "2026-06-27T18:24:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: ["kinncj"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1281818161/042cb067-025f-4654-b64e-b1581661b38f"
fundingLinks: ["GITHUB:https://github.com/kinncj", "KO_FI:https://ko-fi.com/kinncj"]
---

</p>

<h1 align="center">Heimdall</h1>

</p>

---

Heimdall is a lightweight, cross-platform **hardware monitoring** system with a real-time
**terminal dashboard**. Unprivileged daemons stream metrics from every host over a low-bandwidth
gRPC link to a central hub; a btop/mactop-class Go TUI renders the fleet live. It **sees** (metrics)
and **hears** (opt-in logs) across every realm.

Point it at your homelab, GPU boxes, a rack of servers, or just your laptop, and watch CPU,
memory, disk, network, temperature, GPU, and power from every machine in one terminal.

</p>

## Why Heimdall?

- **One terminal for the whole fleet** — not a separate btop/mactop window per box.
- **Lightweight** — four small static binaries. No Prometheus + Grafana + exporters + a
  time-series database to stand up (though Heimdall speaks OpenMetrics if you already run them).
- **Unprivileged by default** — hosts need no inbound ports and no root. Power, GPU, and thermal
  come from no-sudo paths where they exist, and an optional helper where they don't.
- **Built for distance** — compact gRPC over a low-bandwidth link; happy across a VPN or Tailscale.
- **Zero-config when you want it** — daemons can…

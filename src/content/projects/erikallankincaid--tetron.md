---
repo: "ErikAllanKincaid/tetron"
name: "tetron"
description: "Tetron is a mesh network. Zero trust, \"identity-based\", central serverless, VPN multi mesh network, based on iroh, QUIC and n0. This allows you to pick your address range, so it can coexist with Tailscale as a second form of ingress. "
readmeQualityOk: true
url: "https://github.com/ErikAllanKincaid/tetron"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [58, 35]
stars: 5
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-07-14T01:30:39Z"
lastCommitAt: "2026-10-31T09:52:59Z"
lastReleaseAt: "2026-07-25T21:10:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["ErikAllanKincaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2cf0caf689424f07beeabc70bf013c0c836712bc4579fcd9c903090068b5adc/ErikAllanKincaid/tetron"
---

# tetron

**Website: [erikallankincaid.github.io/tetron](https://erikallankincaid.github.io/tetron/)**

**Tetron turns any group of machines into one private network, wherever they are.**

Tetron lets you reach every computer you own as if they were sitting on the same desk, no matter where they actually are. Turn on your laptop or phone from a coffee shop and it can talk straight to your home server, your NAS, or your other laptop -- no port forwarding, no static IPs, nothing exposed to the open internet. Install it, invite your other machines, and they're on your network.

It is a standalone P2P mesh VPN: every device gets a stable, identity-derived address automatically the moment it joins. Peers connect directly over an encrypted tunnel, falling back to relay only when a direct path isn't possible, and the only way onto a network is an invite key you control.

**Prefer a browser or a menu bar to a terminal?** Everything below is the CLI, but you do not have to use it directly:

- **[tetron-webui](https://github.com/ErikAllanKincaid/tetron-webui)** -- a browser dashboard: status, create/join/leave, invites, and the full coordinator admin surface. This is likely the easiest way…

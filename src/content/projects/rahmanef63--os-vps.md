---
repo: "rahmanef63/os-vps"
name: "os-vps"
description: "Topside — a mobile-first web cockpit for a headless Linux VPS: real PTY terminal, files, system metrics & BYOK multi-provider AI, from your phone. One Next.js app, no database."
readmeQualityOk: true
url: "https://github.com/rahmanef63/os-vps"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["file-manager", "nextjs", "playwright", "self-hosted", "shadcn-ui", "terminal", "vps", "web-desktop", "homelab", "mobile-first"]
stars: 38
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T17:44:06Z"
lastCommitAt: "2026-07-17T05:57:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["rahmanef63"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d898d58380e25fbecab0fc02399f93951e9e863715a76546370611544a5abf2/rahmanef63/os-vps"
---

<h1 align="center">Topside</h1>

  A mobile-first web cockpit for a headless Linux VPS — terminal, files, metrics, and AI, from your phone.
</p>

</p>

> Service slug stays `os-vps` (deploy paths, systemd unit, domain); **Topside** is the product name shown in the UI.

Control a headless VPS from any browser — especially a phone. A real terminal (full PTY — `vim`, `top`, `ssh` all work), file manager, system monitor, media preview and an embedded web browser, in a desktop-style shell. The point is **utility**: fast admin of a headless box without the weight of XRDP/VNC. It's a **single-owner** control plane for **one VPS you own** — not a real OS, not multi-tenant, not a SaaS. The desktop UI is a metaphor.

</p>

## Install

One command on your VPS — installs prerequisites, builds, and sets up the systemd service:

```bash
curl -fsSL https://raw.githubusercontent.com/rahmanef63/os-vps/main/scripts/install.sh | bash
```

It generates your credentials, prints the first-login password once, and tells you how to pair your first device. Options: `… | bash -s -- --port 4005 --no-service`; remove with `… | bash -s -- --uninstall`. Production details (TLS reverse proxy, hardware sizing,…

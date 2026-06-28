---
repo: "mikkelchokolate/Veil"
name: "Veil"
description: "Open-source management panel and CLI for NaiveProxy, Hysteria2, olcRTC, and Mieru"
url: "https://github.com/mikkelchokolate/Veil"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["hysteria2", "mieru", "naive", "naiveproxy", "olcrtc"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-01T13:24:14Z"
lastCommitAt: "2026-06-28T01:46:20Z"
lastReleaseAt: "2026-05-06T20:22:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 62
maintainers: ["mikkelchokolate"]
openGraphImageUrl: "https://opengraph.githubassets.com/56b27c2b9a1f12e1c9174f7b66d06e5f04d0314aa53ec39978f34995bb096430/mikkelchokolate/Veil"
---

# Veil

Veil is a management panel for NaiveProxy, Hysteria2, olcRTC, and Mieru. It installs the Panel first; proxy Inbounds are added later from the Panel.

## Quick start

One command, answer a few questions, done:

```bash
curl -fsSL https://github.com/mikkelchokolate/Veil/releases/latest/download/install.sh | sudo bash
```

The installer asks for the Panel exposure mode (`local`, `direct`, or `caddy`)
and whether to choose a random high Panel port or use a port you enter. Veil
still installs as a **panel-only** control plane first; you do not need a domain
or Caddy unless you choose Caddy Panel access or add a NaiveProxy Inbound later.

After install you'll see either direct/local Panel access over generated self-signed HTTPS:

```text
Panel access: https://127.0.0.1:<panel-port>/
```

or, if you choose Caddy Panel access:

```text
Panel URL: https://vpn.example.com/a1b2c3d4e5f6/
```

The HTTPS Panel URL path is randomly generated — only you know it. Direct/local Panel access uses a self-signed certificate, so the browser may ask you to trust it.

### Non-interactive examples

Panel-only local access:

```bash
curl -fsSL…

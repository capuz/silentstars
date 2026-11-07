---
repo: "Mistgate/mistgate"
name: "mistgate"
description: "Beta. Self-hosted panel for running a VPN for others: family, friends, a community or a small team. Hysteria2, VLESS REALITY and AmneziaWG, one link per person. Add servers from the browser over SSH; client-eye health checks and Telegram alerts; MCP for AI agents. Two static Go binaries, SQLite, no Docker."
readmeQualityOk: true
url: "https://github.com/Mistgate/mistgate"
homepage: "https://mistgate.app/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [56, 38]
topics: ["amneziawg", "censorship-circumvention", "cloudflare-warp", "golang", "hysteria2", "mcp-server", "mihomo", "self-hosted", "sqlite", "vpn"]
stars: 258
forks: 16
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-01T20:09:29Z"
lastCommitAt: "2026-11-07T13:56:06Z"
lastReleaseAt: "2026-10-04T19:37:06Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 29
maintainers: ["limeflash", "tageecc", "laik14"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400665524/7e987a32-6b50-419e-b78c-8a17bdc1f020"
discussionCount: 1
---

Hysteria2, VLESS and AmneziaWG. Two Go binaries, SQLite and systemd.</p>

## What it does

You put the panel on one server and add your VPN servers to it as nodes. Each person gets one subscription link, and their app picks up every server they may use. The panel keeps the nodes configured and checks them.

- Add a node from the browser by its IP with the panel's own SSH key (added once at your hoster) or the root password. The panel pins the SSH host key, checks the server, opens the ports in an active UFW or firewalld and installs the signed agent; the node's card changes the password and manages the server's SSH keys. A one-time install command works too. [Add a node](https://github.com/Mistgate/mistgate/blob/HEAD/docs/en/getting-started/add-node.md)
- One link per person. Mihomo apps (kl!ck, FlClash, Clash Verge Rev) get all three protocols from it, Happ gets Hysteria2 and VLESS, and AmneziaVPN takes a key per device from the person's page. [Client apps](https://github.com/Mistgate/mistgate/blob/HEAD/docs/en/guide/client-apps.md)
- Every 5 minutes the panel connects to every server the way an app does. A doctor on each node runs 17 host checks and offers seven fixes that run…

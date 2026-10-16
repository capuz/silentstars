---
repo: "gjovanov/roomler-ai"
name: "roomler-ai"
description: "Open-source remote desktop and WireGuard mesh in one daemon — control any machine from a browser tab, or reach its ports and shell over a private encrypted network. Tunnels, SOCKS5, exit nodes, MagicDNS, SSH with no sshd. Team chat and video included. Rust. Self-hostable, AGPL + MPL."
readmeQualityOk: true
url: "https://github.com/gjovanov/roomler-ai"
homepage: "https://roomler.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["chat", "mediasoup", "rust", "video-conferencing", "vue3", "webrtc", "mesh-vpn", "nat-traversal", "overlay-network", "p2p"]
stars: 6
forks: 1
openIssues: 96
closedIssues: 188
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T23:03:32Z"
lastCommitAt: "2026-10-16T08:26:24Z"
lastReleaseAt: "2026-04-18T15:27:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 63
maintainers: ["gjovanov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1152465447/42db85aa-8c79-4a5e-926c-b9296daacd58"
---

# Roomler

**Open-source remote desktop and WireGuard mesh in one daemon.**

Put the desktop of any machine you own into a browser tab, and join all of those
machines into one private encrypted network that travels with you — so a laptop
in a hotel, a GPU box at home and a server in a rack behave as if they shared a
LAN. Chat and video conferencing come with it.

It is one small agent per machine and one server you can run yourself. Traffic
goes **peer-to-peer** and is end-to-end encrypted: the server introduces the two
ends and enforces policy, and never sees your pixels, keystrokes, files or
tunnelled bytes.

  Four machines, two operating systems, one tab —
  is a 5.5&nbsp;MB MP4 download.

## Run it

**Self-hosted** — unlimited devices, no licence key, no activation, no
phone-home. Same code as the hosted service; there is no crippled community
build.

```bash
git clone https://github.com/gjovanov/roomler-ai.git && cd roomler-ai
cp .env.selfhost.example .env.selfhost      # fill in 4 values; 2 are `openssl rand -hex 32`
docker compose -f docker-compose.selfhost.yml --env-file .env.selfhost pull
docker compose -f docker-compose.selfhost.yml --env-file .env.selfhost up -d
```…

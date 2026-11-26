---
repo: "irashack/molebridge"
name: "molebridge"
description: "Self-hosted VPN egress that fails closed, as a menu: a NetBird exit node for your devices, a sidecar for your containers, or a SOCKS5/HTTP proxy for agents and scripts. Out through Mullvad, PIA or NordVPN, or gluetun for more providers."
readmeQualityOk: true
url: "https://github.com/irashack/molebridge"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["exit-node", "gluetun", "mullvad", "netbird", "nordvpn", "pia", "self-hosted", "vpn", "wireguard", "docker-compose"]
stars: 11
forks: 0
openIssues: 5
closedIssues: 20
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-17T00:02:13Z"
lastCommitAt: "2026-11-26T23:33:42Z"
lastReleaseAt: "2026-10-10T15:16:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 54
maintainers: ["irashack-products[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1373745838/ee9e5a4c-5554-4da1-bd6e-88a846bd6a66"
---

A NetBird exit node for your devices, a sidecar for your containers, or a
  proxy for programs that opt in, through Mullvad, PIA or NordVPN, or six
  providers through gluetun.

---

Molebridge runs one VPN tunnel on a Linux machine you keep running and lets
traffic into it in the ways you pick. For the NetBird exit and the native
sidecar, its routing fails closed: traffic forwarded into the tunnel leaves
through it or not at all, and the exit repairs a changed rule or route as
soon as the kernel reports it. The gluetun sidecar relies on gluetun's
firewall for that, and the proxy makes a narrower promise of its own. A small
web panel, Switchyard, picks the server and shows whether the exit has
verified where your traffic leaves.

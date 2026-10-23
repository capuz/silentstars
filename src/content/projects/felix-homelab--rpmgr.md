---
repo: "felix-homelab/rpmgr"
name: "rpmgr"
description: "Reverse Proxy Manager - Self-hosted reverse tunnel manager: publish services behind NAT, CGNAT or firewalls through public gateways, managed from one control plane. Agents only dial out, every link uses mutual TLS, and config changes apply atomically."
readmeQualityOk: true
url: "https://github.com/felix-homelab/rpmgr"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 7
forks: 0
openIssues: 191
closedIssues: 272
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T11:37:14Z"
lastCommitAt: "2026-10-23T12:04:56Z"
lastReleaseAt: "2026-10-19T06:27:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 92
undervaluedScore: 54
maintainers: ["felix-homelab", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf149c43258a6a51fc9591831a14f701c9bae1e7f72523d0d14f91b319fa69d/felix-homelab/rpmgr"
---

# rpmgr — Reverse Proxy Manager

**Publish the services on your private network on the internet, securely, from one web UI.**

rpmgr makes services that run behind NAT, CGNAT or a firewall reachable from the internet: a NAS,
a dashboard, an internal API, a game server. An agent in your network dials out to a public server
you own, and that server passes the traffic through. You need no port forwarding, no
public IP address at home and no inbound firewall rule.

> [!NOTE]
> v0.1.0 is rpmgr's first release ([Releases](https://github.com/felix-homelab/rpmgr/releases)),
> the minimum viable product of its first phase. Try it out, expect rough edges, and
> [report what you find](https://github.com/felix-homelab/rpmgr/issues).

## Why rpmgr

- **Nothing to open at home.** Connectors only dial out, on port 443. They work behind NAT, CGNAT
  and strict firewalls, and through an HTTP or SOCKS5 proxy where only a proxy leads out.
- **HTTPS without effort.** Gateways obtain and renew certificates from Let's Encrypt, or any other
  ACME CA, for every hostname you publish.
- **Any protocol.** Websites and APIs over HTTP/1.1, HTTP/2, WebSocket and gRPC; raw TCP and UDP
  ports; TLS passed…

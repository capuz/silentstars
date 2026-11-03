---
repo: "shakenfist/kerbside"
name: "kerbside"
description: "A SPICE VDI proxy with pluggable authentication"
readmeQualityOk: true
url: "https://github.com/shakenfist/kerbside"
language: "Python"
languages: ["Python", "Rust", "Shell"]
languagePcts: [52, 22, 20]
stars: 8
forks: 3
openIssues: 71
closedIssues: 108
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2024-03-29T01:23:50Z"
lastCommitAt: "2026-11-03T18:48:48Z"
lastReleaseAt: "2026-10-19T19:18:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 82
maintainers: ["mikalstill", "shakenfist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9004313c156a2ed3a34ee2ac9178f50e689193d2e3ed6d243957202ba9906170/shakenfist/kerbside"
---

# Kerbside, a SPICE VDI proxy

Kerbside is a SPICE VDI protocol proxy: a pure-Python control plane (the REST
API and the daemon) that supervises a Rust SPICE proxy. It sits out the front
of your cloud and provides VDI access to VMs running inside the cluster,
determining what VM to proxy your traffic to based on the password you
provide when connecting. Unlike layer 4 proxies that pass through unparsed
traffic, Kerbside understands the SPICE protocol itself — the proxy
terminates TLS, drives the SPICE link handshake, and is an enforcing SPICE
application firewall, on by default.

Kerbside currently knows how to proxy console sessions for Shaken Fist,
OpenStack, oVirt, and Proxmox VE. It will mostly be of interest to
operators of those clouds who want to offer users rich native SPICE
desktops (high resolution, multi-monitor, USB passthrough, audio) instead
of HTML5-transcoded consoles.
OpenStack is probably the best documented integration at the moment because
there are patches to add deployment support for Kerbside to Kolla-Ansible in
the [kerbside-patches](https://github.com/shakenfist/kerbside-patches)
repository.

Kerbside is currently considered experimental: it works, but it…

---
repo: "Praxis1071/NetFather"
name: "NetFather"
description: "NetFather Linux için ağ cihazlarını keşfetme, izleme, yönetme ve ağ altyapısı kontrolü sağlayan Python tabanlı ağ yönetim platformudur."
readmeQualityOk: true
url: "https://github.com/Praxis1071/NetFather"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-24T11:29:56Z"
lastCommitAt: "2026-09-25T09:04:02Z"
lastReleaseAt: "2026-09-03T14:04:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["Praxis1071"]
openGraphImageUrl: "https://opengraph.githubassets.com/81c1621b3096a68ae6209b657a310b6374a42d6d80f8d2205a9ca2b2ab2c5b36/Praxis1071/NetFather"
---

# NetFather

NetFather is an open-source Linux network management and parental-control application focused on real local-network device discovery, identity, policy management, and traffic enforcement.

The project is being developed as a **GTK4 desktop application**. The GUI is the only active user interface target.

## Project goal

NetFather is designed to:

- discover devices on the user's local network;
- identify devices reliably even when their IP address changes;
- let users name and manage discovered devices;
- assign devices to profiles;
- define scheduled access policies;
- enforce restrictions at real network-traffic level on Linux;
- provide live network state, topology, monitoring, and event history.

## Current status

NetFather 0.5.0 is in active hardening and GTK4 application development.

The project is **not yet a finished traffic-enforcement appliance**. Discovery, identity, profiles, rules, policy evaluation, live-presence foundations, monitoring, and an nftables backend exist, but the complete production path from persistent device identity to safe real-network enforcement is still being integration-tested.

The current hardening checklist is maintained in…

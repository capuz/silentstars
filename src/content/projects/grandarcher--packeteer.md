---
repo: "GrandArcher/Packeteer"
name: "Packeteer"
description: "Open-source BGP path performance controller: probe, score, and optionally steer multi-homed routes."
readmeQualityOk: true
url: "https://github.com/GrandArcher/Packeteer"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 11
forks: 1
openIssues: 2
closedIssues: 271
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-25T03:10:57Z"
lastCommitAt: "2026-11-15T10:24:56Z"
lastReleaseAt: "2026-11-05T03:05:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["GrandArcher", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4897e1bc6b4c601e80dc20506542b83ed1af7631d7d8b785c0be23b176cf335/GrandArcher/Packeteer"
fundingLinks: ["CUSTOM:https://paypal.me/GrandArcher"]
discussionCount: 0
---

# Packeteer

Open-source BGP path performance controller for multi-homed networks. One container, a mounted config file, and the edge router you already run.

Packeteer sits off to the side of the edge. It probes each upstream from that upstream's source address, scores loss, latency, and jitter, and learns today's exit from iBGP. In the default mode it only reports. If you later turn injection on, it advertises a better exit back to the edge for prefixes you allowlisted. If Packeteer stops, those routes go away and the router's own BGP decision stands.

The feature matrix is [docs/FEATURES.md](https://github.com/GrandArcher/Packeteer/blob/HEAD/docs/FEATURES.md).

## What it does

- **Measure.** Probes (`icmp`, `tcp`, `udp`, `https`) from each provider's `source_ip`, targets from static lists, NetFlow, IPFIX, sFlow, a mirror port, traceroute, VIPs, and outage lists, scores loss, latency, and jitter. The per-provider path check (#150) marks a provider down when its probes do not leave through its `next_hop`. Providers and exchange peers may share one `source_ip` with a distinct `fwmark` or `dscp`, and `packeteer -pbr <format>` prints the Linux or router policy-routing config…

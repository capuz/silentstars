---
repo: "naval-group/headlamp-nmstate"
name: "headlamp-nmstate"
description: "Headlamp plugin for kubernetes-nmstate: a per-node network topology map, a guided editor for NodeNetworkConfigurationPolicy covering bridges, bonds, VLANs and VXLANs, and enactment failures shown as the error nmstate raised instead of buried in its apply log."
readmeQualityOk: true
url: "https://github.com/naval-group/headlamp-nmstate"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-10T00:59:23Z"
lastCommitAt: "2026-09-10T08:20:35Z"
lastReleaseAt: "2026-09-10T01:57:04Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 19
maintainers: ["Mehben", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f4edb6f057b9552795bcc6fe6a033ce71f20b8373af600ae5f1ae4ce64b51d/naval-group/headlamp-nmstate"
---

# Headlamp NMState Plugin

A [Headlamp](https://headlamp.dev) plugin for [kubernetes-nmstate](https://nmstate.io/kubernetes-nmstate/):
see what the network on each node actually looks like, declare what it should look like, and find out
why an apply failed without reading a YAML dump.

> **Disclaimer:** This is an independent community plugin. It is not maintained by, affiliated with,
> or endorsed by the [nmstate](https://nmstate.io) project. For nmstate issues, please use the
> [kubernetes-nmstate issue tracker](https://github.com/nmstate/kubernetes-nmstate/issues).

## Features

- **Network topology** — Each node's interfaces drawn as a diagram oriented by role: the physical network at the top, the pods at the bottom, so a stack reads the way traffic flows through it. Every connected stack gets its own frame, side by side, and a bridge's pod ports fold into one node when there are more than a handful
- **List, map and YAML** — The same node from three angles, sharing one set of filters: tick boxes for interface type and state, a name search, and a provenance filter
- **Managed versus observed** — Enactments supply each interface's provenance, so the map tells an interface a…

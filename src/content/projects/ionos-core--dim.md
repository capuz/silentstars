---
repo: "IONOS-Core/dim"
name: "dim"
description: "DNS and IP Management"
readmeQualityOk: true
url: "https://github.com/IONOS-Core/dim"
language: "Java"
languages: ["Java", "Python", "Raku"]
languagePcts: [49, 28, 20]
stars: 56
forks: 30
openIssues: 62
closedIssues: 65
watchers: 12
contributors: 18
recentReleases: 0
createdAt: "2020-02-19T08:00:57Z"
lastCommitAt: "2026-11-04T11:27:30Z"
lastReleaseAt: "2021-06-28T09:59:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 51
maintainers: ["eschweikert", "akaramimotlagh", "miesi-ionos"]
openGraphImageUrl: "https://opengraph.githubassets.com/54f33ac2ff280304136e1fa42ff66cc272216e2b609fdf0eae8bdcbfe3e4fb78/IONOS-Core/dim"
---

# DIM - DNS and IP Management (and also DHCP)

DIM can be used as IP Management for a companies whole IP address space (e.g. RFC1918, public IPv4, ULA IPv6, public IPv6 (GUA), Multicast IPs, ...).

DIM can be used to manage all DNS reverse entries for all IP address space.

DIM allows to document subnets with their vlan id and gateway in a way that this information can be reused for automatic IP configuration on devices.

DIM simplifies the steps "mark ip as used, create forward record, create reverse entry, reload changed zones" to a single line in your preferred shell.

DIM provides an API to allow products to consume and return single IPv4 addresses or whole /64 or /56 prefixes for IPv6.

## Installation

Installation packages are available here:
https://build.opensuse.org/project/show/network:dim

## Quickstart / Tutorial

Download [VM](https://github.com/ionos-core/dim/releases/download/vm-1.0/dim-4-0-9.qcow2) ([Documentation](https://github.com/IONOS-Core/dim/blob/HEAD/VM-SETUP.md) how the VM was created). The VM is preconfigured including PowerDNS and PowerDNS recursor so that you
can immediately check whether your commands had effects.

Read…

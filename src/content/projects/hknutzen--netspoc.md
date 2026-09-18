---
repo: "hknutzen/Netspoc"
name: "Netspoc"
description: "A network security policy compiler. Netspoc is targeted at environments with a large number of firewalls and admins. Firewall rules are derived from a single rule set. Supported are Cisco IOS, ASA, Palo-Alto, VMware NSX gateway firewalls and IPTables."
readmeQualityOk: true
url: "https://github.com/hknutzen/Netspoc"
homepage: "http://hknutzen.github.io/Netspoc"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["nxos", "iptables", "packet-filter", "network-topology", "firewall", "cisco-ios", "golang", "firewall-configuration", "cisco", "cisco-asa"]
stars: 78
forks: 13
openIssues: 4
closedIssues: 59
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2012-01-13T15:36:06Z"
lastCommitAt: "2026-09-18T08:26:00Z"
lastReleaseAt: "2025-11-11T10:59:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 51
maintainers: ["hknutzen", "ayhamnashar"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fd2192f735f486d09b5e1379e9a9a661eb911bd04ff446f03361e3c9adaea3c/hknutzen/Netspoc"
---

Netspoc
=======

A network security policy compiler.

Netspoc is free software to manage all the packet filter devices inside your network topology. Filter rules for each device are generated from one central ruleset, using a description of your network topology.

- Supports different types of devices
  - Linux iptables
  - Cisco  ASA, IOS
  - Palo-Alto firewalls
  - VMWare NSX tier 0 and tier 1 gateways
- Rules are optimized globally
  - Adjacent IP ranges and port ranges are joined.
  - Redundant rules are removed and optionally warned about.
- Highly optimized chains for iptables are generated.
- Object-groups for ASA, PAN-OS and NSX are generated.
- IPSec configuration for Cisco ASA and IOS is generated.
- Commands for static routing are generated (optionally).
- Network address translation (NAT) is supported.
- Powerful rules language
   - Groups can be defined and reused in different rules.
   - Automatic groups utilize relationships of the topology.
- Allows to define a secondary packet filter which gets simpler rules
  if a data stream has already been filtered at some other device.
- Complex topologies with redundant paths are supported.
- Pathrestrictions allow to…

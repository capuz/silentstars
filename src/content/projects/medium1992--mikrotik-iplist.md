---
repo: "Medium1992/MikroTik_IPlist"
name: "MikroTik_IPlist"
description: "Scripts to automatically add ip address-list or ip route in RouterOS IP popular resources and ASN."
readmeQualityOk: true
url: "https://github.com/Medium1992/MikroTik_IPlist"
language: "RouterOS Script"
languages: ["RouterOS Script"]
languagePcts: [100]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-01T22:46:22Z"
lastCommitAt: "2026-10-21T23:36:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 59
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4abc5b072c5f69f043caa0a0324ff5e1f110f4eb323eb5225b75ab9a7eb53318/Medium1992/MikroTik_IPlist"
---

# MikroTik_IPlist
This repository contains IPs for autocompletion and regular updating in MikroTik RouterOS ip/firewall/address-list or ip/route.
IPs are collected full from tree sources
- https://iplist.opencck.org (iplistCIDRv4 and iplistv4)
- https://github.com/MetaCubeX/meta-rules-dat/tree/meta/geo/geoip and geo-lite/geoip (geoipv4)
- https://github.com/MetaCubeX/meta-rules-dat/tree/meta/asn (asnv4)
- https://cinsscore.com/list/ci-badguys.txt (abusev4/cins, individual IPv4 as /32)
- https://www.spamhaus.org/drop/drop_v4.json (abusev4/spamhaus-drop, source CIDRs)

You can check which AS an IP belongs to on the website https://bgp.tools

## Example usage address-list
use:
- asnv4/...
- geoipv4/...
- iplistCIDRv4/...
- iplistv4/...
- abusev4/cins
- abusev4/spamhaus-drop

`abusev4/cins` and `abusev4/spamhaus-drop` are deliberately separate resources:
assign each one its own RouterOS address-list, so the matching firewall rule can
be disabled independently during diagnostics. Generated address-list entries
are intentionally direct `add` commands for fast RouterOS import. The abuse
loaders in `remnanode-infra` load them into an inactive staging list, validate
the accompanying…

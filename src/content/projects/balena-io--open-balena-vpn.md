---
repo: "balena-io/open-balena-vpn"
name: "open-balena-vpn"
description: "openBalena VPN"
url: "https://github.com/balena-io/open-balena-vpn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["open-balena", "openvpn"]
stars: 65
forks: 25
openIssues: 7
closedIssues: 34
watchers: 19
contributors: 23
recentReleases: 0
createdAt: "2018-10-10T15:43:32Z"
lastCommitAt: "2026-06-27T00:46:47Z"
lastReleaseAt: "2024-01-10T23:04:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 50
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]", "fisehara"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff29d90731d2771e21f342aae0fd54ff555bd01aa4fb0244aef4d29928efa7d1/balena-io/open-balena-vpn"
---

# openBalena VPN

## Description

openBalena VPN augments an OpenVPN server with the following components/features:

* `open-balena-connect-proxy` is a http connect proxy that
  handles connections through the vpn to services on connected devices, used by
  external services such as `balena-proxy`
* `open-balena-vpn-api` which consists of an internal API for handling
  authentication and tracking device state, and spawns openvpn server instances
* haproxy used for balancing new connections between openvpn instances
* [libnss-openvpn](http://github.com/balena-io-modules/libnss-openvpn) is used to
  handle dns lookups of devices for connections via `open-balena-connect-proxy`

## Networking

Networking is configured by a number of environmental variables:

* `VPN_GATEWAY` (*optional*) dictates the server end of the p2p connection
* `VPN_BASE_SUBNET` in CIDR notation is the entire subnet used for all servers
* `VPN_INSTANCE_SUBNET_BITMASK` is the VLSM to split `VPN_BASE_SUBNET` into
  `VPN_BASE_PORT` and `VPN_BASE_MANAGEMENT_PORT`

Given a base subnet of `100.64.0.0/10` and a per-instance VLSM of `20` a server
the first instance subnet would be `100.64.0.0/20` and the second would be…

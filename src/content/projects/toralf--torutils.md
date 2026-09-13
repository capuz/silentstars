---
repo: "toralf/torutils"
name: "torutils"
description: "Few tools for a Tor relay."
readmeQualityOk: true
url: "https://github.com/toralf/torutils"
homepage: "https://zwiebeltoralf.de/torserver.html"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [70, 30]
topics: ["ddos-protection", "tor"]
stars: 69
forks: 5
openIssues: 1
closedIssues: 14
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2016-04-10T15:10:41Z"
lastCommitAt: "2026-09-13T08:31:24Z"
lastReleaseAt: "2024-02-25T09:06:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 52
maintainers: ["toralf"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c57fb56cfdc5243b33bb2ccff54619063ed7760820c9fefde9702f0e6e49a22/toralf/torutils"
---

# Torutils

Few tools for a Tor relay.

This guide is about the _nftables_ variant.
For _iptables_ proceed with [README-iptables.md](https://github.com/toralf/torutils/blob/HEAD/README-iptables.md).

## DDoS protection

Protect a linux system against DDoS ingress attacks ¹ at [network level](https://thermalcircle.de/doku.php?id=blog:linux:nftables_packet_flow_netfilter_hooks_detail)
as seen in this example:

Another example is [this](https://github.com/toralf/torutils/blob/HEAD/doc/network-metric-July-3rd.jpg).
It reminds me of university lectures on signal processing and detecting sonar echoes in received data.

¹ ticket [40636](https://gitlab.torproject.org/tpo/core/tor/-/issues/40636)
and [40093](https://gitlab.torproject.org/tpo/community/support/-/issues/40093)
of the [Tor project](https://www.torproject.org/).

### Idea

A remote system is considered malicious if its connection attempts to the local Tor instance over a short time interval exceed the expected threshold.
Block such systems for a long time interval.
Further considerations:

- never touch established connections
- avoid overblock

### Quick start

Install _nftables_ , e.g. at Debian:

```bash
sudo apt install -y…

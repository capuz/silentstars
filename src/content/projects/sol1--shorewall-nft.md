---
repo: "sol1/shorewall-nft"
name: "shorewall-nft"
description: "Shorewall for NFtables - drop in replacement"
readmeQualityOk: true
url: "https://github.com/sol1/shorewall-nft"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 7
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-07T22:12:21Z"
lastCommitAt: "2026-07-21T06:10:49Z"
lastReleaseAt: "2026-07-18T22:58:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 59
maintainers: ["davekempe", "vk2amv"]
openGraphImageUrl: "https://opengraph.githubassets.com/de62abfdca86954a98386855d7eedca7bbbf599cd61f65d48ecdd63b4212fbb1/sol1/shorewall-nft"
discussionCount: 3
---

# Shorewall-nft

Shorewall-nft is a reimplementation of the Shorewall firewall compiler. It generates
nftables rulesets instead of iptables-restore input. It reads your existing
/etc/shorewall configuration. The goal is that no configuration changes are required
to transition.

## Background

Shorewall is dormant. The last release, 5.2.8, was September 2020, and the last
upstream commit was December 2024. Tom Eastep retired and was clear that he would
not port Shorewall to nftables; in his view an nftables version had to be a new
product.

For now Shorewall still works through the iptables-nft compatibility layer. That
is ending. RHEL 10 ships without the xtables kernel modules and other
distributions will follow. When the modules go, Shorewall can no longer load its
rules.

Sol1 runs its Managed Firewall service on Shorewall: a large fleet of firewalls
across many sites and customers. That fleet needs a way onto nftables that does
not mean rewriting every configuration by hand. Nothing existing provided it. Foomuuri, the closest
relative, requires a config rewrite. So we built the tool we needed ourselves, a
compiler that takes the Shorewall configuration we already run and emits…

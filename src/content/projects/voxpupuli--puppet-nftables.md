---
repo: "voxpupuli/puppet-nftables"
name: "puppet-nftables"
description: "Puppet Module to manage nftables firewall rules."
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-nftables"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [73, 27]
topics: ["nftables", "puppet", "firewall", "hacktoberfest", "archlinux-puppet-module", "centos-puppet-module", "debian-puppet-module", "linux-puppet-module", "oraclelinux-puppet-module", "redhat-puppet-module"]
stars: 13
forks: 37
openIssues: 8
closedIssues: 37
watchers: 36
contributors: 94
recentReleases: 2
createdAt: "2020-10-11T10:50:06Z"
lastCommitAt: "2026-10-16T08:26:44Z"
lastReleaseAt: "2026-10-07T08:09:27Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 81
undervaluedScore: 52
maintainers: ["bastelfreak", "pccibot", "foxxx0"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcb464bf090001b06c932dc0cab6a9e6acdc694cf8b6ac9146afb2478544e28/voxpupuli/puppet-nftables"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# nftables puppet module

This module manages an opinionated nftables configuration.

By default it sets up a firewall that drops every connection, except
outbound ICMP, DNS, NTP, HTTP, and HTTPS, and inbound ICMP and SSH
traffic:

```puppet
include nftables
```

This can be overridden using parameters, for example, this allows all
outbound traffic:

```puppet
class { 'nftables':
  out_all => true,
}
```

There are also pre-built rules for specific services, for example this
will allow a web server to serve traffic over HTTPS:

```puppet
include nftables
include nftables::rules::https
```

Note that the module conflicts with the `firewalld` system and will
stop it in Puppet runs.

## Configuration

The main configuration file loaded by the nftables service
will be `files/config/puppet.nft`, all other files created
by that module go into `files/config/puppet` and will also
be purged if not managed anymore.

The main configuration file includes dedicated files for
the filter and NAT tables, as well as processes any
`custom-*.nft` files before hand.

The filter and NAT tables both have all the master chains
(`INPUT`, `OUTPUT`, `FORWARD` in case of filter and `PREROUTING`
and…

---
repo: "NETWAYS/check_interfaces"
name: "check_interfaces"
description: "Monitoring Plugin (Icinga, Nameon, Nagios) for network hardware interfaces"
url: "https://github.com/NETWAYS/check_interfaces"
language: "C"
languages: ["C", "Shell"]
languagePcts: [55, 42]
topics: ["snmp", "network", "plugin", "icinga", "monitoring", "naemon", "nagios-plugin"]
stars: 11
forks: 12
openIssues: 3
closedIssues: 15
watchers: 17
contributors: 30
recentReleases: 0
createdAt: "2017-05-31T13:39:01Z"
lastCommitAt: "2026-07-02T06:33:14Z"
lastReleaseAt: "2024-10-28T21:27:31Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 44
maintainers: ["RincewindsHat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a537036e490c8b836c18a11c02b76938e0903b0f8c7a607b004598f32c439211/NETWAYS/check_interfaces"
---

check_interfaces
================

This is a monitoring plugin for [Monitoring Plugins Interfaces](https://datatracker.ietf.org/doc/html/draft-kaestle-monitoring-plugins-interface-03)
compatible monitoring systems.
The intended usage is to retrieve the interface data from devices implementing default SNMP network structures and test whether interfaces are up or down and whether the bandwidth usage exceeds a certain threshold.
As a secondary purpose, the list of interface and the ingoing/outgoing data counters are returned and can be visualized in the
monitoring system.

This plugin uses the bulk-get mode of SNMPv2 by default - pass it the option -m NONBULK to work with SNMPv1. Support for SNMPv3 with and without privacy is included.

64 bit counters will be used if they are supported by the device.

### Installation

In order to compile this plugin you need the `NET SNMP Development` package
(`libsnmp-dev` for Debian) as well as `autoconf` and the standard compilation tools.

#### Example for Debian:

```
apt-get update
apt-get -y install git build-essential libsnmp-dev
```

Download and extract the tarball from https://github.com/NETWAYS/check_interfaces/releases

```
./configure…

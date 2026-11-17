---
repo: "Cacti/plugin_mactrack"
name: "plugin_mactrack"
description: "Mactrack Plugin for Cacti"
readmeQualityOk: true
url: "https://github.com/Cacti/plugin_mactrack"
language: "PHP"
languages: ["PHP"]
languagePcts: [95]
topics: ["cacti-plugin", "cacti", "mactrack-plugin", "l2trace"]
stars: 16
forks: 28
openIssues: 19
closedIssues: 204
watchers: 16
contributors: 42
recentReleases: 0
createdAt: "2015-08-10T00:58:16Z"
lastCommitAt: "2026-11-17T14:42:08Z"
lastReleaseAt: "2024-10-16T17:42:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 70
maintainers: ["weblate", "TheWitness", "somethingwithproof"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82fcbf8119501e5cf50947da39dc6adc0249c9fef4f05da8ffc5e296b04aa48/Cacti/plugin_mactrack"
---

# mactrack

The MacTrack plugin is designed to scan network switches, routers and
intelligent hubs for connected devices, and record their location either based
upon the portname or alias of the switch or hub.  It also attempts to discover
the ip address of the mac address from the routers included in the MacTrack
database.  MacTrack can also use arpwatch to gather IP to MAC address
associations.

MacTrack has the ability to also notify admins or security personnel when the
MAC address of a missing or stolen computer re-appears on the network.  This can
be helpful in recovering lost equipment.  Through MacTrack's interface
monitoring feature, a Network Administrator can get a very good idea of where
utilization is, where there are errors, etc within their network.

## Features

* Scans Devices

* Finds Macs

* Associates Macs with their IP's

* Keeps a Nice Inventory of Port Counts

* Finds Stolen/Lost PC's

* Tells you when someone is connected who shouldn't be

## Prerequisites

Mactrack requires Cacti 1.2.14 or later and PHP 8.2 for its supported runtime and toolchain.

## Installation

Just like any Cacti plugin, untar the package to the Cacti plugins directory
and rename the…

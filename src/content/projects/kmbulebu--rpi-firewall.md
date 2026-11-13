---
repo: "kmbulebu/rpi-firewall"
name: "rpi-firewall"
description: "Transforms a standard installation of Ubuntu Server on a Raspberry Pi into an Internet firewall and router."
readmeQualityOk: true
url: "https://github.com/kmbulebu/rpi-firewall"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["firewall", "raspberry-pi", "router"]
stars: 5
forks: 0
openIssues: 14
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2020-06-06T18:58:32Z"
lastCommitAt: "2026-11-13T18:29:55Z"
lastReleaseAt: "2026-11-13T01:31:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 79
undervaluedScore: 54
maintainers: ["kmbulebu"]
openGraphImageUrl: "https://opengraph.githubassets.com/76146e32b0b396e1d5d549656fd8b09716d8118cea001ca15bc8c779fb60d1a2/kmbulebu/rpi-firewall"
---

## Introduction

The Raspberry Pi 4B is the first Raspberry Pi device with true gigabit ethernet and USB 3 ports, making it capable of performing as a gigabit ethernet router and firewall. This project transforms a standard installation of Ubuntu Server on a Raspberry Pi into an Internet firewall and router.

## Prerequisites

- A Raspberry Pi 4B or newer
- A USB gigabit ethernet adapter
- Ubuntu Server 26.04 LTS (Resolute)

## Features

- Configuration as code. No Web Interface
- DHCP and DNS server
- IPv6 Support
- Wireguard VPN client

## Installation

1. Prepare an SD card following the [Ubuntu tutorial.](https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#2-prepare-the-sd-card)

2. Create an [inventory.yml](https://github.com/kmbulebu/rpi-firewall/blob/HEAD/rpi/inventory.yml) file, using the [./rpi/inventory.yml](https://github.com/kmbulebu/rpi-firewall/blob/HEAD/rpi/inventory.yml) as a start and this README as a guide.

3. Copy the `inventory.yml` file to the root directory of the SD card.

4. Replace the `network-config` and `user-data` files in the root of the SD card with those found [here](https://github.com/kmbulebu/rpi-firewall/blob/HEAD/rpi/).

5.…

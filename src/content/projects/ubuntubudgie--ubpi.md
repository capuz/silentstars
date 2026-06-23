---
repo: "UbuntuBudgie/UBpi"
name: "UBpi"
description: "Ubuntu Budgie for the Raspberry Pi 4"
url: "https://github.com/UbuntuBudgie/UBpi"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 9
forks: 3
openIssues: 6
closedIssues: 13
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2020-11-22T16:51:58Z"
lastCommitAt: "2026-06-23T23:25:56Z"
lastReleaseAt: "2022-10-27T09:58:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 38
maintainers: ["samlane-ma"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1d167b7d5ff6bbc4ca9b096f823577f68b5518170776f74485e140e5eb5ef51/UbuntuBudgie/UBpi"
---

# Ubuntu Budgie Pi4 23.04

Date: 22 April 2023

Hi folks,

--> Update This is stable release raspberry pi build based upon 23.04.

**This image is recommended only for a Pi4B or Pi400 with 2Gb/4Gb/8Gb RAM.**

Just download and write to a SD Card via Gnome Disks or raspi-imager.

# Budgie ARM Tweak tool

After installation and reboot you will see our budgie-arm-config app.

Do read our [guide](https://sourceforge.net/projects/budgie-remix/files/budgie-raspi-21.04/UBPi4.pdf/download) how to use this app

By installing the package budgie-arm-environment on Intel/AMD you will see a Menu Budgie ARM application icon - run this to find your Pi IP address on your network (note the nmap issue below)

# Optimisations

The following optimisations are optional:

First use the tweak tool and ensure you are booting at 2Ghz.  You should only use this option if you are using a decent heatsink - preferably with a good fan.

The other options below apply to the 8Mb raspi model.

We are going to speed up our system and extend our microSD card’s life by using our 8GB of ram as much as possible. This includes moving some parts of our filesystem in ramdisks, and using Preload to speed up our system a…

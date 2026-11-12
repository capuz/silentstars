---
repo: "Coinio/cosmic-ext-applet-vitals"
name: "cosmic-ext-applet-vitals"
description: "An minimal COSMIC applet to show basic system stats like cpu, ram and disk usage."
readmeQualityOk: true
url: "https://github.com/Coinio/cosmic-ext-applet-vitals"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 13
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-02T14:57:37Z"
lastCommitAt: "2026-11-12T11:36:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Coinio"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2f4086d8f9484d2f2373a40dbae81171aee12c5acd9ee051fb312d915353196/Coinio/cosmic-ext-applet-vitals"
---

# COSMIC Vitals

A minimal configurable applet to display basic system resource usage, i.e. CPU, Memory, Network. 

This came from wanting a project to build to learn some Rust, being a Pop_OS COSMIC user and 
not finding other applets that worked as I wanted. Hopefully, the code in the repo will be useful to 
for those fighting with iced/libcosmic, etc.

## Features

* Show CPU Usage
* Show RAM Usage
* Show Network upload / download. This filters out virtual devices so won't count upload / download twice when using a VPN, etc.
* Show Disk upload / down. This counts reads / writes to logical disks, not partitions, etc.
* Show available / total storage. Choose which mounts are included in the settings, `/` by default. A filesystem
  mounted in more than one place, e.g. btrfs subvolumes, is only counted once.
* Horizontal / Vertical Layouts - The horizontal layout has seen a little more testing as I 
  don't use the vertical.
* Config:
  * Read Intervals - How often each monitor is polled
  * Max Samples - The number of samples to keep to average the readings across
  * Show / Hide each monitor
  * Show / Hide the CPU and memory icons
  * Icon Colours - The CPU and memory icon…

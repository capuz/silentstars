---
repo: "fabiant7t/totalos"
name: "totalos"
description: "cli to turn bare metal servers in rescue mode to Talos in maintenance mode"
readmeQualityOk: true
url: "https://github.com/fabiant7t/totalos"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-06-14T12:21:51Z"
lastCommitAt: "2026-11-16T11:58:22Z"
lastReleaseAt: "2024-06-21T15:37:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["fabiant7t"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bf098f8919d879012a9168edd1911bee7537fc767d8cb27f42ad4f9bc2b3378/fabiant7t/totalos"
---

# totalos

`totalos` is a small CLI that installs Talos Linux on bare-metal servers that are booted into a rescue environment (Hetzner Rescue System or the custom `totalos rescue` ISO). It connects over SSH, inventories the machine, wipes disk signatures, writes a Talos metal image, optionally injects a config URL and a static IP kernel option, and emits a JSON report (optionally POSTed to a webhook).

**This tool is destructive.** It wipes filesystem signatures and writes a disk image with `dd`.

**What It Does**

- Connects via SSH to a rescue-booted server.
- Collects hardware and network details (CPU, memory, disks, NIC, DMI info, IPv4).
- Picks a system disk deterministically (lowest serial, ignoring USB) and writes a Talos raw image to it.
- Optionally injects `talos.config=<url>` into `grub.cfg`.
- Optionally injects `ip=<...>` static network config into `grub.cfg`.
- Selects a storage disk (largest non-system disk) for reporting.
- Prints a JSON report and optionally POSTs it to a webhook.
- Optionally reboots the server.

**How It Chooses the Image**

- If `--image` is provided, it is used as-is.
- Otherwise, it queries the Talos GitHub releases API and picks the latest…

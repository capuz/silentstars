---
repo: "wygodad/ghostdeck"
name: "ghostdeck"
description: "GhostDeck - independent, driver-free power & fan control for MSI laptops (EC via WMI). Restores Silent profile; custom fan curve, charge limit, gaming overlay/OSD, global hotkeys, 15 languages. Unofficial, not affiliated with MSI."
readmeQualityOk: true
url: "https://github.com/wygodad/ghostdeck"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["auto-switch", "embedded-controller", "global-hotkeys", "hardware-monitor", "msi", "msi-center", "msi-ec", "msi-laptop", "open-source", "osd-overlay"]
stars: 80
forks: 6
openIssues: 46
closedIssues: 290
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-06-26T18:34:43Z"
lastCommitAt: "2026-11-21T11:37:49Z"
lastReleaseAt: "2026-06-27T20:32:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure", "community_hub"]
healthScore: 97
undervaluedScore: 32
maintainers: ["wygodad"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f878b678628834a84dfd76b7d58bebee121f558ce1fa838c935f4d66e69e2cd/wygodad/ghostdeck"
discussionCount: 26
---

# GhostDeck - for MSI laptops

A lightweight, **independent** Windows **tray app** to switch MSI laptop power profiles - **Silent / Balanced / Extreme / Super Battery** - instantly via global hotkeys, the tray menu, or auto-switch on AC/battery, with an on-screen overlay showing the active profile. **Every release is digitally signed** - Windows shows the verified publisher instead of "Unknown", and a tampered file fails the check ([details](#digitally-signed-releases)).

Built because **MSI Center 2.0 removed the _Silent_ profile**. This app talks to the Embedded Controller (EC) through MSI's own **WMI interface**, carried by Windows' built-in ACPI driver - **no kernel driver, no disabling of Windows security** - and it does not need MSI Center running. One prerequisite on a freshly installed Windows: MSI Center must be installed **once** to deploy the MSI WMI schema Windows needs (it can be uninstalled afterwards) - see **[docs/MSI-WMI-SCHEMA.md](https://github.com/wygodad/ghostdeck/blob/HEAD/docs/MSI-WMI-SCHEMA.md)**.

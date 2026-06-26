---
repo: "realvolk/ArtixForge"
name: "ArtixForge"
description: "The [galaxy-gremlins] repo for Artix Installations."
url: "https://github.com/realvolk/ArtixForge"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["archlinux", "artix-linux", "artixlinux", "linux", "linux-automation", "linux-installation", "linux-installer", "tui", "artix-install", "artixinstaller"]
stars: 25
forks: 1
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-25T15:57:22Z"
lastCommitAt: "2026-06-26T21:33:56Z"
lastReleaseAt: "2026-06-23T13:04:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 47
maintainers: ["realvolk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f675c0a0c52b8f397dd0e6cbb860923968d086de83e5286a6b933fead43a7d71/realvolk/ArtixForge"
---

<h1 align="center">ArtixForge</h1>

  <strong>A modular operating system deployment framework for Artix Linux</strong><br>
  No flags. No confusion. Just a terminal interface that works.
</p>

  <strong>This is the official branch for v9.</strong><br>
  Find a bug? Make an issue.
</p>

</p>

---

# What is ArtixForge?

ArtixForge is a **modular operating system deployment framework** for Artix Linux (OpenRC, runit, dinit, s6, and BusyBox init).

It walks you through partitioning, filesystem creation, base system installation, bootloader setup, desktop environment, drivers, and extra tools – all from a single interface.

* **Two interfaces:** Terminal UI (keyboard‑only, works in any TTY) and Graphical UI (GTK, mouse‑friendly, launches automatically in desktop environments).
* Built with `gum` for the TUI and `GTK3` + `Python` for the GUI.
* Custom colour themes (ArtixForge, Artix Blue, Jet Black, Mono, Retro) that persist to the installed system.
* Resilience hardened: automatic pacman lock recovery, exponential backoff retries, mid‑build resume, disk space checks at every stage.
* **Build custom live ISOs** from any Quick Profile or full configuration – includes offline package…

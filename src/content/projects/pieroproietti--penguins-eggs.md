---
repo: "pieroproietti/penguins-eggs"
name: "penguins-eggs"
description: "The idea is that every system should have its own way of being remastered. Every distro is different, yet they share many common roots; here, we want to see if a universal approach is reasonably possible."
readmeQualityOk: true
url: "https://github.com/pieroproietti/penguins-eggs"
homepage: "https://penguins-eggs.net"
language: "Go"
languages: ["Go"]
languagePcts: [70]
topics: ["penguins-eggs", "remastersys", "distroclone", "mx-snapshot", "refracta-snapshot", "systemback"]
stars: 51
forks: 7
openIssues: 1
closedIssues: 37
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-27T18:48:42Z"
lastCommitAt: "2026-10-30T11:02:34Z"
lastReleaseAt: "2026-05-04T07:40:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["pieroproietti", "charliemartinez"]
openGraphImageUrl: "https://opengraph.githubassets.com/deecc1b4faedbc516e38a5b1d26fe7bc1ea4db850d7e0bee0eda8ad4d1949bea/pieroproietti/penguins-eggs"
---

# 🥚 penguins-eggs

**A universal Linux remastering and reinstallation system.**

---

**penguins-eggs** is a command-line tool that lets you **remaster** your running Linux system into a bootable, hybrid live ISO (UEFI + BIOS) and easily **reinstall** it on other machines or virtual environments.

Whether you want to build a custom Linux distribution, clone your workstation with all configurations and personal data intact, or deploy systems at scale, `eggs` provides a fast, unified, and consistent workflow across multiple Linux families.

---

### Key Features

* **Remastering (`eggs remaster`, `eggs wizard`)**:
  - **Standard Live**: Generates a clean, redistributable live ISO stripped of personal credentials.
  - **Clone Mode (`--clone`)**: Produces a full system backup preserving user accounts, configurations, and home directories.
  - **Encrypted Clone (`--crypted`)**: Creates a secure, LUKS2-encrypted live system.
* **Reinstallation (`eggs sysinstall`)**:
  - **Krill (TUI)**: Fast, native text installer supporting full disk installations, pre-partitioned layouts (handling multi-ESP dual-boot and preserving `/home`), and **Coexist** multi-boot slots.
  - **Calamares (GUI)**:…

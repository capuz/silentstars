---
repo: "uthsarad/NeOS"
name: "NeOS"
description: "OS focused on speed. "
readmeQualityOk: true
url: "https://github.com/uthsarad/NeOS"
homepage: "https://neosweb.netlify.app/"
language: "Shell"
languages: ["Shell"]
languagePcts: [74]
stars: 5
forks: 5
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-01-27T15:35:07Z"
lastCommitAt: "2026-11-01T10:44:57Z"
lastReleaseAt: "2026-10-17T04:36:29Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 88
maintainers: ["uthsarad", "claude", "NimuthuGanegoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/95dc1b33925301cc83f8a681455f4925c146ba22d3f91ad0bc92fb278040478b/uthsarad/NeOS"
---

A curated, snapshot-based desktop distribution built on Arch Linux, with KDE Plasma 6,
rollback-protected updates and a desktop that feels familiar from day one.</p>

> **NeOS is in beta.** Every 2026 build is a pre-release for testing. Try it in a
> virtual machine or on a spare disk first, and keep backups of anything you care about.

---

## What NeOS is

Arch Linux is fast, current and flexible, but it expects you to assemble and maintain
the system yourself. NeOS keeps plain Arch underneath and adds the parts Arch
deliberately leaves out:

- **A finished KDE Plasma 6 desktop.** Start menu, taskbar and system tray where
  someone coming from Windows expects them, with Firefox, LibreOffice, VLC, Discover
  and Flatpak ready to use. Plasma runs on Wayland on Intel, AMD and NVIDIA
  graphics; virtual machines, Safe Graphics and other display drivers fall back to
  Xfce on X11 automatically
  ([choosing a session](https://github.com/uthsarad/NeOS/blob/HEAD/docs/user-guide/TROUBLESHOOTING.md#choosing-wayland-or-x11)).
- **Updates you can undo.** The root filesystem is Btrfs. Snapper takes a snapshot
  before and after every package transaction, and each snapshot appears in the GRUB…

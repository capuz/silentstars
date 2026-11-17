---
repo: "b1ack0p/rpios-look"
name: "rpios-look"
description: "Makes Debian look like Raspberry Pi OS, without breaking Debian: official themes, panel, file manager and login screen as Raspberry Pi Desktop sessions (X and Wayland)"
readmeQualityOk: true
url: "https://github.com/b1ack0p/rpios-look"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["icon-theme", "raspberry", "raspberrypi", "raspberrypios", "raspios", "xfce", "xfce-theme", "xfce4", "pixflat", "gtk2"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-15T23:37:20Z"
lastCommitAt: "2026-11-17T14:37:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["b1ack0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bd11889f0533f2fcfdeb88df7518cae8148a3ac0f0ee925572a85f7204a4f90/b1ack0p/rpios-look"
---

# rpios-look

rpios-look installs the official Raspberry Pi OS desktop on Debian's LXDE for
64-bit PCs (`amd64`): Raspberry Pi's themes, icons, cursors, fonts,
wallpapers, panel, file manager and login screen style. It adds a separate X
session, **Raspberry Pi Desktop**, beside Debian's LXDE session, which is not
changed. On Debian 13 and later it also adds **Raspberry Pi Desktop
(Wayland)**, Raspberry Pi OS's labwc desktop, as a second session to pick on
the login screen (see [Wayland session](#wayland-session-debian-13-and-later)).

This repository has two scripts:

| Script | Debian | PCs | Install |
|---|---|---|---|
| `rpios-look.sh` (this page) | 13 (trixie) and later | 64-bit | online |
| `rpios-look-legacy.sh` ([LEGACY.md](https://github.com/b1ack0p/rpios-look/blob/HEAD/LEGACY.md)) | 9 to 12 | 32-bit, 64-bit | online or offline |

Each script runs on its own and stops, before changing anything, on a release
that belongs to the other one.

> [!WARNING]
> **Use at your own risk.** The scripts install packages and change system
> files as root. They are provided "as is", without warranty of any kind (see
> [LICENSE](https://github.com/b1ack0p/rpios-look/blob/HEAD/LICENSE)).…

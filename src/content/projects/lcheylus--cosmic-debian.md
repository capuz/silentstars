---
repo: "lcheylus/cosmic-debian"
name: "cosmic-debian"
description: "Releases of COSMIC Desktop Environment on Debian testing/forky Linux distribution"
readmeQualityOk: true
url: "https://github.com/lcheylus/cosmic-debian"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["cosmic", "cosmic-desktop", "debian", "debian-packages"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-07-16T13:41:28Z"
lastCommitAt: "2026-09-25T08:57:47Z"
lastReleaseAt: "2026-09-10T07:46:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["lcheylus", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a7c5c54769a9c233a5e5c3555d4d428064ba674a45843b929f46595b16c12ff/lcheylus/cosmic-debian"
---

# COSMIC DE for Debian testing distribution

This repository provides the full **[COSMIC Desktop
Environment](https://system76.com/cosmic)**, built from source as Debian
packages for **Debian (forky) testing** Linux distribution. Each release
corresponds to an official COSMIC Epoch release.

These packages are built via GitHub Actions on Debian **testing** distribution
(current version `forky/sid`) for **amd64** architecture only. They probably
also work on unstable distribution (**not tested**).

Main GitHub repository of COSMIC DE https://github.com/pop-os/cosmic-epoch/

---

## 🛠️ Installation

> [!IMPORTANT]
Backup your system before installing COSMIC using this repository. Or install it
on a disposable Debian testing installation used for conducting tests.

By default, a display manager (LightDM, GDM, SDDM...) is configured and invoked
to start an X11 or Wayland session. To disable it and log-in in console using
your username and password, run the commands below.

```sh
sudo systemctl set-default multi-user.target
```

Reboot again and Debian boots to console mode.

**Note** If you want to undo this change and get your Debian system to boot to
the default graphical mode use…

---
repo: "LightforgeProject/lightforge"
name: "lightforge"
description: "Linux Native World of Warcraft / Battle.net Launcher"
readmeQualityOk: true
url: "https://github.com/LightforgeProject/lightforge"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["battle-net", "game-launcher-software", "iced", "linux", "proton", "proton-ge", "rust", "wine", "world-of-warcraft", "wow"]
stars: 180
forks: 19
openIssues: 4
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-10T00:11:19Z"
lastCommitAt: "2026-11-27T16:32:02Z"
lastReleaseAt: "2026-11-04T11:26:12Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 75
undervaluedScore: 32
maintainers: ["simplykenny", "pekac45", "T00fy"]
openGraphImageUrl: "https://opengraph.githubassets.com/76dfd28372e980d480db8d886654ec279014bb09e44d4c98cb3b9a5795565255/LightforgeProject/lightforge"
---

**A native Linux launcher for World of Warcraft that also runs the rest of Battle.net.**

---

Lightforge installs, patches, verifies and launches World of Warcraft on Linux
without the Battle.net client. It speaks Blizzard's own distribution protocols
(TACT and NGDP for the CDN, CASC for local storage), reimplemented in Rust, so
your game lands in a store the real client can read: point Battle.net at the
folder and it adopts it, no re-download.

For everything else (Diablo, Overwatch, Hearthstone, StarCraft) it sets up
one Battle.net prefix and hands the launch to the client. Those games get a
tile here and start with one press.

## Install

Every package and the installer are on the
[releases page](https://github.com/LightforgeProject/lightforge/releases).

### Debian, Ubuntu, Linux Mint, Pop!_OS

Download the `.deb`, then:

```bash
sudo apt install ./lightforge_*_amd64.deb
```

### Fedora

From [COPR](https://copr.fedorainfracloud.org/coprs/simplykenny/lightforge/),
which keeps it updated with the rest of your system:

```bash
sudo dnf copr enable simplykenny/lightforge
sudo dnf install lightforge
```

Or download the `.rpm` and install it directly:

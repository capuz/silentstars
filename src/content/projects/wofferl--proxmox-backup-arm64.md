---
repo: "wofferl/proxmox-backup-arm64"
name: "proxmox-backup-arm64"
description: "Script for building Proxmox Backup Server 4.x (Trixie) or 3.x (Bookworm) for arm64"
readmeQualityOk: true
url: "https://github.com/wofferl/proxmox-backup-arm64"
homepage: "https://github.com/wofferl/proxmox-backup-arm64"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["proxmox-backup", "pbs", "arm64", "helios64", "armbian", "bookworm", "crossbuild", "trixie", "proxmox-backup-client", "proxmox-backup-server"]
stars: 435
forks: 28
openIssues: 0
closedIssues: 53
watchers: 10
contributors: 7
recentReleases: 0
createdAt: "2021-11-24T20:51:27Z"
lastCommitAt: "2026-11-14T21:58:02Z"
lastReleaseAt: "2023-12-03T16:28:41Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 29
maintainers: ["wofferl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38eabcc971651a5dcd81c8f465e30aea48e5384693df6584d5fe96878b493ef7/wofferl/proxmox-backup-arm64"
---

# proxmox-backup-arm64
Script for building Proxmox Backup Server **4.x** for **Debian/Trixie**<br />
To build Proxmox Backup Server **3.x** for **Debian/Bookworm** use the stable-3 branch.

At least 4 GB are required for compiling. On devices with low memory, SWAP must be used (see help section).

## Download pre-built packages
You can find unoffical debian packages for **Bookworm** or **Trixie** that are created with the build.sh script and github actions at https://github.com/wofferl/proxmox-backup-arm64/releases.

With the script you can also download all files of the latest **Debian/Trixie** release at once

**Download and install**

 `./build.sh install` or a specific version `./build.sh install=4.2.12-1`

**Download only**

`./build.sh download` or a specific version `./build.sh download=4.2.12-1`

## Build manually
### Install build essentials and dependencies
```
apt-get install -y --no-install-recommends \
	build-essential curl ca-certificates sudo git lintian fakeroot \
	pkg-config libudev-dev libssl-dev libapt-pkg-dev libclang-dev \
	libpam0g-dev zlib1g-dev nettle-dev
```
### Install ``rustup``
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs -sSf | sh -s…

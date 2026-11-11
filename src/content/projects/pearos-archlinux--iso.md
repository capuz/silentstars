---
repo: "pearOS-archlinux/iso"
name: "iso"
description: "pearOS ISO builder source code"
readmeQualityOk: true
url: "https://github.com/pearOS-archlinux/iso"
homepage: "https://pearos.xyz"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [45, 41]
stars: 410
forks: 31
openIssues: 4
closedIssues: 131
watchers: 14
contributors: 6
recentReleases: 0
createdAt: "2022-02-15T19:12:24Z"
lastCommitAt: "2026-11-11T11:22:45Z"
lastReleaseAt: "2025-10-31T01:37:25Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 38
maintainers: ["alxb421", "Waddle250", "Victor1890"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab48d228679fbe4b2c3c2c90f80cf77889bb89372a071c9be62bb971c56e1191/pearOS-archlinux/iso"
fundingLinks: ["GITHUB:https://github.com/pearOS-archlinux", "PATREON:https://patreon.com/PearSoftwareandServices", "CUSTOM:https://www.paypal.com/paypalme/alxb421", "CUSTOM:https://revolut.me/alxb421"]
discussionCount: 2
---

---

# pearOS-arch-base 📌
It is pearOS, but with Arch Base. Yes! It uses vanilla arch, less bugs, easier, better etc.

## Why? 📌
I had enough with Debian-based distros.
pearOS with an Arch base solves some of the big problems with pearOS, for example:

> "This requires you to reinstall with every new release"

> "`sudo apt upgrade` would/will destroy your installation"

Not anymore. With Arch, there's no more base-hopping.
Now, with Arch, the system is now Rolling Release, as it should be :>

You can do now `sudo pacman -Syu` and you will stil have the pearOS branding.

## Ok... How do I build it? 📌
Make sure you satisfy the dependencies in the section below.
After that, run `sudo ./build-binary` and ~~pray~~ wait.

**Note:** The build script must be run as root (using `sudo`) since it needs to create chroot environments and install packages.

### Dependencies: 📌

#### Required packages:
```sh
# Core build tools
sudo pacman -S arch-install-scripts    # Provides pacstrap and arch-chroot
sudo pacman -S mtools                  # Provides mcopy, mmd for FAT filesystem operations
sudo pacman -S squashfs-tools          # Provides mksquashfs for creating squashfs images
sudo pacman…

---
repo: "pearOS-archlinux/iso"
name: "iso"
description: "pearOS ISO builder source code"
readmeQualityOk: true
url: "https://github.com/pearOS-archlinux/iso"
homepage: "https://pearos.xyz"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [43, 42]
stars: 398
forks: 30
openIssues: 4
closedIssues: 131
watchers: 13
contributors: 6
recentReleases: 0
createdAt: "2022-02-15T19:12:24Z"
lastCommitAt: "2026-11-02T17:57:01Z"
lastReleaseAt: "2025-10-31T01:37:25Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 38
maintainers: ["alxb421", "Victor1890", "Waddle250"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a6489887e725fadd776f893916b3617c57c121cad93d4d5e277dc08d9637c7e/pearOS-archlinux/iso"
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

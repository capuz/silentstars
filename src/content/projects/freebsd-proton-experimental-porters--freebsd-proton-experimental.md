---
repo: "FreeBSD-Proton-Experimental-Porters/FreeBSD-Proton-Experimental"
name: "FreeBSD-Proton-Experimental"
description: "Wine Proton, but Experimental, for FreeBSD!"
url: "https://github.com/FreeBSD-Proton-Experimental-Porters/FreeBSD-Proton-Experimental"
language: "C"
languages: ["C", "Shell"]
languagePcts: [54, 25]
stars: 36
forks: 4
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2025-02-06T01:00:29Z"
lastCommitAt: "2026-06-28T01:36:14Z"
lastReleaseAt: "2026-06-27T07:55:35Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 54
maintainers: ["XaeroVincent", "trite2k3"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c0b5536654c31a16dd01e319e282e5eaee989eccda4e555db2422fb7d2f6fcb/FreeBSD-Proton-Experimental-Porters/FreeBSD-Proton-Experimental"
---

# FreeBSD Proton Experimental

**AI Disclosure:** _AI agents were used to assist with development._

### What is this?
> This repo contains Proton Experimental 11.0.
---

## Configuration (set these once)

Adjust these variables to match your system and FreeBSD version.

```
# FreeBSD version
# Examples:
#   14.4-RELEASE
#   15.0-RELEASE (15-CURRENT, pkgbase or FreeBSD 14.4 required for i386)
export FREEBSD_VERSION="15.0-RELEASE"
export FREEBSD_VERSION_I386="14.4-RELEASE"

# amd64 jail name
export FREEBSD_JAIL_AMD64=main-amd64

# i386 jail name
export FREEBSD_JAIL_I386="i386"

#export FREEBSD_JAIL_AMD64_PKGB="14-stable-amd64"
#export FREEBSD_JAIL_I386_PKGB="14-stable-i386"

# pkgbase jail names FreeBSD 15-CURRENT
export FREEBSD_JAIL_AMD64_PKGB="main-amd64"
export FREEBSD_JAIL_I386_PKGB="main-i386"
```

---

## How to use?
> Here are some instructions for building:

> Make sure you have git before continuing.

---

## Install poudriere

```
pkg install poudriere
```

This is a good time to go over the poudriere.conf since default settings may take a very long time to build and may use a lot of RAM.

Modify `/usr/local/etc/poudriere.conf`:
```
ZPOOL=zroot
USE_TMPFS=yes…

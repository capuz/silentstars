---
repo: "pentoo/pentoo-overlay"
name: "pentoo-overlay"
description: "Gentoo overlay for security tools as well as the heart of the Pentoo Livecd"
url: "https://github.com/pentoo/pentoo-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 379
forks: 111
openIssues: 201
closedIssues: 1306
watchers: 22
contributors: 67
recentReleases: 0
createdAt: "2015-08-13T19:38:26Z"
lastCommitAt: "2026-06-26T21:32:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 38
maintainers: ["blshkv", "Miorgg", "rick-gnous"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca54be9195de80c8591d6940304aeefb8182d808023470fd7d3466a5705a8df0/pentoo/pentoo-overlay"
---

# Pentoo Penetration Testing Overlay
Gentoo overlay for security tools as well as the heart of the Pentoo Livecd

Pentoo is a Live CD and Live USB designed for penetration testing and security assessment. Based on Gentoo Linux, Pentoo is provided both as 32 and 64 bit installable livecd. Pentoo is also available as an overlay for an existing Gentoo installation. It features packet injection patched wifi drivers, GPGPU cracking software, and lots of tools for penetration testing and security assessment. The Pentoo kernel includes grsecurity and PAX hardening and extra patches - with binaries compiled from a hardened toolchain with the latest nightly versions of some tools available. The latest release of the Pentoo Livecd is the daily autobuilds (https://www.pentoo.ch/isos/daily-autobuilds/)

# Adding the overlay

Update the portage to the latest version

```
emaint sync
```

Make sure that eselect-repository and git are installed

```
emerge eselect-repository git
```

Update list of overlays

```
eselect repository list
```

Add Pentoo overlay

```
eselect repository enable pentoo
```

Want to learn more? [See the wiki.](https://github.com/pentoo/pentoo-overlay/wiki)

Discussion…

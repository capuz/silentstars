---
repo: "jordanhubbard/daemonarchy"
name: "daemonarchy"
description: "The Omarchy desktop on FreeBSD: installer ISO and build tooling "
readmeQualityOk: true
url: "https://github.com/jordanhubbard/daemonarchy"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [60, 40]
stars: 145
forks: 6
openIssues: 6
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-10-01T05:07:15Z"
lastCommitAt: "2026-10-26T21:01:14Z"
lastReleaseAt: "2026-10-16T06:02:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 84
undervaluedScore: 28
maintainers: ["jordanhubbard"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a4b3fecee106bb959a3a39d12ebbf9c2e80bd2d4ef15694656f53ca1f999dca/jordanhubbard/daemonarchy"
---

# Daemonarchy

Daemonarchy is the [Omarchy](https://omarchy.org) desktop on FreeBSD: DHH's opinionated Hyprland desktop, ported to FreeBSD and installed the way the Omarchy ISO installs it on Arch. The name is a homage: Omarchy's *-archy*, ruled by the BSD daemon.

This repository builds a bootable FreeBSD 16.0-CURRENT image with the Daemonarchy installer: the same welcome screen, keyboard, account, hostname, and timezone questions as the Omarchy ISO, then an installation onto a whole disk, a selected GPT partition, or existing free space that boots into the desktop (partition selection is new in 1.1). Daemonarchy is not affiliated with Omarchy; the Omarchy software itself comes, unchanged apart from FreeBSD compatibility, from the `x11-wm/omarchy` port.

Each release is built from a FreeBSD 16.0-CURRENT snapshot. CURRENT moves daily, so an image is tied to the snapshot it was built from.

Product goals and adoption status are in [PROJECT.md](https://github.com/jordanhubbard/daemonarchy/blob/HEAD/PROJECT.md). The
[active work queue](https://github.com/jordanhubbard/daemonarchy/blob/HEAD/docs/roadmap/active-work.md) tracks stable tasks and evidence;
[the…

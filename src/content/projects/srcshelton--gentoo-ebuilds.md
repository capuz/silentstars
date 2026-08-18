---
repo: "srcshelton/gentoo-ebuilds"
name: "gentoo-ebuilds"
description: "Gentoo Linux Customised ebuild Repository"
readmeQualityOk: true
url: "https://github.com/srcshelton/gentoo-ebuilds"
language: "Shell"
languages: ["Shell"]
languagePcts: [87]
stars: 6
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2013-02-15T11:14:30Z"
lastCommitAt: "2026-08-18T04:08:31Z"
lastReleaseAt: "2026-06-10T13:18:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 83
maintainers: ["srcshelton"]
openGraphImageUrl: "https://opengraph.githubassets.com/35ecc9a683b9b1dfb0a345535a671a0d1c766e0fc5735ee6c0a36d00e31d360c/srcshelton/gentoo-ebuilds"
---

Various [Gentoo Linux](http://www.gentoo.org/) ebuilds, to provide out-of-tree
packages and miscellaneous fixes.

# TODO

Investigate extracting `PARALLEL_MEMORY_MIN` handling to a new eclass ...

# Latest versions of podman container management tools

* app-containers/buildah
* app-containers/catatonit
* app-containers/conmon
* app-containers/containers-storage
* app-containers/crun
* app-containers/runc
* app-containers/skopeo
* app-containers/slirp4netns

# Fixes for ROOT != / installation

* dev-libs/cyrus-sasl
* dev-libs/glib
* mail-mta/postfix
* net-dns/bind
* net-libs/glib-networking

# Fixes to reduce/disable build parallelism on low-memory systems

* app-text/doxygen
* media-libs/harfbuzz
* net-libs/libtorrent-rasterbar

# -ffast-math/aggressive optimisation fixes

* dev-lang/duktape
* dev-lang/python
* dev-scheme/guile
* sys-apps/xinetd
* sys-auth/polkit

# Raspberry Pi tools and utilities

* dev-python/raspberrypi-gpio
    * RPi.GPIO ebuild
* media-libs/raspberrypi-userland
    * Replace non-functional Raspian init script with OpenRC equivalent, and update PID location
* sys-apps/raspberrypi-utilities-armv6
    * Some Raspberry Pi userland tools are closed-source, and…

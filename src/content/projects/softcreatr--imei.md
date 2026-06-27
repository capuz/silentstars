---
repo: "SoftCreatR/imei"
name: "imei"
description: "IMEI - ImageMagick Easy Install"
url: "https://github.com/SoftCreatR/imei"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["imagemagick", "image-processing", "image-manipulation", "image-analysis", "heic", "avif", "avif-decoder", "avif-encoder", "jpg", "png"]
stars: 368
forks: 48
openIssues: 0
closedIssues: 74
watchers: 5
contributors: 10
recentReleases: 9
createdAt: "2020-08-28T05:17:05Z"
lastCommitAt: "2026-06-27T00:34:09Z"
lastReleaseAt: "2026-06-22T00:55:24Z"
status: "thriving"
tags: ["legacy_hero", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 34
maintainers: ["github-actions[bot]", "SoftCreatR"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/290957380/d19eb280-ebe8-11ea-8eb1-53253555531e"
fundingLinks: ["GITHUB:https://github.com/SoftCreatR", "CUSTOM:https://ecologi.com/softcreatr?r=61212ab3fc69b8eb8a2014f4"]
---

# IMEI - ImageMagick Easy Install
#### Signed ImageMagick `.deb` packages for Debian and Ubuntu, with pre-built releases and local package builds.

</div>

---

## What IMEI Does

IMEI installs ImageMagick and selected delegate libraries as proper Debian packages instead of running `make install` directly on the target system.

That gives you two installation paths:

* pre-built signed `.deb` packages for supported release targets
* local package builds for older systems or custom build options

In both cases, the end result is still managed by `apt` / `dpkg`, so removal stays clean.

## Why IMEI Exists

IMEI is meant to solve the two common problems with ad-hoc ImageMagick install scripts:

* building everything on the target machine can take too long
* hand-installed files are hard to remove cleanly later

IMEI keeps the convenience of an install script, but the actual installation happens through generated `.deb` packages.

## Security Model

IMEI verifies signatures in two places by default:

* the local `imei.sh` script verifies itself against `imei.sh.sig`
* pre-built release installs verify signed release metadata before any `.deb` is installed

The release install path…

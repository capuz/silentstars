---
repo: "AOSC-Dev/aoscbootstrap"
name: "aoscbootstrap"
description: "A tool for bootstrapping and releasing AOSC OS distributions"
readmeQualityOk: true
url: "https://github.com/AOSC-Dev/aoscbootstrap"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 8
forks: 2
openIssues: 0
closedIssues: 4
watchers: 12
contributors: 105
recentReleases: 0
createdAt: "2020-05-17T04:53:55Z"
lastCommitAt: "2026-08-08T04:32:54Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 75
undervaluedScore: 39
maintainers: ["MingcongBai", "Cyanoxygen", "eatradish"]
openGraphImageUrl: "https://opengraph.githubassets.com/c27b48b04901942d72b9463fef098f5ef7595abe2cce0ecfb623802d77f4c5f5/AOSC-Dev/aoscbootstrap"
discussionCount: 0
---

# AOSCBootstrap

## Dependencies

AOSCBootstrap requires the following libraries and utilities:

- liblzma
- nettle
- zlib
- arch-chroot

On AOSC OS, you may install these dependencies using the following command:

```bash
# oma install xz nettle zlib arch-chroot
```

## Usage

```
aoscbootstrap \
	--branch <branch> \
	--component <component> \
	--target <path/to/target> \
	--arch <architecture> \
	--config <config> \
	[--include <additional packages>] \
	[--include-files <list of packages>] \
	[--mirror <URL including path to APT repo root]
```

- The `[mirror URL]` argument is optional, when omitted, the script defaults to `https://repo.aosc.io/debs`.
- The `--include` and `--include-files` arguments are optional, can be specified multiple times and can be specified together.

For example, to bootstrap a `amd64` architecture base system on the `stable` branch at `/root/aosc`, using `localhost` as the mirror:

```
aoscbootstrap \
	--branch stable \
	--target /root/aosc \
	--mirror http://localhost/debs \
	--arch amd64 \
	--config aosc-mainline.toml
```

If you want to include additional packages, for example, add `network-base` and `systemd-base`:

```
aoscbootstrap \
	--branch…

---
repo: "mid-kid/gentoo-config"
name: "gentoo-config"
description: "My gentoo-specific configuration files and patches"
readmeQualityOk: true
url: "https://github.com/mid-kid/gentoo-config"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 9
forks: 2
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-05-03T12:26:27Z"
lastCommitAt: "2026-09-15T08:55:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 55
maintainers: ["mid-kid"]
openGraphImageUrl: "https://opengraph.githubassets.com/16e36936a3b968b9c72002243e1dc5d8d00aaae727d12f637a97a59e7b8a98ff/mid-kid/gentoo-config"
---

Customizing things down to the source code is incredibly empowering, and it's a shame that other distributions introduce a heavy maintainance cost when you try to do any of that, to the point you're sometimes better off just forking the distro.

This repository has been published to help substantiate this argument. Gentoo is, ironically enough, the easiest distribution for me to use. Nothing else comes close.

If you're snooping around, or I sent you here, I recommend checking out the `patches/` and `env/` directories, as these are where the *real* power resides. If you've heard Gentoo is powerful because of USE flags, that's really only scratching the surface.

Most everything else is bespoke portage configuration, where I try to work around some defaults and other things I don't particularly like.

NOTE: I've begun moving my configurations into custom profiles in `make.profile/`. Separating things out like this allows me to keep device- and setup-specific configurations in the same repository, only modifying the `make.profile/parent` file. Unfortunately, since make.profile is considered the "base" from which the rest of the portage configuration derives, I will have to move…

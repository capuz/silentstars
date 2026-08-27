---
repo: "srcshelton/docker-gentoo-build"
name: "docker-gentoo-build"
description: "Build Gentoo Linux packages and services entirely in Docker"
readmeQualityOk: true
url: "https://github.com/srcshelton/docker-gentoo-build"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
topics: ["gentoo-stage3", "docker"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-05-22T12:22:16Z"
lastCommitAt: "2026-08-27T14:14:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 56
maintainers: ["srcshelton"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c5d1e409b0cc570bc337cc7ff4c3967c6c14b3a7c43b340cdafc215de5de261/srcshelton/docker-gentoo-build"
---

# Build a Gentoo Base System in a Container

Run `./gentoo-init.docker` to fetch the latest Gentoo stage3 image and use this
to construct a new `@system` image, intended to act as the base upon which to
build further binary packages.

**Be warned that this process may take several hours even with all dependent
packages pre-built as binaries**.

`./gentoo-build-pkg.docker <package...>` will then use the resulting image to
build the specified package(s) and store them persistently on the host as
(by default) `.gpkg.tar` binary packages.

Gentoo's Portage allows many configuration files beneath `/etc/portage/` to be
represented as a single file, or as multiple files within a directory of the
same name.  Due to the need to merge elements from the host and elements from
the build-system, the container build process requires some of these
configuration elements to be stored in directories.  If changes need to be made
on the host system then the build process will advise of the fix required.

The file `gentoo-base/etc/portage/package.use.build/05_host.use` may be used to
include any host-specific configuration conventionally located in
`/etc/portage/make.conf` whilst…

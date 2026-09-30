---
repo: "chimera-linux/cports"
name: "cports"
description: "Chimera ports collection"
readmeQualityOk: true
url: "https://github.com/chimera-linux/cports"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 349
forks: 307
openIssues: 59
closedIssues: 394
watchers: 7
contributors: 161
recentReleases: 0
createdAt: "2021-06-05T02:07:34Z"
lastCommitAt: "2026-09-30T09:44:11Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 43
maintainers: ["q66", "flukeeey", "natthias"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce9854b25c4eb964381a28dd2687e38eaf73ee9036a0fe8ed188036e1eca45cb/chimera-linux/cports"
---

# cports

Cports is a collection of source package ports for Chimera. The system has been
written specifically for the distribution using the Python scripting language.

From user standpoint, it works similarly to many distro packaging systems (users
of Void Linux `xbps-src` will most likely find it a little familiar) however it
is not based on any existing system and should not be considered a variant of any.

There are two authoritative documents on the system:

* [`Usage.md`](https://github.com/chimera-linux/cports/blob/HEAD/Usage.md) is the reference for users. It covers usage of `cbuild` and its
  basic and advanced options as well as concepts and requirements.
* [`Packaging.md`](https://github.com/chimera-linux/cports/blob/HEAD/Packaging.md) is the reference manual for packagers. It covers the API of the
  system and guidelines for creating and modifying templates, but not usage.

Most people looking to get involved with the project should read both.

To get started, read [`Usage.md`](https://github.com/chimera-linux/cports/blob/HEAD/Usage.md) first.

## Using cports with Chimera

You might want to test your built packages in an actual Chimera system. Since
`cbuild` creates…

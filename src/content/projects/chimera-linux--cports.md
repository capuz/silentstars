---
repo: "chimera-linux/cports"
name: "cports"
description: "Chimera ports collection"
readmeQualityOk: true
url: "https://github.com/chimera-linux/cports"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 366
forks: 330
openIssues: 37
closedIssues: 427
watchers: 6
contributors: 168
recentReleases: 0
createdAt: "2021-06-05T02:07:34Z"
lastCommitAt: "2026-11-06T13:19:45Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 43
maintainers: ["q66", "flukeeey", "natthias"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4b5d6396ab95a776dfa802c1b68e905b3e99dc2219a8417f1c11ca873a89b0/chimera-linux/cports"
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

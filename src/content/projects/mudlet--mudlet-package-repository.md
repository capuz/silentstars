---
repo: "Mudlet/mudlet-package-repository"
name: "mudlet-package-repository"
description: "A repository for Mudlet packages."
readmeQualityOk: true
url: "https://github.com/Mudlet/mudlet-package-repository"
homepage: "https://packages.mudlet.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["mudlet", "packages", "repository"]
stars: 13
forks: 21
openIssues: 10
closedIssues: 46
watchers: 7
contributors: 19
recentReleases: 0
createdAt: "2024-05-19T08:26:50Z"
lastCommitAt: "2026-08-21T04:12:56Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 79
maintainers: ["vadi2", "mudlet-machine-account", "tmtocloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/0213a3f6bed46b81dae6e6cbea62f84f65c12aed48c3595cf80537de0a48e6e1/Mudlet/mudlet-package-repository"
---

## A Package Repository for [Mudlet](https://www.mudlet.org) ##

This Github repository hosts packages made for the Mudlet MUD client.  It is also home to the development of **mpkg**, a command line interface for managing packages used in [Mudlet](https://www.mudlet.org) which helps you install, remove, search and update packages from the Mudlet command line.

### Installation ###

mpkg comes preinstalled on later (4.20+) versions of Mudlet.  If you do not have it, consider upgrading or
issue this command on any profile you wish to use mpkg with.

```lua installPackage("https://github.com/Mudlet/mudlet-package-repository/raw/refs/heads/main/packages/mpkg.mpackage")```

Then on the command line you can issue any of the following commands.

```
Commands:
  mpkg install          -- install/upgrade a package
  mpkg list             -- list all installed packages
  mpkg remove           -- remove an existing package
  mpkg search           -- search for a package
  mpkg show             -- show detailed information about a package
  mpkg update           -- update package listing from repository
```

### Submit a Package ###

Have you created a package you wish to share?  There are two…

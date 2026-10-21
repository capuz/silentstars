---
repo: "Mudlet/mudlet-package-repository"
name: "mudlet-package-repository"
description: "A repository for Mudlet packages."
readmeQualityOk: true
url: "https://github.com/Mudlet/mudlet-package-repository"
homepage: "https://packages.mudlet.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["mudlet", "packages", "repository"]
stars: 13
forks: 25
openIssues: 10
closedIssues: 55
watchers: 7
contributors: 21
recentReleases: 0
createdAt: "2024-05-19T08:26:50Z"
lastCommitAt: "2026-10-21T17:31:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 79
maintainers: ["github-actions[bot]", "mudlet-machine-account", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c1b27e4ca9d2dfa85b5e023a312dfa5f316756c04f39a722e6c9b98bc5a5182/Mudlet/mudlet-package-repository"
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

---
repo: "tunisiano187/Chocolatey-packages"
name: "Chocolatey-packages"
description: "Chocolatey automatic packages from tunisiano"
readmeQualityOk: true
url: "https://github.com/tunisiano187/Chocolatey-packages"
homepage: "https://community.chocolatey.org/profiles/tunisiano"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [93]
stars: 9
forks: 22
openIssues: 2
closedIssues: 3689
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2020-05-26T12:19:50Z"
lastCommitAt: "2026-09-22T08:44:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 92
maintainers: ["tunisiano187", "actions-user", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa98cf89efc04c20395e232432bf6fee43ac429f1badbe97226246d3dee8c964/tunisiano187/Chocolatey-packages"
fundingLinks: ["GITHUB:https://github.com/tunisiano187", "PATREON:https://patreon.com/tunisiano", "KO_FI:https://ko-fi.com/tunisiano", "LIBERAPAY:https://liberapay.com/tunisiano18"]
---

# Chocolatey Packages

This repository contains Chocolatey packages ([list][package-list]) created and
maintained by [tunisiano][tunisiano-profile] that are updated daily.

## Guidelines

### Reporting broken/outdated packages

If packages from this repository fail to install, or a new version has been
released by the publisher for a particular package, please report it in any of
the following ways:

- [GitHub issue][new-ghissue]

#### Broken packages

If the package fails to install or uninstall successfully using Chocolatey
(`choco`), please include a log of the debug output from the terminal for the
exact command used:

```shell
choco install <package_name> --yes --verbose --debug
```

#### Outdated packages

If the package has fallen out-of-date, please include the following information
when opening an issue here about if, if possible:

- The most recent release's:
  - Date
  - Version number/name
  - Known good URL to the installation package

## Tags

Learn more about [package tags][tags].

## Contributing

1. As much as possible, these packages are maintained
   [automatically][automatic-packages] by the
   [AU PowerShell module][chocolatey-au].
1. If allowed, packages will…

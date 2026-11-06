---
repo: "AdguardTeam/HostlistsRegistry"
name: "HostlistsRegistry"
description: "Known hosts blocklists that are made available to the users of AdGuard products"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/HostlistsRegistry"
homepage: "https://adguard-dns.io/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["adguard", "adguard-home", "adguard-dns"]
stars: 417
forks: 116
openIssues: 45
closedIssues: 416
watchers: 17
contributors: 54
recentReleases: 0
createdAt: "2021-12-21T12:08:19Z"
lastCommitAt: "2026-11-06T12:17:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 39
maintainers: ["github-actions[bot]", "Alex-302", "ntnguyen1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/64fef368ad610c782c35f219684737224d1a2d502220fa4efc4b2520c78bc066/AdguardTeam/HostlistsRegistry"
---

# AdGuard Host Lists Registry

- [What Blocklists Can Be Added Here](#what-blocklists)
- [Where Blocklists Are Published](#published)
- [Filters Metadata](#filters-meta)
- [Services Metadata](#services-meta)
- [Safe Search Filters](#safe-search)
- [Typosquatting Allowlist](#typosquatting-allowlist)
- [How to Build](#how-to-build)
- [How to Compress](#how-to-compress)
- [Localizations](#localizations)

This repository contains the known hosts blocklists that are made available to the users of AdGuard products ([AdGuard DNS](https://adguard-dns.com/), [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome), etc).

Some of these blocklists are automatically [converted](https://github.com/AdguardTeam/HostlistCompiler) to the rules format that AdGuard product understand better.

## <a id="published"></a> Where Blocklists Are Published

- [`filters.json`](https://adguardteam.github.io/HostlistsRegistry/assets/filters.json) contains all the blocklists added to the repo. `downloadURL` is the location of the re-hosted blocklist.
- [`filters_apps.json`](https://adguardteam.github.io/HostlistsRegistry/assets/filters_apps.json) contains a minimal hand-picked subset of the blocklists that…

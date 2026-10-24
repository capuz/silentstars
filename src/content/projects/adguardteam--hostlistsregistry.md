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
stars: 410
forks: 120
openIssues: 45
closedIssues: 414
watchers: 18
contributors: 54
recentReleases: 0
createdAt: "2021-12-21T12:08:19Z"
lastCommitAt: "2026-10-24T08:21:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 39
maintainers: ["github-actions[bot]", "Alex-302", "zloyden"]
openGraphImageUrl: "https://opengraph.githubassets.com/772ff49f4feb0969160c99bcb97e74664d2ae873187a5d61d5b38e94d202265a/AdguardTeam/HostlistsRegistry"
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

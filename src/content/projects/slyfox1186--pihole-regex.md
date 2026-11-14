---
repo: "slyfox1186/pihole-regex"
name: "pihole-regex"
description: "Custom RegEx, Exact, and Adlist filters for Pi-hole's FTLDNS"
readmeQualityOk: true
url: "https://github.com/slyfox1186/pihole-regex"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blacklist", "dns", "pi-hole", "regex", "ad-blocker", "ads", "blacklisting", "filters", "python3", "shell-script"]
stars: 99
forks: 10
openIssues: 0
closedIssues: 11
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2021-05-15T13:21:12Z"
lastCommitAt: "2026-11-14T10:43:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 40
maintainers: ["slyfox1186", "myronlabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cfae988432c9ae6ca82b5429c997778e8ccb6bbe2f1536692086f8aacbc74be/slyfox1186/pihole-regex"
---

# Pi-hole® v6+ FTLDNS: Advanced Filter Collection
- Maximize the efficiency of your Pi-hole setup with our extensive collection of Regular Expressions (RegEx) and Exact Match filters. Designed to block a broad range of domains effectively, our filters simplify your blocking strategy by minimizing the need for numerous individual entries. Additionally, this repository includes customizable Exact Match filters for precise domain blocking, tools to facilitate the easy management of Adlist Group entries, and a script that sets up unbound as Pi-hole's own recursive DNS resolver.

## Last updated on 11.14.2026:
Every entry now has a description that says what the domain is and what it does, backed by sources you can check in [docs/domain-notes-sources.md](https://github.com/slyfox1186/pihole-regex/blob/HEAD/docs/domain-notes-sources.md). While checking every entry we also fixed four rules:

- Twitch extensions work again. A blocked Twitch server turned out to be the one that loads every extension, not an ad server.
- The LG Channels app on LG TVs can start again. Two LG services it needs were blocked; LG's tracking services stay blocked.
- Removed the allow for `pagecdn.io`. That domain…

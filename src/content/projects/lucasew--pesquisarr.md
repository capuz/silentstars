---
repo: "lucasew/pesquisarr"
name: "pesquisarr"
description: "Use public search engines and publicly available websites to search for torrents in a clean way."
url: "https://github.com/lucasew/pesquisarr"
homepage: "https://pesquisarr.biglucas.workers.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["cloudflare-workers", "hacktoberfest"]
stars: 23
forks: 12
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-02-02T17:22:13Z"
lastCommitAt: "2026-06-28T01:46:58Z"
lastReleaseAt: "2025-08-06T15:23:46Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 58
maintainers: ["google-labs-jules[bot]", "renovate[bot]", "lucasew"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f455732abacbaeb298f14c76906db6157cd1d7a6d8f9229b9da69ae050f204/lucasew/pesquisarr"
---

# pesquisarr

Simple cloudflare worker to search for the gold in torrent sites.

**WARNING**: This thing doesn't store any illegal data. All the data provided is already freely available on the Internet. This utility only makes it easier to search for it.

The utility already tries to use the first page of both Google and DuckDuckGo, then get the site links, static website content and lastly the magnet links in the site content. All of this without loading any of the Javascript crap that is pushed towards the user.

If the search fails, it's treated as if there is nothing found.

If the site loading takes more than 2s it's treated as if the site does not have any magnet link.

You only gets what really matters: the magnet links.

**The search query is your responsibility**

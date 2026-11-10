---
repo: "plhery/universal-parcel-scraper"
name: "universal-parcel-scraper"
description: "Self-hosted parcel tracking: 105 carriers, a TypeScript library, CLI, and HTTP API."
readmeQualityOk: true
url: "https://github.com/plhery/universal-parcel-scraper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["home-assistant", "parcel-tracking", "scraper", "self-hosted", "typescript"]
stars: 9
forks: 3
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-01T20:36:12Z"
lastCommitAt: "2026-11-10T14:49:04Z"
lastReleaseAt: "2026-10-13T09:44:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["plhery"]
openGraphImageUrl: "https://opengraph.githubassets.com/80b04ac9db8086493858f02683c6dad9c51d4e8baa118d7c92581fea4d8fb341/plhery/universal-parcel-scraper"
---

# Universal Parcel Scraper

**Parcel tracking that asks the carrier directly, from your own machine.**

The engine behind [Peek](https://peektracker.com) ([GitHub](https://github.com/plhery/peek-delivery-tracker)), the open-source parcel tracker for iPhone and the web.

**3,500+ carriers** through **755 dedicated adapters** and **5 universal fallbacks**

[Try it](#try-it) · [Ways to run it](#ways-to-run-it) · [Benchmark](#benchmark) · [Carriers](https://github.com/plhery/universal-parcel-scraper/blob/HEAD/carriers/) · [Add a carrier](https://github.com/plhery/universal-parcel-scraper/blob/HEAD/CONTRIBUTING.md)

Give it a tracking number. It finds the carrier, fetches the history from the carrier's own
site and returns the same JSON for every carrier. No account, no API key.

It is the tracking engine of [Peek](https://github.com/plhery/peek-delivery-tracker), usable on
its own as a command, a Node library or an HTTP server.

## Benchmark

In a benchmark of 100 carriers picked for shoppers in Europe, run on public tracking numbers anyone can recheck, dedicated adapters return history for **91**, rising to **95** with all fallbacks enabled. The best single aggregator returns 73.…

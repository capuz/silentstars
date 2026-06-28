---
repo: "patrickbr/gtfstidy"
name: "gtfstidy"
description: "A tool for checking, sanitizing and minimizing GTFS feeds."
url: "https://github.com/patrickbr/gtfstidy"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["gtfs", "validation", "minimization", "tidy"]
stars: 146
forks: 21
openIssues: 10
closedIssues: 16
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2016-08-14T15:26:58Z"
lastCommitAt: "2026-06-28T07:02:42Z"
lastReleaseAt: "2021-05-20T14:48:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 74
undervaluedScore: 31
maintainers: ["patrickbr", "PatrickSteil", "magnusburton"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4af2245a7db753ec9c23520482ebd1b6fe137b374ff19138db3001e0dbd804f/patrickbr/gtfstidy"
---

# gtfstidy

Tidy (and validate) [GTFS](https://developers.google.com/transit/gtfs/) feeds.

Fixes small inconsistencies, minimizes the overall feed size, and prepares the feed for secure, standard-compliant further use.

Output feeds are **semantically equivalent** to the input feed. In this context, semantical equivalency means that the output feed provides exactly the same trips with exactly the same attributes (routes, stop-times, shapes, agency, fares etc.). In other words, the output feed is equivalent to the input feed from a passenger's perspective.

## 0. Features

* **Clean CSV output.** Only quote string values where needed, use dynamic float precision and remove whitespace. Only output files that are necessary.
* **Default-value error handling.** If non-required fields in the input-feed have errors, fall back to the default value according to the GTFS standard
* **Drop-entities error handling.** If non-fixable errors occur, drop the affected entity (trip, route, stop, etc.).
* **Orphan deletion**. Delete stops, routes, stop times and shapes that aren't referenced anywhere
* **ID minimization**. Replace IDs with dense integer or character IDs
* **Shape minimization**.…

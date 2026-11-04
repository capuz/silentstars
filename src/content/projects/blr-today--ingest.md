---
repo: "blr-today/ingest"
name: "ingest"
description: "Ingestion pipeline for blr.today"
readmeQualityOk: true
url: "https://github.com/blr-today/ingest"
homepage: "https://blr.today"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [61, 37]
topics: ["bangalore", "events", "git-scraping", "blr-today"]
stars: 13
forks: 4
openIssues: 43
closedIssues: 29
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-03-08T06:37:50Z"
lastCommitAt: "2026-11-04T08:03:34Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 83
undervaluedScore: 69
maintainers: ["github-actions[bot]", "captn3m0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5df4b26a21fcdf49ef583ebe22b8f8ae0ceb9ca62da99e33feeb61dcd122f8b3/blr-today/ingest"
---

# blr.today ingestion

This is the source code for the BLR.Today ingestion pipeline. This code does the following:

1. Fetches events from dozens of sources.
2. Enriches events with metadata, and cleanup. For example - location information is added where possible,
   and events are classified using schema.org/Event sub-types.
3. Events are exported in the `schema.org/Event` schema to a SQLite database.

## Status

The following sources are automatically ingested, filtered to just Bangalore events
wherever necessary.

- Ace of Pubs
- Adidas Runners
- AllEvents.in
- Atta Gallata
- Bangalore International Center
- Bengaluru Sustainability Forum
- Bhaago India
- Blue Tokai Events
- Carbon Science Gallery
- Champaca
- Courtyard Koota
- Creative Mornings BLR
- Gully Tours
- HighApe.com
- Townscript - Known Hosts only
- Musuem of Art & Photography
- Max Mueller Bhavan
- Zomato Insider
- PUMA Nitro Runs
- Sisters in Sweat
- Skillboxes
- Sofar
- Sumukha Gallery
- The Courtyard
- Together.buzz
- Tonight.is
- Total Environment Music Events (Windmills)
- Trove Experiences
- Venn

A lot more are in-progress, please see [`TODO.md`](https://github.com/blr-today/ingest/blob/HEAD/TODO.md) for a…

---
repo: "JimJamBimBam/obsidian-log-keeper"
name: "obsidian-log-keeper"
description: "Generates times stamps automatically as changes are made to a note."
url: "https://github.com/JimJamBimBam/obsidian-log-keeper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["obsidian", "obsidian-md", "obsidian-plugin", "markdown"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-03-06T23:00:02Z"
lastCommitAt: "2026-06-25T01:11:44Z"
lastReleaseAt: "2025-06-13T01:01:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 44
maintainers: ["danyx23", "JimJamBimBam"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce0117b288f1d500d46602b2ef1b107466655205a738ec6ae492cb9950e705eb/JimJamBimBam/obsidian-log-keeper"
---

# Log Keeper

<a>![Plugin Release Date](https://img.shields.io/github/release-date-pre/JimJamBimBam/obsidian-note-modification-tracker?display_date=published_at)
</a>

Track changes to your notes within your [Obsidian Vault](https://obsidian.md/) as you type. When the content of a note changes within a vault, a new time stamp is generated or an original time stamp is edited, depending on the settings. This log is then added to a note's YAML property.

*Example of the 'last-modified' property seen in Obsidian.*

All time stamps are formatted according to the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard format `YYYY-MM-DDTHH:mm:ss` where:

- **YYYY**: Is the current year (e.g. "2025" for the current year)
- **MM**: Is the current month (e.g. "04" for the 4th month)
- **DD**: Is the current day (e.g. "05" for the 5th day of the month)
- **T**: Separates the date and time values
- **HH**: Is the current hour from 0-23
- **mm**: Is the current minute from 0-59
- **ss**: Is the current second from 0-59

*Example of the 'last-modified' property being updated in a note when the Log Keeper plugin is enabled.*

## Uses

#### Contribution Graph / Dataview

Combine Note…

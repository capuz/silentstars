---
repo: "matijaerceg/misterzine"
name: "misterzine"
description: "MiSTer FPGA Core & Arcade Tracker: a self-updating index of every public core and arcade title, with real debut dates back to 2017, screenshots, and RSS feeds"
readmeQualityOk: true
url: "https://github.com/matijaerceg/misterzine"
homepage: "https://www.patreon.com/MisterZine"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["arcade", "fpga", "mister-fpga", "retrogaming"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-30T04:10:52Z"
lastCommitAt: "2026-10-27T12:39:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["matijaerceg"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbc967283f5afe4bc23881c9d7cad4d7cea3cb8cf1cd63309200567891514728/matijaerceg/misterzine"
---

# MisterZine: MiSTer FPGA catalogue and release tracker

An automated release database for **MiSTer FPGA** cores, and the public site it powers:

**[MiSTer FPGA Core & Arcade Tracker](https://misterzine.fyi/releases/)**,
a searchable, sortable tracker of every public MiSTer console, computer, and utility core
plus every public arcade title (1,000+ rows), with real debut dates back to **2017**,
shipped-update dates, screenshots, hardware photos, and RSS feeds. It refreshes itself
**four times a day** via GitHub Actions with no manual steps.

The database answers two questions:

- **Retrospective:** which titles exist, when did each core *debut* on MiSTer, and when
  was it last updated? (Real dates going back to 2017.)
- **Going forward:** what's *new or updated* since the last check, with a date stamp?

Everything the site shows is also available as plain JSON (see [Exports](#exports)).
User-visible site changes are logged in [CHANGELOG.md](https://github.com/matijaerceg/misterzine/blob/HEAD/CHANGELOG.md).

## The site (`docs/` → GitHub Pages)

A single dependency-free page (vanilla JS, self-hosted fonts, no trackers beyond a
privacy-friendly…
